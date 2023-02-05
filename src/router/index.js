import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutView from '../views/Home/AboutView.vue'
import ContactusView from '../views/Home/ContactusView.vue'
import SigninView from '../views/Communication/Auth/SigninView.vue'
import CreateAccount from '../views/Communication/Auth/CreateAccount.vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import CommunicationLayout from '../layouts/CommunicationLayout.vue'
import SwiperView from '../components/SwiperView.vue'
import AwarenessView from '../views/Awareness/AwarenessView.vue'
import TermsofUse from '../views/Home/TermsofUse.vue'
import PrivacyPolicy from '../views/Home/PrivacyPolicy.vue'


const routes = [
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
  {
  path:'/awareness',
  name:'awareness',
  component:AwarenessView
},
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
    path:'/privacypolicy',
    name:'privacypolicy',
    component:PrivacyPolicy
  },
  {
    path:'/termsofuse',
    name:'termsofuse',
    component:TermsofUse
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
