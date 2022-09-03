import { createRouter, createWebHistory } from 'vue-router';
import LandingPageView from '../views/LandingPageView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ContactView from '../views/ContactView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import HomeView from '../views/HomeView.vue';
import TeamErstellenView from '../views/TeamErstellenView.vue';

// Subviews
import TrainerHome from '../views/SubViews/Trainer/TrainerHome.vue';
import TrainerTeams from '../views/SubViews/Trainer/TrainerKarten.vue';

// import { PiniaStore } from '../Store/Store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUsView,
    },
    {
      path: '/contact',
      name: 'Conatct',
      component: ContactView,
    },
    {
      path: '/homeTrainer',
      name: 'Home',
      component: HomeView,
      children: [
        { path: '', component: TrainerHome },
        { path: 'teams', component: TrainerTeams },
      ],
    },
    {
      path: '/addTeam',
      name: 'addTeam',
      component: TeamErstellenView,
    },

    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
