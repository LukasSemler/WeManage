<template>
  <div>
    <h1 class="text-xl px-5 pt-3 font-bold">Letzte Ankündigungen:</h1>
    <div v-for="news of nachrichten" v-if="nachrichten.length != 0">
      <div class="bg-white px-4 py-6 sm:px-6">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="news.avatarpath" alt="" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">
              <a class="hover:underline">{{ news.vorname }} {{ news.nachname }}</a>
            </p>
            <p class="text-sm text-gray-500">
              <a class="hover:underline">{{ news.datetime }}</a>
            </p>
          </div>
        </div>
        <div class="bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto">
          <div class="flex flex-rows items-center">
            <h1 class="font-bold mr-12 w-full">{{ news.titel }}</h1>
            <div class="ml-5 w-11/12"></div>
          </div>

          <p class="mt-3">
            {{ news.nachricht }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center">Keine Nachrichten vorhanden</p>
    </div>
    <p
      class="text-center text-gray-500 underline cursor-pointer"
      @click="
        router.push(`/detailMannschaft/${router.currentRoute.value.params.id}/ankuendigungen`)
      "
    >
      mehr anzeigen
    </p>
    <br />
    <hr />
    <br />
    <h1 class="text-xl px-5 pt-3 font-bold">Kommende Trainings</h1>
    <br />
    <div
      class="overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3"
      v-if="trainings.length > 0"
    >
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="training in trainings" :key="training.training_id">
          <div class="block hover:bg-gray-50">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="truncate text-sm font-medium text-lime-500">{{ training.titel }}</p>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>{{ neuesDatum }} Treffpunkt: {{ training.trainingtreffpunkt }}</p>
                  </div>
                  <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    <MapPinIcon
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {{ training.wo }}
                  </p>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <ArrowRightIcon
                    class="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-center text-2xl font-bold" v-else>
      <p>Es sind noch keine Trainings vorhanden</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

// Tailwind imports
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';

import axios from 'axios';

const router = useRouter();

let nachrichten = ref([]);
let trainings = ref([]);
const id = ref(router.currentRoute.value.params.id);

onMounted(async () => {
  try {
    const { data } = await axios.get(`/getNews/${id.value}`);
    nachrichten.value = data;
    if (nachrichten.value.length > 2) nachrichten.value.length = 2;

    const { data: training } = await axios.get(`/getTrainings/${id.value}`);
    trainings.value = training;
  } catch (error) {
    console.log(error);
  }
});

const neuesDatum = computed(() => {
  // let date = new Date(training.trainingdatum);

  // let weekday = date.getDate();
  // let weekdayText = date.toLocaleString('de-de', { weekday: 'long' });
  // let monthL = date.toLocaleString('de-de', { month: 'long' });
  // let year = date.toLocaleString('de-de', { year: 'numeric' });

  // return `${weekdayText}, ${weekday}. ${monthL} ${year}`;

  return 'test';
});
</script>
