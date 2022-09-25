<template>
  <!-- Trainer anzeigen -->
  <div class="px-4 sm:px-6 lg:px-8 mt-6 mb-6">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Trainer</h1>
        <p class="mt-2 text-sm text-gray-700">
          Hier werden alle Trainer dieser Mannschaft angezeigt. Trainer können Trainings erstellen,
          bearbeiten, löschen, sowie Ankündigungen posten
        </p>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in trainer" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="person.avatarpath" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          {{ person.vorname }} {{ person.nachname }}
                        </div>
                        <div class="text-gray-500">{{ person.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.role }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br />
  <hr />
  <br />

  <!-- Spieler anzeigen -->
  <div class="px-4 sm:px-6 lg:px-8 mt-6">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Spieler</h1>
        <p class="mt-2 text-sm text-gray-700">
          Hier werden alle Spieler angezeigt die in dieser Mannschaft spielen.
        </p>
      </div>
    </div>
    <div v-if="!keinerSpielerVorhanden" class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in spieler" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="person.avatarpath" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">
                          {{ person.vorname }} {{ person.nachname }}
                        </div>
                        <div class="text-gray-500">{{ person.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.role }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-center text-3xl font-bold">
        <div class="relative bg-white py-12">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Keine Spieler vorhanden
            </p>
          </div>
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

const trainer = ref([]);
const spieler = ref([]);
let keinerSpielerVorhanden = ref(false);

onMounted(async () => {
  console.log(id.value);
  const spielerDB = await getSpieler();
  const trainerDB = await getTrainer();

  spieler.value = spielerDB;
  trainer.value = trainerDB;
});

//Funktionen um alle Personen zu holen
async function getSpieler() {
  try {
    const { data: spieler } = await axios.get(`/getSpieler/${id.value}`);
    return spieler;
  } catch (error) {
    keinerSpielerVorhanden.value = true;
    console.log(error);
  }
}

async function getTrainer() {
  try {
    const { data: trainer } = await axios.get(`/getTrainer/${id.value}`);
    return trainer;
  } catch (error) {
    console.log(error);
  }
}
</script>
