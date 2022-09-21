import { createRouter, createWebHistory } from 'vue-router';

import TeamErstellenView from '../views/TeamErstellenView.vue';

import ChangeTeam from '../views/MannschaftChange.vue';

import MannschaftDetail from '../views/Mannschaften/MannschaftDetailView.vue';

import Uebersicht from '../views/Mannschaften/Subview/Uebersicht.vue';
import Ankuendigungen from '../views/Mannschaften/Subview/ankuendigungen.vue';
import Trainings from '../views/Mannschaften/Subview/trainings.vue';
import Mitglieder from '../views/Mannschaften/Subview/Mitglieder.vue';

//! Allgemeines:

import LandingPageView from '../views/Allgemeines/LandingPageView.vue';
import NotFoundView from '../views/Allgemeines/NotFoundView.vue';
import ContactView from '../views/Allgemeines/ContactView.vue';
import AboutUsView from '../views/Allgemeines/AboutUsView.vue';
import LoginView from '../views/Allgemeines/LoginView.vue';
import RegisterView from '../views/Allgemeines/RegisterView.vue';

//* _______________________________________________________________________

//! Trainer:
import HomeViewTrainer from '../views/Trainer/HomeViewTrainer.vue';

//? TrainerHomeSubviews
import TrainerHome from '../views/Trainer/Subviews/TrainerHome.vue';
import TrainerTeams from '../views/Trainer/Subviews/TrainerKarten.vue';
import TrainerSettings from '../views/Trainer/Subviews/TrainerSettings.vue';

//* _______________________________________________________________________

//! Spieler:
import HomeViewSpieler from '../views/Spieler/HomeViewSpieler.vue';

//? SpielerHomeSubviews
import SpielerHome from '../views/Spieler/Subviews/SpielerHome.vue';
import SpielerTeams from '../views/Spieler/Subviews/SpielerTeams.vue';
import SpielerSettings from '../views/Spieler/Subviews/SpielerSettings.vue';

import { PiniaStore } from '../Store/Store.js';

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
      component: HomeViewTrainer,
      children: [
        { path: '', component: TrainerHome },
        { path: 'teams', component: TrainerTeams },
        { path: 'settings', component: TrainerSettings },
      ],
      beforeEnter: (to, from, next) => {
        const store = PiniaStore();
        if (store.getAktivenUser) {
          if (store.isTrainer) {
            next();
          }
        } else {
          next('/');
        }
      },
    },
    {
      path: '/homeSpieler',
      name: 'HomeSpieler',
      component: HomeViewSpieler,
      children: [
        { path: '', component: SpielerHome },
        { path: 'teams', component: SpielerTeams },
        {
          path: 'settings',
          componen: SpielerSettings,
        },
      ],
      beforeEnter: (to, from, next) => {
        const store = PiniaStore();
        if (store.getAktivenUser) {
          if (!store.isSpieler) {
            next();
          }
        } else {
          next('/');
        }
      },
    },
    {
      path: '/addTeam',
      name: 'addTeam',
      component: TeamErstellenView,
      beforeEnter: (to, from, next) => {
        const store = PiniaStore();

        if (store.getAktivenUser) {
          if (store.isTrainer) {
            return next();
          } else {
            return next('/HomeSpieler/');
          }
        } else return next('/');
      },
    },
    {
      path: '/changeTeam',
      name: 'Change Team',
      component: ChangeTeam,
    },
    {
      path: '/detailMannschaft/:id',
      name: 'Change Team',
      component: MannschaftDetail,
      params: true,
      children: [
        { path: '', component: Uebersicht },
        { path: 'ankuendigungen', component: Ankuendigungen },
        { path: 'trainings', component: Trainings },
        { path: 'mitglieder', component: Mitglieder },
      ],
    },

    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
