// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/home/Home',
    children: [
      // 首页
      {
        path: '/home',
        component: RouteView,
        redirect: '/home/Home',
        name: 'home',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        meta: { title: '首页', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/home/Home',
            name: 'Home',
            component: () => import('@/views/home/Home'),
            meta: { title: '首页 ', keepAlive: true, permission: [ 'home' ] }
          }
        ]
      },
      // 系统管理
      {
        path: '/system',
        component: RouteView,
        redirect: '/system/Role',
        name: 'system',
        meta: { title: '系统管理', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/system/Role',
            name: 'Role',
            component: () => import('@/views/system/index'),
            meta: { title: '角色管理', keepAlive: true, permission: [ 'home' ] }
          },
          {
            path: '/system/User',
            name: 'User',
            component: () => import('@/views/system/index'),
            meta: { title: '用户管理', keepAlive: true, permission: [ 'home' ] }
          },
          {
            path: '/system/Nav',
            name: 'Nav',
            component: () => import('@/views/system/index'),
            meta: { title: '菜单管理', keepAlive: true, permission: [ 'home' ] }
          },
          {
            path: '/system/Log',
            name: 'Log',
            component: () => import('@/views/system/index'),
            meta: { title: '操作日志', keepAlive: true, permission: [ 'home' ] }
          }
        ]
      },
      // 一企一档
      {
        path: '/enterprise',
        component: RouteView,
        redirect: '/enterprise/Info',
        name: 'enterprise',
        meta: { title: '一企一档', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/enterprise/enterpriseInfo/EnterpriseList',
            name: 'enterpriseInfo',
            component: RouteView,
            meta: { title: '企业信息', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/enterprise/enterpriseInfo/EnterpriseList',
                name: 'EnterpriseList',
                component: () => import('@/views/enterprise/enterpriseInfo/EnterpriseList'),
                meta: { title: '企业列表', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/enterpriseInfo/AccidentList',
                name: 'AccidentList',
                component: () => import('@/views/enterprise/enterpriseInfo/AccidentList'),
                meta: { title: '事故隐患管理', keepAlive: true, permission: [ 'home' ] }
              }
            ]
          },
          {
            path: '/enterprise/riskInfo/MajorHazardList',
            name: 'riskInfo',
            component: RouteView,
            meta: { title: '危险信息', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/enterprise/riskInfo/MajorHazardList',
                name: 'MajorHazardList',
                component: () => import('@/views/enterprise/riskInfo/MajorHazardList'),
                meta: { title: '重大危险源', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/riskInfo/ChemicalInfoList',
                name: 'ChemicalInfoList',
                component: () => import('@/views/enterprise/riskInfo/ChemicalInfoList'),
                meta: { title: '化学品信息', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/riskInfo/HighRiskProcessesList',
                name: 'HighRiskProcessesList',
                component: () => import('@/views/enterprise/riskInfo/HighRiskProcessesList'),
                meta: { title: '高危工艺', keepAlive: true, permission: [ 'home' ] }
              }
            ]
          },
          {
            path: '/enterprise/vulnerabilityInfo',
            name: 'vulnerabilityInfo',
            component: RouteView,
            meta: { title: '脆弱性信息', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/enterprise/vulnerabilityInfo/EnterprisePersonnelList',
                name: 'EnterprisePersonnelList',
                component: () => import('@/views/enterprise/vulnerabilityInfo/EnterprisePersonnelList'),
                meta: { title: '企业人员', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/vulnerabilityInfo/AroundPersonnelList',
                name: 'AroundPersonnelList',
                component: () => import('@/views/enterprise/vulnerabilityInfo/AroundPersonnelList'),
                meta: { title: '周边人员', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/vulnerabilityInfo/EnterpriseBuildingList',
                name: 'EnterpriseBuildingList',
                component: () => import('@/views/enterprise/vulnerabilityInfo/EnterpriseBuildingList'),
                meta: { title: '企业建筑', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/vulnerabilityInfo/AroundBuildingList',
                name: 'AroundBuildingList',
                component: () => import('@/views/enterprise/vulnerabilityInfo/AroundBuildingList'),
                meta: { title: '周边建筑', keepAlive: true, permission: [ 'home' ] }
              }
            ]
          },
          {
            path: '/enterprise/managementResilience',
            name: 'managementResilience',
            component: RouteView,
            meta: { title: '管理韧性', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/enterprise/managementResilience/RulesRegulationsList',
                name: 'RulesRegulationsList',
                component: () => import('@/views/enterprise/managementResilience/RulesRegulationsList'),
                meta: { title: '规章制度', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/managementResilience/PersonnelTrainingList',
                name: 'PersonnelTrainingList',
                component: () => import('@/views/enterprise/managementResilience/PersonnelTrainingList'),
                meta: { title: '人员培训', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/managementResilience/InspectionMeetingList',
                name: 'InspectionMeetingList',
                component: () => import('@/views/enterprise/managementResilience/InspectionMeetingList'),
                meta: { title: '检测会议', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/managementResilience/EmergencyPlanList',
                name: 'EmergencyPlanList',
                component: () => import('@/views/enterprise/managementResilience/EmergencyPlanList'),
                meta: { title: '应急预案', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/managementResilience/MedicalSecurityList',
                name: 'MedicalSecurityList',
                component: () => import('@/views/enterprise/managementResilience/MedicalSecurityList'),
                meta: { title: '医疗保障', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/enterprise/managementResilience/EscapeDrillList',
                name: 'EscapeDrillList',
                component: () => import('@/views/enterprise/managementResilience/EscapeDrillList'),
                meta: { title: '逃生演习', keepAlive: true, permission: [ 'home' ] }
              }
            ]
          }
        ]
      },
      // 一区一档
      {
        path: '/area',
        component: RouteView,
        redirect: '/area/areaList/heping/baseInfo/AreaInfo',
        name: 'area',
        meta: { title: '一区一档', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/area/areaList/heping',
            name: 'heping_Area',
            component: RouteView,
            redirect: '/area/areaList/heping/baseInfo/AreaInfo',
            meta: { title: '和平区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/heping/baseInfo',
                name: 'heping_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/heping/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/heping/baseInfo/AreaInfo',
                    name: '1_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/heping/baseInfo/AdministrativeDivision',
                    name: '1_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/heping/economyAttribute',
                name: 'heping_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/heping/economyAttribute/EconomyInfo',
                    name: '1_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/heping/politicsAttribute',
                name: 'heping_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/heping/politicsAttribute/GovernmentLeaderInfo',
                    name: '1_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/heping/ecologyAttribute',
                name: 'heping_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/heping/ecologyAttribute/NaturalResources',
                    name: '1_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/heping/cultureAttribute',
                name: 'heping_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/heping/cultureAttribute/HistoryCulture',
                    name: '1_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/heping/cultureAttribute/HumanLandscape',
                    name: '1_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/hexi',
            name: 'hexi_Area',
            component: RouteView,
            redirect: '/area/areaList/hexi/baseInfo/AreaInfo',
            meta: { title: '河西区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/hexi/baseInfo',
                name: 'hexi_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/hexi/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hexi/baseInfo/AreaInfo',
                    name: '2_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hexi/baseInfo/AdministrativeDivision',
                    name: '2_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hexi/economyAttribute',
                name: 'hexi_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hexi/economyAttribute/EconomyInfo',
                    name: '2_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hexi/politicsAttribute',
                name: 'hexi_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hexi/politicsAttribute/GovernmentLeaderInfo',
                    name: '2_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hexi/ecologyAttribute',
                name: 'hexi_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hexi/ecologyAttribute/NaturalResources',
                    name: '2_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hexi/cultureAttribute',
                name: 'hexi_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hexi/cultureAttribute/HistoryCulture',
                    name: '2_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hexi/cultureAttribute/HumanLandscape',
                    name: '2_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/hebei',
            name: 'hebei_Area',
            component: RouteView,
            redirect: '/area/areaList/hebei/baseInfo/AreaInfo',
            meta: { title: '河北区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/hebei/baseInfo',
                name: 'hebei_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/hebei/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hebei/baseInfo/AreaInfo',
                    name: '3_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hebei/baseInfo/AdministrativeDivision',
                    name: '3_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hebei/economyAttribute',
                name: 'hebei_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hebei/economyAttribute/EconomyInfo',
                    name: '3_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hebei/politicsAttribute',
                name: 'hebei_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hebei/politicsAttribute/GovernmentLeaderInfo',
                    name: '3_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hebei/ecologyAttribute',
                name: 'hebei_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hebei/ecologyAttribute/NaturalResources',
                    name: '3_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hebei/cultureAttribute',
                name: 'hebei_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hebei/cultureAttribute/HistoryCulture',
                    name: '3_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hebei/cultureAttribute/HumanLandscape',
                    name: '3_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/hedong',
            name: 'hedong_Area',
            component: RouteView,
            redirect: '/area/areaList/hedong/baseInfo/AreaInfo',
            meta: { title: '河东区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/hedong/baseInfo',
                name: 'hedong_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/hedong/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hedong/baseInfo/AreaInfo',
                    name: '4_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hedong/baseInfo/AdministrativeDivision',
                    name: '4_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hedong/economyAttribute',
                name: 'hedong_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hedong/economyAttribute/EconomyInfo',
                    name: '4_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hedong/politicsAttribute',
                name: 'hedong_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hedong/politicsAttribute/GovernmentLeaderInfo',
                    name: '4_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hedong/ecologyAttribute',
                name: 'hedong_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hedong/ecologyAttribute/NaturalResources',
                    name: '4_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hedong/cultureAttribute',
                name: 'hedong_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hedong/cultureAttribute/HistoryCulture',
                    name: '4_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hedong/cultureAttribute/HumanLandscape',
                    name: '4_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/nankai',
            name: 'nankai_Area',
            component: RouteView,
            redirect: '/area/areaList/nankai/baseInfo/AreaInfo',
            meta: { title: '南开区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/nankai/baseInfo',
                name: 'nankai_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/nankai/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/nankai/baseInfo/AreaInfo',
                    name: '5_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/nankai/baseInfo/AdministrativeDivision',
                    name: '5_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/nankai/economyAttribute',
                name: 'nankai_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/nankai/economyAttribute/EconomyInfo',
                    name: '5_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/nankai/politicsAttribute',
                name: 'nankai_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/nankai/politicsAttribute/GovernmentLeaderInfo',
                    name: '5_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/nankai/ecologyAttribute',
                name: 'nankai_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/nankai/ecologyAttribute/NaturalResources',
                    name: '5_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/nankai/cultureAttribute',
                name: 'nankai_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/nankai/cultureAttribute/HistoryCulture',
                    name: '5_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/nankai/cultureAttribute/HumanLandscape',
                    name: '5_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/hongqiao',
            name: 'hongqiao_Area',
            component: RouteView,
            redirect: '/area/areaList/hongqiao/baseInfo/AreaInfo',
            meta: { title: '红桥区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/hongqiao/baseInfo',
                name: 'hongqiao_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/hongqiao/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hongqiao/baseInfo/AreaInfo',
                    name: '6_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hongqiao/baseInfo/AdministrativeDivision',
                    name: '6_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hongqiao/economyAttribute',
                name: 'hongqiao_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hongqiao/economyAttribute/EconomyInfo',
                    name: '6_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hongqiao/politicsAttribute',
                name: 'hongqiao_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hongqiao/politicsAttribute/GovernmentLeaderInfo',
                    name: '6_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hongqiao/ecologyAttribute',
                name: 'hongqiao_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hongqiao/ecologyAttribute/NaturalResources',
                    name: '6_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/hongqiao/cultureAttribute',
                name: 'hongqiao_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/hongqiao/cultureAttribute/HistoryCulture',
                    name: '6_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/hongqiao/cultureAttribute/HumanLandscape',
                    name: '6_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/dongli',
            name: 'dongli_Area',
            component: RouteView,
            redirect: '/area/areaList/dongli/baseInfo/AreaInfo',
            meta: { title: '东丽区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/dongli/baseInfo',
                name: 'dongli_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/dongli/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/dongli/baseInfo/AreaInfo',
                    name: '7_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/dongli/baseInfo/AdministrativeDivision',
                    name: '7_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/dongli/economyAttribute',
                name: 'dongli_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/dongli/economyAttribute/EconomyInfo',
                    name: '7_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/dongli/politicsAttribute',
                name: 'dongli_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/dongli/politicsAttribute/GovernmentLeaderInfo',
                    name: '7_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/dongli/ecologyAttribute',
                name: 'dongli_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/dongli/ecologyAttribute/NaturalResources',
                    name: '7_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/dongli/cultureAttribute',
                name: 'dongli_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/dongli/cultureAttribute/HistoryCulture',
                    name: '7_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/dongli/cultureAttribute/HumanLandscape',
                    name: '7_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/beicheng',
            name: 'beicheng_Area',
            component: RouteView,
            redirect: '/area/areaList/beicheng/baseInfo/AreaInfo',
            meta: { title: '北辰区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/beicheng/baseInfo',
                name: 'beicheng_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/beicheng/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/beicheng/baseInfo/AreaInfo',
                    name: '8_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/beicheng/baseInfo/AdministrativeDivision',
                    name: '8_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/beicheng/economyAttribute',
                name: 'beicheng_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/beicheng/economyAttribute/EconomyInfo',
                    name: '8_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/beicheng/politicsAttribute',
                name: 'beicheng_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/beicheng/politicsAttribute/GovernmentLeaderInfo',
                    name: '8_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/beicheng/ecologyAttribute',
                name: 'beicheng_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/beicheng/ecologyAttribute/NaturalResources',
                    name: '8_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/beicheng/cultureAttribute',
                name: 'beicheng_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/beicheng/cultureAttribute/HistoryCulture',
                    name: '8_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/beicheng/cultureAttribute/HumanLandscape',
                    name: '8_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/xiqing',
            name: 'xiqing_Area',
            component: RouteView,
            redirect: '/area/areaList/xiqing/baseInfo/AreaInfo',
            meta: { title: '西青区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/xiqing/baseInfo',
                name: 'xiqing_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/xiqing/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/xiqing/baseInfo/AreaInfo',
                    name: '9_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/xiqing/baseInfo/AdministrativeDivision',
                    name: '9_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/xiqing/economyAttribute',
                name: 'xiqing_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/xiqing/economyAttribute/EconomyInfo',
                    name: '9_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/xiqing/politicsAttribute',
                name: 'xiqing_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/xiqing/politicsAttribute/GovernmentLeaderInfo',
                    name: '9_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/xiqing/ecologyAttribute',
                name: 'xiqing_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/xiqing/ecologyAttribute/NaturalResources',
                    name: '9_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/xiqing/cultureAttribute',
                name: 'xiqing_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/xiqing/cultureAttribute/HistoryCulture',
                    name: '9_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/xiqing/cultureAttribute/HumanLandscape',
                    name: '9_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/jinnan',
            name: 'jinnan_Area',
            component: RouteView,
            redirect: '/area/areaList/jinnan/baseInfo/AreaInfo',
            meta: { title: '津南区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/jinnan/baseInfo',
                name: 'jinnan_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/jinnan/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinnan/baseInfo/AreaInfo',
                    name: '10_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jinnan/baseInfo/AdministrativeDivision',
                    name: '10_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinnan/economyAttribute',
                name: 'jinnan_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinnan/economyAttribute/EconomyInfo',
                    name: '10_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinnan/politicsAttribute',
                name: 'jinnan_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinnan/politicsAttribute/GovernmentLeaderInfo',
                    name: '10_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinnan/ecologyAttribute',
                name: 'jinnan_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinnan/ecologyAttribute/NaturalResources',
                    name: '10_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinnan/cultureAttribute',
                name: 'jinnan_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinnan/cultureAttribute/HistoryCulture',
                    name: '10_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jinnan/cultureAttribute/HumanLandscape',
                    name: '10_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/jixian',
            name: 'jixian_Area',
            component: RouteView,
            redirect: '/area/areaList/jixian/baseInfo/AreaInfo',
            meta: { title: '蓟州区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/jixian/baseInfo',
                name: 'jixian_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/jixian/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jixian/baseInfo/AreaInfo',
                    name: '11_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jixian/baseInfo/AdministrativeDivision',
                    name: '11_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jixian/economyAttribute',
                name: 'jixian_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jixian/economyAttribute/EconomyInfo',
                    name: '11_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jixian/politicsAttribute',
                name: 'jixian_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jixian/politicsAttribute/GovernmentLeaderInfo',
                    name: '11_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jixian/ecologyAttribute',
                name: 'jixian_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jixian/ecologyAttribute/NaturalResources',
                    name: '11_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jixian/cultureAttribute',
                name: 'jixian_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jixian/cultureAttribute/HistoryCulture',
                    name: '11_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jixian/cultureAttribute/HumanLandscape',
                    name: '11_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/ninghe',
            name: 'ninghe_Area',
            component: RouteView,
            redirect: '/area/areaList/ninghe/baseInfo/AreaInfo',
            meta: { title: '宁河区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/ninghe/baseInfo',
                name: 'ninghe_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/ninghe/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/ninghe/baseInfo/AreaInfo',
                    name: '12_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/ninghe/baseInfo/AdministrativeDivision',
                    name: '12_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/ninghe/economyAttribute',
                name: 'ninghe_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/ninghe/economyAttribute/EconomyInfo',
                    name: '12_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/ninghe/politicsAttribute',
                name: 'ninghe_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/ninghe/politicsAttribute/GovernmentLeaderInfo',
                    name: '12_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/ninghe/ecologyAttribute',
                name: 'ninghe_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/ninghe/ecologyAttribute/NaturalResources',
                    name: '12_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/ninghe/cultureAttribute',
                name: 'ninghe_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/ninghe/cultureAttribute/HistoryCulture',
                    name: '12_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/ninghe/cultureAttribute/HumanLandscape',
                    name: '12_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/wuqing',
            name: 'wuqing_Area',
            component: RouteView,
            redirect: '/area/areaList/wuqing/baseInfo/AreaInfo',
            meta: { title: '武清区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/wuqing/baseInfo',
                name: 'wuqing_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/wuqing/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/wuqing/baseInfo/AreaInfo',
                    name: '13_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/wuqing/baseInfo/AdministrativeDivision',
                    name: '13_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/wuqing/economyAttribute',
                name: 'wuqing_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/wuqing/economyAttribute/EconomyInfo',
                    name: '13_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/wuqing/politicsAttribute',
                name: 'wuqing_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/wuqing/politicsAttribute/GovernmentLeaderInfo',
                    name: '13_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/wuqing/ecologyAttribute',
                name: 'wuqing_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/wuqing/ecologyAttribute/NaturalResources',
                    name: '13_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/wuqing/cultureAttribute',
                name: 'wuqing_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/wuqing/cultureAttribute/HistoryCulture',
                    name: '13_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/wuqing/cultureAttribute/HumanLandscape',
                    name: '13_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/jinghai',
            name: 'jinghai_Area',
            component: RouteView,
            redirect: '/area/areaList/jinghai/baseInfo/AreaInfo',
            meta: { title: '静海区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/jinghai/baseInfo',
                name: 'jinghai_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/jinghai/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinghai/baseInfo/AreaInfo',
                    name: '14_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jinghai/baseInfo/AdministrativeDivision',
                    name: '14_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinghai/economyAttribute',
                name: 'jinghai_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinghai/economyAttribute/EconomyInfo',
                    name: '14_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinghai/politicsAttribute',
                name: 'jinghai_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinghai/politicsAttribute/GovernmentLeaderInfo',
                    name: '14_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinghai/ecologyAttribute',
                name: 'jinghai_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinghai/ecologyAttribute/NaturalResources',
                    name: '14_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/jinghai/cultureAttribute',
                name: 'jinghai_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/jinghai/cultureAttribute/HistoryCulture',
                    name: '14_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/jinghai/cultureAttribute/HumanLandscape',
                    name: '14_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/baodi',
            name: 'baodi_Area',
            component: RouteView,
            redirect: '/area/areaList/baodi/baseInfo/AreaInfo',
            meta: { title: '宝坻区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/baodi/baseInfo',
                name: 'baodi_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/baodi/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/baodi/baseInfo/AreaInfo',
                    name: '15_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/baodi/baseInfo/AdministrativeDivision',
                    name: '15_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/baodi/economyAttribute',
                name: 'baodi_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/baodi/economyAttribute/EconomyInfo',
                    name: '15_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/baodi/politicsAttribute',
                name: 'baodi_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/baodi/politicsAttribute/GovernmentLeaderInfo',
                    name: '15_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/baodi/ecologyAttribute',
                name: 'baodi_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/baodi/ecologyAttribute/NaturalResources',
                    name: '15_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/baodi/cultureAttribute',
                name: 'baodi_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/baodi/cultureAttribute/HistoryCulture',
                    name: '15_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/baodi/cultureAttribute/HumanLandscape',
                    name: '15_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          },
          {
            path: '/area/areaList/binghaixingqu',
            name: 'binghaixingqu_Area',
            component: RouteView,
            redirect: '/area/areaList/binghaixingqu/baseInfo/AreaInfo',
            meta: { title: '滨海新区', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/area/areaList/binghaixingqu/baseInfo',
                name: 'binghaixingqu_baseInfo',
                component: RouteView,
                redirect: '/area/areaList/binghaixingqu/baseInfo/AreaInfo',
                meta: { title: '基本信息', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/binghaixingqu/baseInfo/AreaInfo',
                    name: '16_AreaInfo',
                    component: () => import('@/views/area/baseInfo/AreaInfo'),
                    props: true,
                    meta: { title: '区域简介', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/binghaixingqu/baseInfo/AdministrativeDivision',
                    name: '16_AdministrativeDivision',
                    component: () => import('@/views/area/baseInfo/AdministrativeDivision'),
                    meta: { title: '行政区划', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/binghaixingqu/economyAttribute',
                name: 'binghaixingqu_economyAttribute',
                component: RouteView,
                meta: { title: '经济属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/binghaixingqu/economyAttribute/EconomyInfo',
                    name: '16_EconomyInfo',
                    component: () => import('@/views/area/economyAttribute/EconomyInfo'),
                    meta: { title: '经济', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/binghaixingqu/politicsAttribute',
                name: 'binghaixingqu_politicsAttribute',
                component: RouteView,
                meta: { title: '政治属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/binghaixingqu/politicsAttribute/GovernmentLeaderInfo',
                    name: '16_GovernmentLeaderInfo',
                    component: () => import('@/views/area/politicsAttribute/GovernmentLeaderInfo'),
                    meta: { title: '政府领导', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/binghaixingqu/ecologyAttribute',
                name: 'binghaixingqu_ecologyAttribute',
                component: RouteView,
                meta: { title: '生态属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/binghaixingqu/ecologyAttribute/NaturalResources',
                    name: '16_NaturalResources',
                    component: () => import('@/views/area/ecologyAttribute/NaturalResources'),
                    meta: { title: '自然资源', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              },
              {
                path: '/area/areaList/binghaixingqu/cultureAttribute',
                name: 'binghaixingqu_cultureAttribute',
                component: RouteView,
                meta: { title: '文化属性', keepAlive: true, permission: [ 'home' ] },
                children: [
                  {
                    path: '/area/areaList/binghaixingqu/cultureAttribute/HistoryCulture',
                    name: '16_HistoryCulture',
                    component: () => import('@/views/area/cultureAttribute/HistoryCulture'),
                    meta: { title: '历史文化', keepAlive: true, permission: [ 'home' ] }
                  },
                  {
                    path: '/area/areaList/binghaixingqu/cultureAttribute/HumanLandscape',
                    name: '16_HumanLandscape',
                    component: () => import('@/views/area/cultureAttribute/HumanLandscape'),
                    meta: { title: '人文风景', keepAlive: true, permission: [ 'home' ] }
                  }
                ]
              }
            ]
          }
        ]
      },
      // 区域风险权重
      {
        path: '/areaRisk',
        component: RouteView,
        redirect: '/areaRisk/areaRiskAttr',
        name: 'areaRisk',
        meta: { title: '区域风险', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/areaRisk/areaRiskAttr/EnterpriseList',
            name: 'areaRiskAttr',
            component: RouteView,
            meta: { title: '区域风险属性', keepAlive: true, permission: [ 'home' ] },
            children: [
              {
                path: '/areaRisk/areaRiskAttr/RiskFactorOntologyList',
                name: 'RiskFactorOntologyList',
                component: () => import('@/views/areaRisk/areaRiskAttr/RiskFactorOntologyList'),
                meta: { title: '致险因子本体', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/areaRisk/areaRiskAttr/VulnerabilityOntologyList',
                name: 'VulnerabilityOntologyList',
                component: () => import('@/views/areaRisk/areaRiskAttr/VulnerabilityOntologyList'),
                meta: { title: '脆弱性本体', keepAlive: true, permission: [ 'home' ] }
              },
              {
                path: '/areaRisk/areaRiskAttr/PreventionCapabilityOntologyList',
                name: 'PreventionCapabilityOntologyList',
                component: () => import('@/views/areaRisk/areaRiskAttr/PreventionCapabilityOntologyList'),
                meta: { title: '防范能力本体', keepAlive: true, permission: [ 'home' ] }
              }
            ]
          }
        ]
      },
      // 历史事件列表
      {
        path: '/historicalEvent',
        component: RouteView,
        redirect: '/historicalEvent/HistoricalEventList',
        name: 'historicalEvent',
        meta: { title: '历史事件', icon: 'home', keepAlive: true, permission: [ 'home' ] },
        children: [
          {
            path: '/historicalEvent/HistoricalEventList',
            name: 'HistoricalEventList',
            component: () => import('@/views/historicalEvent/HistoricalEventList'),
            meta: { title: '历史事件', keepAlive: true, permission: [ 'home' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
