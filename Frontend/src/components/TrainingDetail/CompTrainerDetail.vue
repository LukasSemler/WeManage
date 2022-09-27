<template>
  <div
    aria-live="assertive"
    class="z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="warningMessage"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ExclamationTriangleIcon class="h-6 w-6 text-orange-500" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Achtung</p>
                <p class="mt-1 text-sm text-gray-500">
                  Du kannst die Anwesenheit nicht ändern, das Training hat noch nicht begonnen.
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="warningMessage = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <div
    aria-live="assertive"
    class="z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="error"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XMarkIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Fehler</p>
                <p class="mt-1 text-sm text-gray-500">
                  Es gab leider einen Fehler beim ändern der Anwesenheit.
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="error = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

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
          <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Anzahl an Spielern</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {{ computedAnzahl }}
            </dd>
          </div>
          <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Anzahl an Spielern (%)</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {{ computedPerc }}%
            </dd>
          </div>
          <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt class="truncate text-sm font-medium text-gray-500">Fehlende Spieler</dt>
            <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {{ computedNicht }}
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
                        @click="changeAnwesenheit(false, spieler.s_id)"
                        v-if="spieler.kommt"
                        class="cursor-pointer inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white"
                        >Ja</span
                      >
                      <span
                        v-else
                        @click="changeAnwesenheit(true, spieler.s_id)"
                        class="cursor-pointer inline-flex rounded-full bg-red-600 px-2 text-xs font-semibold leading-5 text-white"
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
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/vue/20/solid';
import axios from 'axios';

const router = useRouter();
const id = router.currentRoute.value.params.id;
const training = ref({});
const spielerListe = ref([]);

let warningMessage = ref(false);
let error = ref(false);
let darfAnwesenheitChecken = ref(false);

onMounted(async () => {
  const { data } = await axios.get(`/getTrainingDetail/${id}`);
  training.value = data[0];

  const { data: spieler } = await axios.get(`/getTrainingDetailSpieler/${id}`);
  spielerListe.value = spieler;

  // Datum erstellen um die Uhrzeit zu bekommen
  const date = new Date();
  let uhrzeit = `${date.getHours()}:${date.getMinutes()}`;
  // let uhrzeit = `18:30`;

  // Schauen ob der Trainer die Anwesenheit überprüfen darf
  if (uhrzeit > training.value.trainingbeginn && uhrzeit < training.value.trainingende)
    darfAnwesenheitChecken.value = true;
  else darfAnwesenheitChecken.value = false;
});

async function changeAnwesenheit(status, s_id) {
  if (darfAnwesenheitChecken.value) {
    // Anwesenheit lokal ändenrn
    spielerListe.value.forEach((spieler) => {
      if (spieler.s_id == s_id) spieler.kommt = status;
    });

    // Anwesenhheit in der DB ändern
    try {
      await axios.patch(`changeAnwesenheit/${id}/${s_id}`, { kommt: status });
    } catch (error) {
      error.value = true;
      setTimeout(() => (error.value = false), 3000);
      console.log(error);
    }
  } else {
    warningMessage.value = true;
    setTimeout(() => (warningMessage.value = false), 3000);
    console.log('Darf nicht ändern, das Training hat noch nd begonnen');
  }
}

const neuesDatum = computed(() => {
  let date = new Date(training.value.trainingdatum);

  let weekday = date.getDate();
  let weekdayText = date.toLocaleString('de-de', { weekday: 'long' });
  let monthL = date.toLocaleString('de-de', { month: 'long' });
  let year = date.toLocaleString('de-de', { year: 'numeric' });

  return `${weekdayText}, ${weekday}. ${monthL} ${year}`;
});

//Anzahl der Spieler berrechnen
let computedAnzahl = computed(() => {
  let anzahl = 0;
  spielerListe.value.forEach((spieler) => {
    if (spieler.kommt) anzahl += 1;
  });

  return anzahl;
});

//Anzahl der Spieler berrechnen
let computedPerc = computed(() => {
  let anzahl = 0;
  let prozent;

  spielerListe.value.forEach((spieler) => {
    if (spieler.kommt) anzahl += 1;
  });

  return (prozent = (anzahl / spielerListe.value.length) * 100);
});

//Anzahl der Spieler berrechnen
let computedNicht = computed(() => {
  let anzahl = 0;
  spielerListe.value.forEach((spieler) => {
    if (!spieler.kommt) anzahl += 1;
  });

  return anzahl;
});
</script>
