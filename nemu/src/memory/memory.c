#include "common.h"
#include <stdlib.h>
#include "burst.h"
#include "nemu.h"
#include "memory.h"
#define CACHE_BLOCK_SIZE_B 6
#define CACHE_WAY_SIZE_B 3
#define CACHE_SET_SIZE_B 7
#define CACHE_BLOCK_SIZE (1<<CACHE_BLOCK_SIZE_B)
#define CACHE_WAY_SIZE (1<<CACHE_WAY_SIZE_B)
#define CACHE_SET_SIZE (1<<CACHE_SET_SIZE_B)

#define CACHE2_BLOCK_SIZE_B 6
#define CACHE2_WAY_SIZE_B 4
#define CACHE2_SET_SIZE_B 12
#define CACHE2_BLOCK_SIZE (1<<CACHE2_BLOCK_SIZE_B)
#define CACHE2_WAY_SIZE (1<<CACHE2_WAY_SIZE_B)
#define CACHE2_SET_SIZE (1<<CACHE2_SET_SIZE_B)

void ddr3read(hwaddr_t addr, void *data);
void ddr3write(hwaddr_t addr, void *data, uint8_t *mask);
uint32_t dram_read(hwaddr_t, size_t);
void dram_write(hwaddr_t, size_t, uint32_t);
void cache_write(hwaddr_t addr,size_t len,uint32_t data);
void cache2_write(hwaddr_t addr,size_t len,uint32_t data);
uint32_t cache_read(hwaddr_t addr);
uint32_t cache2_read(hwaddr_t addr);

// jie gou ti
struct Cache{
	uint32_t tag;
	bool valid;
	uint8_t data[CACHE_BLOCK_SIZE];
}cache[CACHE_WAY_SIZE*CACHE_SET_SIZE];
struct Cache2{
	uint32_t tag;
	bool valid,dirty;
	uint8_t data[CACHE2_BLOCK_SIZE];
}cache2[CACHE2_WAY_SIZE*CACHE2_SET_SIZE];

void initCache(){
	int i;
	for(i=0;i<CACHE_WAY_SIZE*CACHE_SET_SIZE;i++){
		cache[i].tag=0;
		cache[i].valid=false;
		memset (cache[i].data,0,CACHE_BLOCK_SIZE);
	}
	for(i=0;i<CACHE2_WAY_SIZE*CACHE2_SET_SIZE;i++){
		cache2[i].tag=0;
		cache2[i].valid=false;
		cache2[i].dirty=false;
		memset (cache2[i].data,0,CACHE2_BLOCK_SIZE);
	}
}

uint32_t cache_read(hwaddr_t addr){
	uint32_t flag = addr>>(CACHE_SET_SIZE_B+CACHE_BLOCK_SIZE_B);
	uint32_t set = addr>>(CACHE_BLOCK_SIZE_B);
	set &=(CACHE_SET_SIZE-1);
	int i;
	for(i=set*CACHE_WAY_SIZE;i<(set+1)*CACHE_WAY_SIZE;i++) {
		if(cache[i].valid&&cache[i].tag==flag) {
			return i;
		}
	}
	int j = cache2_read(addr);
	srand(i);
	i = CACHE_WAY_SIZE *set + rand()%CACHE_WAY_SIZE;
	memcpy(cache[i].data,cache2[j].data,CACHE_BLOCK_SIZE);
	cache[i].valid = true;
	cache[i].tag = flag;
	return i;
}

void cache_write(hwaddr_t addr,size_t len,uint32_t data){
	uint32_t tag = addr>>(CACHE_SET_SIZE_B+CACHE_BLOCK_SIZE_B);
	uint32_t set = addr>>(CACHE_BLOCK_SIZE_B);
	set &=(CACHE_SET_SIZE-1);
	uint32_t offset = addr&(CACHE_BLOCK_SIZE-1);
	
	int i;
	for(i=set*CACHE_WAY_SIZE;i<(set+1)*CACHE_WAY_SIZE;i++) {
		if(cache[i].valid&&cache[i].tag==tag) {
			if(offset+len>CACHE_BLOCK_SIZE) {
				memcpy(cache[i].data+offset,&data,CACHE_BLOCK_SIZE-offset);
				cache2_write(addr,CACHE_BLOCK_SIZE-offset,data);
				cache_write(addr+CACHE_BLOCK_SIZE-offset,len-(CACHE_BLOCK_SIZE-offset),data>>(CACHE_BLOCK_SIZE-offset));
			}	
			else {	
				memcpy(cache[i].data+offset,&data,len);	
				cache2_write(addr,len,data);		
			}
			return ;
		}
	}
	cache2_write(addr,len,data);	
}

