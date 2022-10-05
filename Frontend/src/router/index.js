import { createRouter, createWebHashHistory } from 'vue-router';

// import ChangeTeam from '../views/MannschaftChange.vue';

// import MannschaftDetail from '../views/Mannschaften/MannschaftDetailView.vue';

// import Uebersicht from '../views/Mannschaften/Subview/Uebersicht.vue';
// import Ankuendigungen from '../views/Mannschaften/Subview/ankuendigungen.vue';
// import Trainings from '../views/Mannschaften/Subview/trainings.vue';
// import Mitglieder from '../views/Mannschaften/Subview/Mitglieder.vue';
// import Settings from '../views/Mannschaften/Subview/Settings.vue';

//! Allgemeines:
import LandingPageView from '../views/Allgemeines/LandingPageView.vue';
import NotFoundView from '../views/Allgemeines/NotFoundView.vue';
// import ContactView from '../views/Allgemeines/ContactView.vue';
// import AboutUsView from '../views/Allgemeines/AboutUsView.vue';
// import LoginView from '../views/Allgemeines/LoginView.vue';
// import RegisterView from '../views/Allgemeines/RegisterView.vue';

//* _______________________________________________________________________

//! Trainer:
// import HomeViewTrainer from '../views/Trainer/HomeViewTrainer.vue';

//? TrainerHomeSubviews
// import TrainerHome from '../views/Trainer/Subviews/TrainerHome.vue';
// import TrainerTeams from '../views/Trainer/Subviews/TrainerKarten.vue';
// import TrainerSettings from '../views/Trainer/Subviews/TrainerSettings.vue';

//* _______________________________________________________________________

//! Spieler:
// import HomeViewSpieler from '../views/Spieler/HomeViewSpieler.vue';

//? SpielerHomeSubviews
// import SpielerHome from '../views/Spieler/Subviews/SpielerHome.vue';
// import SpielerTeams from '../views/Spieler/Subviews/SpielerTeams.vue';
// import SpielerSettings from '../views/Spieler/Subviews/SpielerSettings.vue';

//* _______________________________________________________________________

//!Trainings
// import TrainingDetail from '../views/Trainings/TrainingDetail.vue';
// import TrainingErstellen from '../views/Trainings/TrainingErstellen.vue';

//* _______________________________________________________________________
//!Team erstellen/Beitreten
// import TeamErstellenView from '../views/TeamErstellenBeitreten/TeamErstellenView.vue';

// import UnderConstruction from '../views/UnderConstruction.vue';

import { PiniaStore } from '../Store/Store.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageView,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Allgemeines/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Allgemeines/RegisterView.vue'),
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: () => import('../views/Allgemeines/AboutUsView.vue'),
    },
    {
      path: '/contact',
      name: 'Conatct',
      component: () => import('../views/Allgemeines/ContactView.vue'),
    },
    {
      path: '/homeTrainer',
      name: 'Home',
      component: () => import('../views/Trainer/HomeViewTrainer.vue'),
      children: [
        { path: '', component: () => import('../views/Trainer/Subviews/TrainerHome.vue') },
        { path: 'teams', component: () => import('../views/Trainer/Subviews/TrainerKarten.vue') },
        {
          path: 'settings',
          component: () => import('../views/Trainer/Subviews/TrainerSettings.vue'),
        },
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
      component: () => import('../views/Spieler/HomeViewSpieler.vue'),
      children: [
        { path: '', component: () => import('../views/Spieler/Subviews/SpielerHome.vue') },
        { path: 'teams', component: () => import('../views/Spieler/Subviews/SpielerTeams.vue') },
        {
          path: 'settings',
          component: () => import('../views/Spieler/Subviews/SpielerSettings.vue'),
        },
        {
          path: 'gesundheit',
          component: () => import('../views/Spieler/Subviews/SpielerGesundheit.vue'),
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
      component: () => import('../views/TeamErstellenBeitreten/TeamErstellenView.vue'),
      // beforeEnter: (to, from, next) => {
      //   const store = PiniaStore();

      //   if (store.getAktivenUser) {
      //     if (store.isTrainer) {
      //       return next();
      //     } else {
      //       return next('/HomeSpieler/');
      //     }
      //   } else return next('/');
      // },
    },
    {
      path: '/changeTeam',
      name: 'Change Team',
      component: () => import('../views/MannschaftChange.vue'),
    },
    {
      path: '/detailMannschaft/:id',
      name: 'Change Team',
      component: () => import('../views/Mannschaften/MannschaftDetailView.vue'),
      params: true,
      children: [
        // { path: '', component: Uebersicht },
        // { path: 'ankuendigungen', component: Ankuendigungen },
        // { path: 'trainings', component: Trainings },
        // { path: 'mitglieder', component: Mitglieder },
        // { path: 'statistik', component: UnderConstruction },
        // { path: 'settings', component: Settings },
        { path: '', component: () => import('../views/Mannschaften/Subview/Uebersicht.vue') },
        {
          path: 'ankuendigungen',
          component: () => import('../views/Mannschaften/Subview/ankuendigungen.vue'),
        },
        {
          path: 'trainings',
          component: () => import('../views/Mannschaften/Subview/trainings.vue'),
        },
        {
          path: 'mitglieder',
          component: () => import('../views/Mannschaften/Subview/Mitglieder.vue'),
        },
        { path: 'statistik', component: () => import('../views/UnderConstruction.vue') },
        { path: 'settings', component: () => import('../views/UnderConstruction.vue') },
      ],
    },
    {
      path: '/training/:id',
      name: 'Training',
      component: () => import('../views/Trainings/TrainingDetail.vue'),
      params: true,
    },
    {
      path: '/trainingerstellen/:id',
      name: 'Training erstellen',
      component: () => import('../views/Trainings/TrainingErstellen.vue'),
      params: true,
    },

    { path: '/:pathmatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
