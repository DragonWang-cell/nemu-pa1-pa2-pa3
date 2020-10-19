#include "common.h"
#include <stdlib.h>
#include "burst.h"
#include "cpu/reg.h"
#define BLOCK_SIZE 64
#define STORAGE_SIZE_L1 64*1024
#define STORAGE_SIZE_L2 4*1024*1024
#define EIGHT_WAY 8
#define SIXTEEN_WAY 16

uint32_t dram_read(hwaddr_t, size_t);
void dram_write(hwaddr_t, size_t, uint32_t);

/* Memory accessing interfaces */

struct Cache{
	bool tag;
	bool valid;
	uint8_t data[BLOCK_SIZE];
}cache[STORAGE_SIZE_L1/BLOCK_SIZE];
struct Cache2{
	bool tag;
	bool valid,dirty;
	uint8_t data[BLOCK_SIZE];
}cache2[STORAGE_SIZE_L2/BLOCK_SIZE];

void initCache(){
	int i;
	for(i=0;i<STORAGE_SIZE_L1/BLOCK_SIZE;i++){
		cache[i].tag=false;
		cache[i].valid=false;
		memset (cache[i].data,0,BLOCK_SIZE);
	}
	for(i=0;i<STORAGE_SIZE_L2/BLOCK_SIZE;i++){
		cache2[i].tag=false;
		cache2[i].valid=false;
		cache2[i].dirty=false;
		memset (cache2[i].data,0,BLOCK_SIZE);
	}

}

uint32_t cache_read(hwaddr_t addr, size_t len){
	return 0;
}

uint32_t hwaddr_read(hwaddr_t addr, size_t len) {
	return dram_read(addr, len) & (~0u >> ((4 - len) << 3));
}

void hwaddr_write(hwaddr_t addr, size_t len, uint32_t data) {
	dram_write(addr, len, data);
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

