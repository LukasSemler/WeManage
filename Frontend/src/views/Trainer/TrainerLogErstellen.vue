<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
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
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Erfolgreich hinzugefügt</p>
                <p class="mt-1 text-sm text-gray-500">
                  Das Training wurde erfolgreich hinzugefügt.
                </p>
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
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
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
                <p class="mt-1 text-sm text-gray-500">Es gab leider einen Fehler beim Erstellen.</p>
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

  <div class="min-h-full">
    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"
    >
      <div class="flex flex-shrink-0 items-center px-6">
        <img class="h-8 w-auto" src="../../assets/icons/placeholder_icon.png" alt="Your Company" />
      </div>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
        <!-- User account dropdown -->
        <div class="mt-6 mb-3 px-3 flex-row">
          <div class="space-y-1">
            <div
              @click="router.go(-1)"
              class="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <ArrowLeftIcon class="h-10 w-10"></ArrowLeftIcon>
              <p class="text-2xl font-bold mx-2">Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main column -->
    <div class="flex flex-col lg:pl-64">
      <div class="mt-6 mb-3 px-3 flex-row lg:hidden">
        <div class="space-y-1">
          <div
            @click="router.go(-1)"
            class="text-gray-900 group flex items-center py-2 text-sm font-medium rounded-md"
          >
            <ArrowLeftIcon class="h-10 w-10"></ArrowLeftIcon>
            <p class="text-xl font-bold mx-2">Back</p>
          </div>
        </div>
      </div>
      <main class="flex-1">
        <form class="divide-y divide-gray-200 lg:col-span-9">
          <!-- Profile section -->
          <div class="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 class="text-lg font-medium leading-6 text-gray-900">Training aufzeichnen</h2>
              <p class="mt-1 text-sm text-gray-500">
                Hier kann ein neues Training aufgezeichnet werden
              </p>
            </div>

            <div class="mt-6 grid grid-cols-12 gap-6">
              <div class="col-span-12 sm:col-span-4">
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >Datum</label
                >
                <Datepicker
                  id="date"
                  v-model="state.date"
                  :format="format"
                  model-type="yyyy-MM-dd"
                ></Datepicker>
              </div>

              <div class="col-span-12 sm:col-span-2">
                <label for="last-name" class="block text-sm font-medium text-gray-700"
                  >Beginn</label
                >
                <Datepicker v-model="state.von" timePicker />
              </div>

              <div class="col-span-12 sm:col-span-2">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Ende</label>
                <Datepicker v-model="state.bis" timePicker />
              </div>
            </div>
          </div>
          <div class="pt-5">
            <div class="flex justify-center">
              <button
                @click="router.go(-1)"
                type="button"
                class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                @click="trainingAufzeichnen"
                type="submit"
                class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
              >
                Aufzeichnen
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { PiniaStore } from '../../Store/Store.js';

import { useRouter } from 'vue-router';

import axios from 'axios';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const router = useRouter();
const store = PiniaStore();

let error = ref(false);
let success = ref(false);

let state = reactive({
  date: '',
  von: '',
  bis: '',
});

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

async function trainingAufzeichnen(e) {
  e.preventDefault();
  try {
    await axios.post(`/logTraining/${store.getAktivenUser.data.t_id}`, state);
    console.log(state);

    success.value = true;
    clearFields();
    setTimeout(() => {
      success.value = false;
    }, 3000);
  } catch (error) {
    error.value = true;

    setTimeout(() => (error.value = false), 3000);
    console.log('Error');
  }
}

function clearFields() {
  state.datum = '';
  state.beginn = '';
  state.ende = '';
}

const id = router.currentRoute.value.params.id;
</script>
