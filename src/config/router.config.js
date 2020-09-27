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
