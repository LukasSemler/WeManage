<template>
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
          @click="openTrainerSearch = true"
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
                        <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ person.name }}</div>
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
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
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
          @click="openSpielerSearch = true"
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Spieler
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
                <tr v-for="person in spieler" :key="person.email">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ person.name }}</div>
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
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
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

  <!-- Trainer suchen anzeigen -->
  <TransitionRoot :show="openTrainerSearch" as="template" @after-leave="query = ''" appear>
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
                    {{ person.name }}
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
                    {{ person.name }}
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

import { computed, ref } from 'vue';
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

const store = PiniaStore();
const router = useRouter();

//Spieler anzeigen und hinzufügen
const spielerSearch = [
  {
    id: 1,
    name: 'Albert Prantl',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 2,
    name: 'Alex Reinisch',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 3,
    name: 'Jakob xxx',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 4,
    name: 'Moritz Steiner',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 5,
    name: 'Maxi Pajer',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 6,
    name: 'Filip Brikic',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 7,
    name: 'Ben Wallner',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 8,
    name: 'Benni Halmer',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 9,
    name: 'Elias Halmer',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 10,
    name: 'Max Wallner',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 11,
    name: 'Peo xxx',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 12,
    name: 'Niki Wiltschko',
    role: 'Spieler',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
];

const openSpielerSearch = ref(false);
const query = ref('');
const filteredSpieler = computed(() =>
  query.value === ''
    ? []
    : spielerSearch.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase());
      }),
);

function onSelectSpieler(person) {
  console.log(person);
  spieler.value.push(person);

  openSpielerSearch.value = false;
}

//*----------------------------------------------------------------------------------

//Spieler anzeigen und hinzufügen
const trainerSearch = [
  {
    id: 1,
    name: 'Roland Eberl',
    role: 'Trainer',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 2,
    name: 'Roland Marouschek',
    role: 'Trainer',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    id: 3,
    name: 'Peter Petrakovits',
    role: 'Trainer',
    email: 'xxx.xxx@gmail.com',
    image: '../../../../public/Avatare/Avatar5.png',
  },
];

const openTrainerSearch = ref(false);
const filteredTrainer = computed(() =>
  query.value === ''
    ? []
    : trainerSearch.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase());
      }),
);

function onSelectTrainer(person) {
  console.log(person);
  trainer.value.push(person);

  openTrainerSearch.value = false;
}

//*----------------------------------------------------------------------------------

const trainer = ref([
  {
    name: 'Lukas Musalek',
    email: 'xxx.xxx@gmail.com',
    role: 'Trainer',
    image: '../../../../public/Avatare/Avatar1.png',
  },
  {
    name: 'Lukas Semler',
    email: 'Lukas.Semler@example.com',
    role: 'Trainer',
    image: '../../../../public/Avatare/Avatar2.png',
  },
]);

const spieler = ref([
  {
    name: 'Tobi Bachmann',
    email: 'xxx.xxx@gmail.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar5.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
  {
    name: 'Simon Schmid',
    email: 'simon.schmid@example.com',
    role: 'Spieler',
    image: '../../../../public/Avatare/Avatar3.png',
  },
]);
</script>
