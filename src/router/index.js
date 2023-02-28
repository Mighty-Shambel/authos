import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutView from '../views/Home/AboutView.vue'
import ContactusView from '../views/Home/ContactusView.vue'
import SwiperView from '../components/SwiperView.vue'
import AwarenessView from '../views/Awareness/AwarenessView.vue'
import AwarenessDetails from '../views/Awareness/AwarenessDetails.vue'
import TermsofUse from '../views/Home/TermsofUse.vue'
import PrivacyPolicy from '../views/Home/PrivacyPolicy.vue'
import SigninView from '../views/Communication/Auth/SigninView.vue'
import CreateAccount from '../views/Communication/Auth/CreateAccount.vue'
import ChildInfo from '../views/Communication/Auth/ChildInfo.vue'
import ParentsInfo from '../views/Communication/Auth/ParentsInfo.vue'
import HealthProfessional from '../views/Communication/Auth/HealthProfessional.vue'
import OrganizationInfo from '../views/Communication/Auth/OrganizationInfo.vue'
import ForgotPassword from '../views/Communication/Auth/ForgotPassword.vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import LoginAdmin from '../views/Admin/LoginAdmin.vue'
import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import Sidebar from '../components/Sidebar.vue'
import SystemUpdate from '../views/Admin/System/SystemUpdate.vue'
import Moderator from '../views/Admin/Moderator.vue'
import UserList from '../views/Admin/UserList.vue'
import Verification from '../views/Moderator/Verification.vue'
import Report from '../views/Moderator/Report/Report.vue'
import ReportDetails from '../views/Moderator/Report/ReportDetails.vue'
import ReportAdmin from '../views/Admin/Report/ReportAdmin.vue'
import ReportDetailsAdmin from '../views/Admin/Report/ReportDetailsAdmin.vue'
import CreateSystem from '../views/Admin/System/CreateSystem.vue'
import ConfirmModerator from '../views/Admin/ConfirmModerator.vue'
import ModeratorInfo from '../views/Admin/ModeratorInfo.vue'
import moderatorNavbar from '../components/moderatorNavbar.vue'
import VerificationAdmin from '../views/Admin/VerificationAdmin'
import CreateCategories from '../views/Admin/System/CreateCategories.vue'
import CreateCauses from '../views/Admin/System/CreateCauses.vue'
import CreateDocRec from '../views/Admin/System/CreateDocRec.vue'
import CreateFoodRec from '../views/Admin/System/CreateFoodRec.vue'
import CreateNotRec from '../views/Admin/System/CreateNotRec.vue'
import CreateOrgRec from '../views/Admin/System/CreateOrgRec.vue'
import CreateSymptom from '../views/Admin/System/CreateSymptom.vue'



const routes = [
  //Home pages
  {
    path: '/',
    redirect:'/home',
    name:'HomeLayout',
    component: HomeLayout,
    children:[
      {path:'/home',name:'HomeView',component:HomeView},
      {path: '/about',name: 'about',component:AboutView},
      {path: '/contactus',name: 'contactus',component:ContactusView},
      {path: '/swiper',name: 'swiper',component:SwiperView},
     
    ]
  },
  //Awareness pages
  {
  path:'/awareness',
  name:'awareness',
  component:AwarenessView
},
{
  path:'/awarenessdetails',
  name:'awarenessdetails',
  component:AwarenessDetails
},
{
  path:'/privacypolicy',
  name:'privacypolicy',
  component:PrivacyPolicy
},
{
  path:'/termsofuse',
  name:'termsofuse',
  component:TermsofUse
},
//Auth pages
  {
  path:'/signin',
  name:'signin',
  component:SigninView
  },
  {
    path:'/createaccount',
    name:'createaccount',
    component:CreateAccount
  },
  {
    path:'/childinfo',
    name:'childinfo',
    component:ChildInfo
  },
  {
    path:'/parentsinfo',
    name:'parentsinfo',
    component:ParentsInfo
  },
  {
    path:'/healthprofessional',
    name:'healthprofessional',
    component:HealthProfessional
  },
  {
    path:'/organizationinfo',
    name:'organizationinfo',
    component:OrganizationInfo
  },
  {
    path:'/forgotpassword',
    name:'forgotpassword',
    component:ForgotPassword
  },
  //Admin pages
  {
    path:'/loginadmin',
    name:'loginadmin',
    component:LoginAdmin
  },
  {
    path:'/admindashboard',
    name:'admindashboard',
    component:AdminDashboard
  },
  {
    path:'/sidebar',
    name:'sidebar',
    component:Sidebar
  },
  {
    path:'/systemupdate',
    name:'systemupdate',
    component:SystemUpdate
  },
  {
    path:'/moderator',
    name:'moderator',
    component:Moderator
  },
  {
    path:'/userlist',
    name:'userlist',
    component:UserList
  },
  {
    path:'/verification',
    name:'verification',
    component:Verification
  },
  {
    path:'/reportAdmin',
    name:'reportAdmin',
    component:ReportAdmin
  },
  {
    path:'/reportdetailsAdmin',
    name:'reportdetailsAdmin',
    component:ReportDetailsAdmin
  },
  {
    path:'/createsystem',
    name:'createsystem',
    component:CreateSystem
  },
  {
    path:'/createcategories',
    name:'createcategories',
    component:CreateCategories
  },
  {
    path:'/createcauses',
    name:'createcauses',
    component:CreateCauses
  },
  {
    path:'/createdocrec',
    name:'createdocrec',
    component:CreateDocRec
  },
  {
    path:'/createfoodrec',
    name:'createfoodrec',
    component:CreateFoodRec
  },
  {
    path:'/createnotrec',
    name:'createnotrec',
    component:CreateNotRec
  },
  {
    path:'/createorgrec',
    name:'createorgrec',
    component:CreateOrgRec
  },
  {
    path:'/createsymptom',
    name:'createsymptom',
    component:CreateSymptom
  },
 
  {
    path:'/confirmmoderator',
    name:'confirmmoderator',
    component:ConfirmModerator
    },
    {
      path:'/moderatorinfo',
      name:'moderatorinfo',
      component:ModeratorInfo
      },
      {
        path:'/verificationAdmin',
        name:'verificationAdmin',
        component:VerificationAdmin
      },

      //moderator pages
      {
        path:'/moderatorNavBar',
        name:'moderatorNavBar',
        component:moderatorNavbar
        },
        {
          path:'/report',
          name:'report',
          component:Report
        },
        {
          path:'/reportdetails',
          name:'reportdetails',
          component:ReportDetails
        },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
