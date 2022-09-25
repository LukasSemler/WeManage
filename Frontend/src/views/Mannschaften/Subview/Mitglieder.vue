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
                  class="inline-flex rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring--500 focus:ring-offset-2"
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

  <TransitionRoot as="template" :show="showCode">
    <Dialog as="div" class="relative z-10" @close="showCode = false">
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
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"
                    >CODE: {{ zugangscode }}</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Mit diesem Code können andere Spieler und Trainer dieser Mannschaft beitreten
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  @click="showCode = false"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1 my-2">
      <h1 class="text-3xl font-bold text-gray-900">Mitglieder</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <button
        v-if="store.getAktivenUser.type == 'Trainer'"
        @click="getCode"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Code Anzeigen
        <EyeIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>

  <MitgliederTrainer v-if="store.getAktivenUser.type == 'Trainer'"></MitgliederTrainer>
  <MitgliederSpieler v-else></MitgliederSpieler>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Store impotieren
import { PiniaStore } from '../../../Store/Store';

import { computed, ref, onMounted } from 'vue';

import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

import { XMarkIcon, TrashIcon, EyeIcon } from '@heroicons/vue/20/solid';
import { CheckIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';
import MitgliederTrainer from '../../../components/Mitglieder/MitgliederTrainer.vue';
import MitgliederSpieler from '../../../components/Mitglieder/MitgliederSpieler.vue';

const store = PiniaStore();
const router = useRouter();
const id = ref(router.currentRoute.value.params.id);
let showError = ref(false);
let showCode = ref(false);
let zugangscode = ref(null);

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

async function trainerDel(person) {
  // console.log(store.getAktivenUser);
  if (person.t_id != store.getAktivenUser.data.t_id) {
    // Trainer lokal löschen
    trainer.value = trainer.value.filter((trainer) => trainer.t_id != person.t_id);

    //Trainer aus der Datenbank löschen
    await axios.delete(`/trainerMannschaftDel/${person.t_id}/${id.value}`);
  }
}

async function spielerDel(person) {
  // console.log(store.getAktivenUser);

  // Trainer lokal löschen
  spieler.value = spieler.value.filter((spieler) => spieler.s_id != person.s_id);

  //Trainer aus der Datenbank löschen
  await axios.delete(`/spielerMannschaftDel/${person.s_id}/${id.value}`);
}

async function getCode() {
  const result = await axios.get(`/getCode/${id.value}`);
  zugangscode.value = result.data.zugangscode;

  showCode.value = true;
}
</script>
