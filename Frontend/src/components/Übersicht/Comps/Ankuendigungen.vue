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
    <p
      class="text-center text-gray-500 underline cursor-pointer"
      @click="
        router.push(`/detailMannschaft/${router.currentRoute.value.params.id}/ankuendigungen`)
      "
    >
      mehr anzeigen
    </p>
  </div>
  <div v-else>
    <p class="text-center">Keine Nachrichten vorhanden</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let nachrichten = ref([]);
const id = ref(router.currentRoute.value.params.id);

try {
  const { data } = await axios.get(`/getNews/${id.value}`);
  nachrichten.value = data;
  console.log(nachrichten.value.length);
  if (nachrichten.value.length > 2) nachrichten.value.length = 2;
} catch (error) {
  console.log(error);
}
</script>
