<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
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
          v-if="showError"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XMarkIcon class="h-6 w-6 text-red-500" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Die Person ist schon vorhanden</p>
                <p class="mt-1 text-sm text-gray-500">
                  Du kannst jede Person nur einmal zu einer Mannschaft hinzufügen.
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="showError = false"
                  class="inline-flex rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1 my-2">
      <h1 class="text-2xl font-bold leading-6 text-gray-900">Mitglieder</h1>
    </div>
  </div>
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
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          @click="openSearchTrainer"
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Trainer
        </button>
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
                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  >
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"
                    >
                      <TrashIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Entfernen
                    </button>
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
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          @click="openSearchSpieler"
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Spieler
        </button>
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
                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  >
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md border border-red-600 bg-white text-red-600 px-4 py-2 text-sm font-medium shadow-sm hover:text-red-700"
                    >
                      <TrashIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Entfernen
                    </button>
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
            <p class="mx-auto mt-5 max-w-prose text-lg font-normal text-gray-500">
              Du kannst neue Spieler zu der Mannschaft über den Button hinzufügen, oder indem du
              ihnen den Zugangscode gibst
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Trainer suchen anzeigen -->
  <TransitionRoot :show="openTrainerSearch" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="openTrainerSearch = false">
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

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          >
            <Combobox @update:modelValue="onSelectTrainer">
              <div class="relative">
                <MagnifyingGlassIcon
                  class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <ComboboxInput
                  class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  @change="query = $event.target.value"
                />
              </div>

              <ComboboxOptions
                v-if="filteredTrainer.length > 0"
                static
                class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                <ComboboxOption
                  v-for="person in filteredTrainer"
                  :key="person.id"
                  :value="person"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'cursor-default select-none px-4 py-2',
                      active && 'bg-indigo-600 text-white',
                    ]"
                  >
                    {{ person.vorname }} {{ person.nachname }}
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <p
                v-if="query !== '' && filteredTrainer.length === 0"
                class="p-4 text-sm text-gray-500"
              >
                No people found.
              </p>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Spieler suchen anzeigen -->
  <TransitionRoot :show="openSpielerSearch" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="openSpielerSearch = false">
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

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          >
            <Combobox @update:modelValue="onSelectSpieler">
              <div class="relative">
                <MagnifyingGlassIcon
                  class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <ComboboxInput
                  class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  @change="query = $event.target.value"
                />
              </div>

              <ComboboxOptions
                v-if="filteredSpieler.length > 0"
                static
                class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                <ComboboxOption
                  v-for="person in filteredSpieler"
                  :key="person.id"
                  :value="person"
                  as="template"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      'cursor-default select-none px-4 py-2',
                      active && 'bg-indigo-600 text-white',
                    ]"
                  >
                    {{ person.vorname }} {{ person.nachname }}
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

              <p
                v-if="query !== '' && filteredSpieler.length === 0"
                class="p-4 text-sm text-gray-500"
              >
                No people found.
              </p>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Store impotieren
import { PiniaStore } from '../../../Store/Store';

import { computed, ref, onMounted } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

import { XMarkIcon, TrashIcon } from '@heroicons/vue/20/solid';
import axios from 'axios';

const store = PiniaStore();
const router = useRouter();
const id = ref(router.currentRoute.value.params.id);
let showError = ref(false);

//*---------------------------------------------------------------------------
//#region Spieler Search
let spielerSearch = ref([]);
const openSpielerSearch = ref(false);
const query = ref('');
const filteredSpieler = computed(() =>
  query.value === ''
    ? []
    : spielerSearch.value.filter((person) => {
        console.log(person);
        return person.vorname.toLowerCase().includes(query.value.toLowerCase());
      }),
);

async function onSelectSpieler(person) {
  try {
    await axios.post('/addSpielerMannschaft', { s_id: person.s_id, m_id: id.value });

    spieler.value.push(person);
    openSpielerSearch.value = false;
  } catch (error) {
    showError.value = true;
    openSpielerSearch.value = false;
    console.log('Der Spieler ist schon vorhanden');

    setTimeout(() => (showError.value = false), 3000);
  }
}

async function openSearchSpieler() {
  const spieler = await getAllSpieler();
  spielerSearch.value = spieler;
  openSpielerSearch.value = true;
}

//#endregion

//*----------------------------------------------------------------------------------
//#region Trainer Search
//Spieler anzeigen und hinzufügen
const trainerSearch = ref([]);

const openTrainerSearch = ref(false);
const filteredTrainer = computed(() =>
  query.value === ''
    ? []
    : trainerSearch.value.filter((person) => {
        return person.vorname.toLowerCase().includes(query.value.toLowerCase());
      }),
);

async function onSelectTrainer(person) {
  try {
    await axios.post('/addTrainerMannschaft', { t_id: person.t_id, m_id: id.value });

    trainer.value.push(person);
    openTrainerSearch.value = false;
  } catch (error) {
    showError.value = true;
    openTrainerSearch.value = false;
    console.log('Der Trainer ist schon vorhanden');

    setTimeout(() => (showError.value = false), 3000);
  }
}

async function openSearchTrainer() {
  const trainer = await getAllTrainer();
  console.log(trainer);
  trainerSearch.value = trainer;
  openTrainerSearch.value = true;
}

//#endregion

//*----------------------------------------------------------------------------------

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
async function getAllSpieler() {
  const { data: spieler } = await axios.get('/getAllSpieler');
  return spieler;
}

async function getAllTrainer() {
  const { data: trainer } = await axios.get('/getAllTrainer');
  return trainer;
}

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
