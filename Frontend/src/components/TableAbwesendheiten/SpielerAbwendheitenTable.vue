<template>
  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" v-if="abwesendheiten > 0">
    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Training
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Abwesenheitsgrund
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Datum
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Team
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="(training, id) in abwesendheiten" :key="id">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {{ training.training }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ training.grund }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ training.datum.toString().substring(0, 10) }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ training.team }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <h1 class="text-center text-xl font-bold mt-5">Du hast noch keine abwesenheiten</h1>
  </div>
</template>

<script setup>
import axios from 'axios';
import { PiniaStore } from '@/Store/Store.js';
import { ref } from 'vue';

const store = PiniaStore();

let abwesendheiten = ref([]);

try {
  let { data } = await axios.get(`/abwesenheiten/${store.getAktivenUser.data.s_id}`);
  abwesendheiten.value = data;
} catch (error) {
  console.log(error);
}
</script>