uint32_t cache2_read(hwaddr_t addr){
	uint32_t tag = addr>>(CACHE2_SET_SIZE_B+CACHE2_BLOCK_SIZE_B);
	uint32_t set = addr>>(CACHE2_BLOCK_SIZE_B);
	set &=(CACHE2_SET_SIZE-1);
	uint32_t block = (addr>>CACHE2_BLOCK_SIZE_B)<<CACHE2_BLOCK_SIZE_B;

	int i;
	for(i=set*CACHE2_WAY_SIZE;i<(set+1)*CACHE2_WAY_SIZE;i++) {
		if(cache2[i].valid&&cache2[i].tag==tag) {
			return i;
		}
	}
	srand(i);
	i = CACHE2_WAY_SIZE *set + rand()%CACHE2_WAY_SIZE;
	if(cache2[i].dirty&&cache2[i].valid) {
		uint32_t addr2 = (cache2[i].tag<<(CACHE2_SET_SIZE_B+CACHE2_BLOCK_SIZE_B)) | (set<<(CACHE2_BLOCK_SIZE_B));
		uint8_t mask[2*BURST_LEN];
		memset(mask,1,2*BURST_LEN);
		int j;
		for(j=0;j<CACHE2_BLOCK_SIZE/BURST_LEN;j++) {
			ddr3write(addr2+j*BURST_LEN,cache2[i].data+j*BURST_LEN,mask);		
		}
	}
	int j;
	for(j=0;j<CACHE2_BLOCK_SIZE/BURST_LEN;j++) {
		ddr3read(block+j*BURST_LEN,cache2[i].data+j*BURST_LEN);	
	}
	cache2[i].valid = true;
	cache2[i].tag = tag;
	cache2[i].dirty = false;
	return i;
}
void cache2_write(hwaddr_t addr,size_t len,uint32_t data){
	uint32_t tag = addr>>(CACHE2_SET_SIZE_B+CACHE2_BLOCK_SIZE_B);
	uint32_t set = addr>>(CACHE2_BLOCK_SIZE_B);
	set &=(CACHE2_SET_SIZE-1);
	uint32_t offset = addr&(CACHE2_BLOCK_SIZE-1);
	
	int i;
	for(i=set*CACHE2_WAY_SIZE;i<(set+1)*CACHE2_WAY_SIZE;i++) {
		if(cache2[i].valid&&cache2[i].tag==tag) {
			cache2[i].dirty = true;
			if(offset+len>CACHE2_BLOCK_SIZE) {
				//ti huan
				memcpy(cache2[i].data+offset,&data,CACHE2_BLOCK_SIZE-offset);
				cache2_write(addr+CACHE2_BLOCK_SIZE-offset,len-(CACHE2_BLOCK_SIZE-offset),data>>(CACHE2_BLOCK_SIZE-offset));
			}	
			else {	
				memcpy(cache2[i].data+offset,&data,len);			
			}
			return ;
		}
}
		int j = cache2_read(addr);
		cache2[j].dirty = true;
		memcpy(cache2[j].data+offset,&data,len);
}

uint32_t hwaddr_read(hwaddr_t addr, size_t len) {
	int id = cache_read(addr);
	uint32_t offset = addr&(CACHE_BLOCK_SIZE-1);
	uint8_t tmp[2*BURST_LEN];
	if(offset+len>CACHE_BLOCK_SIZE) {
		int id2 = cache_read(addr+CACHE_BLOCK_SIZE-offset);	
		memcpy(tmp,cache[id].data+offset,CACHE_BLOCK_SIZE-offset);
		memcpy(tmp+CACHE_BLOCK_SIZE-offset,cache[id2].data,len-(CACHE_BLOCK_SIZE-offset));
	}
	else {
		memcpy(tmp,cache[id].data+offset,len);
	}
	int zero=0;
	uint32_t ans = unalign_rw(tmp+zero,4)&(~0u >> ((4 - len) << 3));
	return ans;
}

void hwaddr_write(hwaddr_t addr, size_t len, uint32_t data) {
	cache_write(addr, len, data);
}

uint32_t lnaddr_read(lnaddr_t addr, size_t len) {
	return hwaddr_read(addr, len);
}

void lnaddr_write(lnaddr_t addr, size_t len, uint32_t data) {
	hwaddr_write(addr, len, data);
}

uint32_t swaddr_read(swaddr_t addr, size_t len) {
#ifdef DEBUG
	assert(len == 1 || len == 2 || len == 4);
#endif
	return lnaddr_read(addr, len);
}

void swaddr_write(swaddr_t addr, size_t len, uint32_t data) {
#ifdef DEBUG
	assert(len == 1 || len == 2 || len == 4);
#endif
	lnaddr_write(addr, len, data);
}

