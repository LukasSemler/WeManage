<template>
  <TransitionRoot as="template" :show="fehlen">
    <Dialog as="div" class="relative z-10" @close="fehlen = true">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h2" class="text-2xl font-medium leading-6 text-gray-900"
                    >Bitte gib eine Begründung ein</DialogTitle
                  >
                  <div class="mt-2">
                    <p>Gib bitte an, warum du nicht zum Training kommen kannst.</p>
                    <br />

                    <div>
                      <label
                        for="begründung"
                        class="text-left block text-sm font-medium text-gray-700"
                        >Begründung</label
                      >
                      <div class="mt-1">
                        <textarea
                          v-model="state.begründung"
                          type="begründung"
                          name="begründung"
                          id="begründung"
                          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                @click="reason"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                  @click="fehlen = false"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

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
                  Du kannst deine Anwesenheit nicht ändern, das Training hat schon begonnen
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="warningMessage = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
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
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
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

  <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 mt-5">
    <div class="overflow-hidden rounded-lg bg-white">
      <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
        <div class="divide-y divide-gray-200 lg:col-span-12 flex flex-col justify-center">
          <!-- Profile section -->

          <div class="overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Trainings Info Spieler</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Hier siehst du alle Informationen zu diesem Training
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Titel</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ training.titel }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Datum</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ neuesDatum }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Treffpunkt:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ TrainingsTreffpunkt }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Start:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ TrainingsBeginn }}
                  </dd>
                </div>
                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Ende:</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ TrainingsEnde }}
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

  <div class="flex justify-center">
    <ul
      role="list"
      class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 shadow-xl"
    >
      <li
        class="col-span-2 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <h3 class="mt-6 text-sm font-medium text-gray-900">Kommst du zu diesem Training?</h3>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200" v-if="kommt">
            <div class="flex w-0 flex-1">
              <p
                @click="changeKommt"
                class="cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-b-lg border border-transparent py-4 text-sm font-medium bg-green-500"
              >
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
                <span class="ml-3 text-white">Ja</span>
              </p>
            </div>
          </div>
          <div class="-mt-px flex divide-x divide-gray-200" v-if="!kommt">
            <div class="flex w-0 flex-1">
              <p
                @click="changeKommt"
                class="cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-b-lg border border-transparent py-4 text-sm font-medium bg-red-600"
              >
                <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true" />
                <span class="ml-3 text-white">Nein</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, computed, reactive } from 'vue';
import axios from 'axios';
import { XMarkIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/vue/20/solid';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

import { PiniaStore } from '../../Store/Store';

const router = useRouter();
const store = PiniaStore();
const id = router.currentRoute.value.params.id;
const training = ref({});
const spielerListe = ref([]);
let kommt = ref(true);
let aktiverSpieler = ref({});
let darfÄndern = ref(false);
let fehlen = ref(false);

let state = reactive({
  begründung: '',
});

let warningMessage = ref(false);
let error = ref(false);

//Training-Zeiten
let TrainingsTreffpunkt = ref('00:00 Uhr');
let TrainingsBeginn = ref('00:00 Uhr');
let TrainingsEnde = ref('00:00 Uhr');

onMounted(async () => {
  const { data } = await axios.get(`/getTrainingDetail/${id}`);
  training.value = data[0];

  TrainingsTreffpunkt.value = `${training.value.trainingtreffpunkt.split(':')[0]}:${
    training.value.trainingtreffpunkt.split(':')[1]
  } Uhr`;

  TrainingsBeginn.value = `${training.value.trainingbeginn.split(':')[0]}:${
    training.value.trainingbeginn.split(':')[1]
  } Uhr`;
  TrainingsEnde.value = `${training.value.trainingende.split(':')[0]}:${
    training.value.trainingende.split(':')[1]
  } Uhr`;

  console.log(training.value);

  const { data: spieler } = await axios.get(`/getTrainingDetailSpieler/${id}`);
  spielerListe.value = spieler;

  aktiverSpieler.value = spielerListe.value.find(
    (spieler) => store.getAktivenUser.data.s_id == spieler.s_id,
  );

  kommt.value = aktiverSpieler.value.kommt;

  // Datum erstellen um die Uhrzeit zu bekommen
  let datumJetzt = new Date();
  let datumTraining = new Date(
    training.value.trainingdatum.split('-')[0],
    training.value.trainingdatum.split('-')[1] - 1,
    Number(training.value.trainingdatum.split('-')[2].substring(0, 2)),
    // Number(training.value.trainingdatum.split('-')[2].substring(0, 2)) + 1,

    training.value.trainingtreffpunkt.split(':')[0],
    training.value.trainingtreffpunkt.split(':')[1],
    training.value.trainingtreffpunkt.split(':')[2],
  );

  console.log(
    `Jetzt: ${datumJetzt.toDateString()} ${datumJetzt.getHours()}:${datumJetzt.getMinutes()}`,
  );
  console.log(
    `Training: ${datumTraining.toDateString()} ${datumTraining.getHours()}:${datumTraining.getMinutes()}`,
  );

  if (datumJetzt < datumTraining) {
    console.log('Ändern ok');
    darfÄndern.value = true;
  } else {
    console.log('Ändern nicht ok');
    darfÄndern.value = false;
  }
});

const neuesDatum = computed(() => {
  let date = new Date(training.value.trainingdatum);

  let weekday = date.getDate();
  let weekdayText = date.toLocaleString('de-de', { weekday: 'long' });
  let monthL = date.toLocaleString('de-de', { month: 'long' });
  let year = date.toLocaleString('de-de', { year: 'numeric' });

  return `${weekdayText}, ${weekday}. ${monthL} ${year}`;
});

async function changeKommt() {
  if (darfÄndern.value) {
    if (kommt.value) {
      fehlen.value = true;
    } else {
      kommt.value = true;
      try {
        await axios.patch(`/changeSpielerKommt/${aktiverSpieler.value.s_id}`, {
          kommt: kommt.value,
          train_id: id,
        });
      } catch (error) {
        error.value = true;
        setTimeout(() => (error.value = false), 3000);
        console.log(error);
      }
    }
  } else {
    warningMessage.value = true;
    setTimeout(() => (warningMessage.value = false), 3000);
    console.log('Darf nicht ändern, das Training hat schon begonnen');
  }
}

async function reason() {
  kommt.value = false;
  fehlen.value = false;

  try {
    await axios.patch(`/changeSpielerKommt/${aktiverSpieler.value.s_id}`, {
      kommt: kommt.value,
      train_id: id,
      begründung: state.begründung,
    });
  } catch (error) {
    error.value = true;
    setTimeout(() => (error.value = false), 3000);
    console.log(error);
  }
}
</script>
