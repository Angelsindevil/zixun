import AllInfomation from '../components/AllInfomation'
import Article from '../components/Article'
import IncludeList from '../components/IncludeList'
import reportList from '../components/reportList'
import messageBox from '../components/messageBox'
import mesManage from '../components/mesManage'
import DataStatistics from '../components/DataStatistics'
import instructions from '../components/instructions'
import feedback from '../components/feedback'
import test from '../components/test'
import managementCenter from '../components/managementCenter'
import userManage from '../components/userManage'
import instructionsDetail from '../components/instructionsDetail'
import contentManage from '../components/contentManage'
import contentPublish from '../components/contentPublish'
import contentAdd from '../components/contentAdd'
import orgManage from '../components/orgManage'
import login from '../components/login'
import homePage from '../components/homePage'
const routes = [
  { path: '/login', component:login},
  // { path: '/', component:login},
  {path: '/', redirect: '/homePage/dynamicArticle'},
  { path: '/homePage', component:homePage,children:[
    {path: 'dynamicArticle', component: AllInfomation},
    {path: 'manualArticle', component: AllInfomation},
    {path: 'articleList', component: AllInfomation},
    {path: 'login', component: login},
    {path:'articleDetail',component:Article},
    {path:'IncludeList',component:IncludeList},
    {path:'ReportList',component:reportList},
    // {path:'messageBox',component:messageBox},
    {path:'messageBox',component:mesManage},
    {path:'mesManage',component:mesManage},
    {path:'DataStatistics',component:DataStatistics},
    {path:'instructions',component:managementCenter},
    {path:'instructionsDetail',component:instructionsDetail},
    {path:'feedback',component:feedback},
    {path:'managementCenter',component:managementCenter},
    {path:'userManage',component:userManage},
    {path:'contentManage',component:contentManage},
    {path:'contentPublish',component:contentPublish},
    {path:'contentAdd',component:contentAdd},
    {path:'orgManage',component:orgManage},
  ]},
]
export default routes