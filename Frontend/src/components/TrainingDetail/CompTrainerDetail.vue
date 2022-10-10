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
          v-if="success"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Success</p>
                <p class="mt-1 text-sm text-gray-500">Du hast das Training erfolgreich geändert.</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="success = false"
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

  <TransitionRoot as="template" :show="showDel">
    <Dialog as="div" class="relative z-10" @close="showDel = true">
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
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"
                    >Training löschen</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Wenn du das Training löscht, kann dieses nicht wiederhergestellt werde.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="delTraining"
                >
                  Löschen
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                  @click="showDel = false"
                  ref="cancelButtonRef"
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

  <div>
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 mt-5">
      <div class="overflow-hidden rounded-lg bg-white">
        <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          <div class="divide-y divide-gray-200 lg:col-span-12 flex flex-col justify-center">
            <!-- Profile section -->

            <div
              class="overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3"
              v-if="!showEdit"
            >
              <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto p-4">
                  <h1 class="text-xl font-semibold text-gray-900">Trainings Info</h1>
                  <p class="mt-2 text-sm text-gray-700">
                    Hier siehst du alle Informationen zu diesem Training
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none p-4">
                  <button
                    @click="showEdit = true"
                    type="button"
                    class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
                  >
                    <Cog6ToothIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Bearbeiten
                  </button>
                  <button
                    @click="showDel = true"
                    type="button"
                    class="ml-2 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"
                  >
                    <TrashIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Löschen
                  </button>
                </div>
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
            <!-- -------------------------------------------- -->
            <div
              class="overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3"
              v-else
            >
              <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto p-4">
                  <h1 class="text-xl font-semibold text-gray-900">Trainings Info</h1>
                  <p class="mt-2 text-sm text-gray-700">
                    Hier siehst du alle Informationen zu diesem Training
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none p-4">
                  <button
                    @click="showEdit = false"
                    type="button"
                    class="inline-flex items-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none"
                  >
                    Cancle
                  </button>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-200">
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Titel</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <input
                          type="text"
                          name="titel"
                          id="titel"
                          v-model="state.titel"
                          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                        />
                      </div>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Datum</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <Datepicker
                          id="date"
                          v-model="state.datum"
                          :format-locale="de"
                          :format="format"
                        ></Datepicker>
                      </div>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Treffpunkt:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <Datepicker v-model="state.treffpunkt" timePicker model-type="timestamp" />
                      </div>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Start:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <Datepicker v-model="state.start" timePicker model-type="timestamp" />
                      </div>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Ende:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <Datepicker v-model="state.ende" timePicker model-type="timestamp" />
                      </div>
                    </dd>
                  </div>
                  <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Halle:</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div class="mt-1">
                        <input
                          type="text"
                          name="halle"
                          id="halle"
                          v-model="state.halle"
                          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                        />
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="flex justify-end mx-6 my-4">
                <button
                  @click="changeTraining"
                  type="button"
                  class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-5">
      <div class="max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5 mx-auto">
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
    </div>

    <br />

    <div class="mx-5">
      <div class="max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5 mx-auto">
        <h1 class="text-xl font-bold">Anwesenheit:</h1>
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300 mx-3">
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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, computed, reactive } from 'vue';
import {
  XMarkIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  CheckIcon,
  TrashIcon,
} from '@heroicons/vue/20/solid';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { PiniaStore } from '../../Store/Store';
import axios from 'axios';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { de } from 'date-fns/locale';

const store = PiniaStore();
const router = useRouter();
const id = router.currentRoute.value.params.id;
const training = ref({});
const spielerListe = ref([]);
let warningMessage = ref(false);
let error = ref(false);
let success = ref(false);
let darfAnwesenheitChecken = ref(false);
let showEdit = ref(false);
let showDel = ref(false);
let state = reactive({
  titel: '',
  datum: null,
  treffpunkt: null,
  start: null,
  ende: null,
  halle: '',
});

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

  if (datumJetzt > datumTraining) {
    console.log('Ändern ok');
    darfAnwesenheitChecken.value = true;
  } else {
    console.log('Ändern nicht ok');
    darfAnwesenheitChecken.value = false;
  }
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

async function changeTraining() {
  try {
    const datumNeu = new Date(state.datum);
    datumNeu.setMinutes(12);
    state.datum = datumNeu;
    console.log(state);
    await axios.patch(`/changeTraining/${id}`, { state });
    success.value = true;
    showEdit.value = false;
    setTimeout(() => (success.value = false), 3000);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
async function delTraining() {
  try {
    const result = await axios.delete(`/delTraining/${id}`);
    router.go(-1);
  } catch (error) {
    console.log(error);
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
  return Math.floor((prozent = (anzahl / spielerListe.value.length) * 100));
});
//Anzahl der Spieler berrechnen
let computedNicht = computed(() => {
  let anzahl = 0;
  spielerListe.value.forEach((spieler) => {
    if (!spieler.kommt) anzahl += 1;
  });
  return anzahl;
});
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
</script>
