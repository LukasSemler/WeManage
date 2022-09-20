<template>
  <div v-for="news of nachrichten" v-if="nachrichten.length > 0">
    <div class="bg-white px-4 py-6 sm:px-6">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="news.avatarpath" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline">{{ news.vorname }} {{ news.nachname }}</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#" class="hover:underline">{{ news.datetime }}</a>
          </p>
        </div>
      </div>
      <div class="bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto">
        <h1 class="font-bold mr-12 w-full">{{ news.titel }}</h1>
        <p class="mt-3">
          {{ news.nachricht }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
            Keine Ankündigungen vorhanden
          </p>
          <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Es sind noch keine Ankündigungen vorhanden, wenn dein Trainer eine erstellt hast siehst
            du diese hier.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

import axios from 'axios';

const router = useRouter();
const id = ref(router.currentRoute.value.params.id);

let nachrichten = ref([]);

onMounted(async () => {
  const { data } = await axios.get(`/getNews/${id.value}`);
  console.log(data);
  nachrichten.value = data;
});
</script>
