<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-2xl font-bold leading-6 text-gray-900 sm:truncate">Home</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <button
        @click="router.push('/addTeam')"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
      >
        Team beitreten
      </button>
    </div>
  </div>

  <!-- Pinned projects -->
  <div class="mt-6 px-4 sm:px-6 lg:px-8" v-if="store.getTeams.length > 0">
    <h2 class="text-sm font-bold text-gray-900">Meine Mannschaften:</h2>
    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
      v-if="store.teams.length > 0"
    >
      <li
        v-for="project in store.getTeams"
        :key="project.id"
        @click="router.push(`/detailMannschaft/${project.m_id}`)"
        class="relative col-span-1 flex rounded-md shadow-sm"
      >
        <div
          :class="`flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-lime-500`"
        >
          {{ project.farbe }}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a class="font-medium text-gray-900 hover:text-gray-600">{{ project.titel }}</a>
            <p class="text-gray-500">12 Spieler</p>
          </div>
        </div>
      </li>
    </ul>
    <div v-else><h1>Du bist in keinen Teams</h1></div>
  </div>

  <div class="mx-3 my-3" v-else>
    <div
      @click="router.push('/addTeam')"
      class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span class="mt-2 block text-sm font-medium text-gray-900"
        >Du bist noch keinem Team beigetreten</span
      >
    </div>
  </div>

  <!-- Kalender -->
  <div class="px-2 pt-5"><Kalender_comp :events="trainingKalender"></Kalender_comp></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

// Kalender impotieren
import Kalender_comp from '../../../components/Kalender_comp.vue';

// Store impotieren
import { PiniaStore } from '../../../Store/Store';

const store = PiniaStore();
const router = useRouter();
let trainingKalender = ref([]);

onMounted(async () => {
  const { data: trainings } = await axios.get(
    `/getAllTrainingsSpieler/${store.getAktivenUser.data.s_id}`,
  );

  trainingKalender.value = trainings.map((training) => {
    let date = new Date(training.trainingdatum);

    let beginn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
      training.trainingbeginn
    }`;

    let end = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
      training.trainingende
    }`;

    return { title: training.titel, start: beginn, end, t_id: training.training_id };
  });
});
</script>
