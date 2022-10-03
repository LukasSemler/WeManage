<template>
  <!-- Trainer suchen anzeigen -->
  <TransitionRoot :show="openTrainerSearch" as="template" @after-leave="query = ''" appear v-if="store.getAktivenUser.type == 'Trainer'">
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
                      active && 'bg--600 text-black',
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
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none" v-if="store.getAktivenUser.type == 'Trainer'">
        <button
          @click="openSearchTrainer"
          type="button"
          class="bg-lime-500 inline-flex items-center justify-center rounded-md border border-transparent bg--600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none sm:w-auto"
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
                      @click="trainerDel(person)"
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
</template>

<script setup>
import { useRouter } from 'vue-router';

// Store impotieren
import { PiniaStore } from '../../Store/Store';

import { computed, ref, onMounted } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

import { XMarkIcon, TrashIcon, EyeIcon } from '@heroicons/vue/20/solid';
import { CheckIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';

const store = PiniaStore();
const router = useRouter();
const id = router.currentRoute.value.params.id;
let query = ref('');

let trainer = ref([]);
const trainerSearch = ref([]);

const openTrainerSearch = ref(false);

try {
  const { data: trainerDB } = await axios.get(`/getTrainer/${id}`);
  trainer.value = trainerDB;
  console.log(trainer.value);
} catch (error) {
  console.log(error);
}

const filteredTrainer = computed(() =>
  query.value === ''
    ? []
    : trainerSearch.value.filter((person) => {
        return person.vorname.toLowerCase().includes(query.value.toLowerCase());
      }),
);

async function onSelectTrainer(person) {
  try {
    await axios.post('/addTrainerMannschaft', { t_id: person.t_id, m_id: id });

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

async function getAllTrainer() {
  const { data: trainer } = await axios.get('/getAllTrainer');
  return trainer;
}

async function trainerDel(person) {
  // console.log(store.getAktivenUser);
  if (person.t_id != store.getAktivenUser.data.t_id) {
    // Trainer lokal löschen
    trainer.value = trainer.value.filter((trainer) => trainer.t_id != person.t_id);

    //Trainer aus der Datenbank löschen
    await axios.delete(`/trainerMannschaftDel/${person.t_id}/${id}`);
  }
}
</script>
