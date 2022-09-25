<template>
  <div>
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 mt-5">
      <div class="overflow-hidden rounded-lg bg-white">
        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          <div class="divide-y divide-gray-200 lg:col-span-12 flex flex-col justify-center">
            <!-- Profile section -->

            <div class="overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Trainings Info Trainer</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Hier siehst du alle Informationen zu diesem Training
                </p>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-200">
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Datum</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ neuesDatum }}
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Treffpunkt:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ training.trainingtreffpunkt }}
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Start:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ training.trainingbeginn }}
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Ende:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ training.trainingende }}
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Halle:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ training.wo }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5">
      <div>
        <h3 class="text-xl font-bold leading-6 text-gray-900">Statistik zum Training</h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="item in stats"
            :key="item.name"
            class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {{ item.stat }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="mx-auto max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5">
      <h1 class="text-xl font-bold">Anwesenheit:</h1>
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

                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Kommt
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(spieler, i) of spielerListe" :key="i">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <img class="h-10 w-10 rounded-full" :src="spieler.avatarpath" alt="" />
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">
                            {{ spieler.vorname }} {{ spieler.nachname }}
                          </div>
                          <div class="text-gray-500">{{ spieler.email }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span
                        v-if="spieler.kommt"
                        class="inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white"
                        >Ja</span
                      >
                      <span
                        v-else
                        class="inline-flex rounded-full bg-red-600 px-2 text-xs font-semibold leading-5 text-white"
                        >Nein</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import axios from 'axios';

const router = useRouter();
const id = router.currentRoute.value.params.id;
const training = ref({});
const spielerListe = ref([]);

onMounted(async () => {
  const { data } = await axios.get(`/getTrainingDetail/${id}`);
  training.value = data[0];

  const { data: spieler } = await axios.get(`/getTrainingDetailSpieler/${id}`);
  spielerListe.value = spieler;
});

const neuesDatum = computed(() => {
  let date = new Date(training.value.trainingdatum);

  let weekday = date.getDate();
  let weekdayText = date.toLocaleString('de-de', { weekday: 'long' });
  let monthL = date.toLocaleString('de-de', { month: 'long' });
  let year = date.toLocaleString('de-de', { year: 'numeric' });

  return `${weekdayText}, ${weekday}. ${monthL} ${year}`;
});

const stats = [
  { name: 'Anzahl an Spielern', stat: '20' },
  { name: 'Anzahl an Spielern (%)', stat: '90%' },
  { name: 'Fehlende Spieler', stat: '2' },
];
</script>
