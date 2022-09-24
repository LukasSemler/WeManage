<template>
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
    @click="router.push(`/detailMannschaft/${router.currentRoute.value.params.id}/ankuendigungen`)"
  >
    mehr anzeigen
  </p>
  <br />
  <hr />
  <br />
  <h1 class="text-xl px-5 pt-3 font-bold">Kommende Trainings</h1>
  <br />
  <div class="overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="truncate text-sm font-medium text-indigo-600">{{ position.title }}</p>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>2.September 2022 um 13:00</p>
                </div>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <MapPinIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  HTL Ottakring
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
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Tailwind imports
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';

import axios from 'axios';

const router = useRouter();

let nachrichten = ref([]);
const id = ref(router.currentRoute.value.params.id);

onMounted(async () => {
  const { data } = await axios.get(`/getNews/${id.value}`);
  nachrichten.value = data;

  if (nachrichten.value.length > 2) nachrichten.value.length = 2;
});

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
];
</script>
