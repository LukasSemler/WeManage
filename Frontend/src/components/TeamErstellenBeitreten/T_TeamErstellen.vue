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
          v-if="fehler"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Fehler</p>
                <p class="mt-1 text-sm text-gray-500">
                  Entweder du bist dieser Mannschaft schon beigetreten oder es gibt diese Mannschaft
                  nicht
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="fehler = false"
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

  <div class="mt-4 md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Team erstellen oder Beitreten
      </h2>
      <p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3">
        Hier kannst du einem vorhanden Team beitreten, indem du den Zugangscode eingibst, oder ein
        neues erstellen.
      </p>
    </div>
  </div>

  <br />
  <br />
  <br />

  <p class="text-2xl font-bold">Vorhandenen Team Beitreten:</p>
  <br />
  <form class="space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
            <label for="titel" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Code:</label
            >
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-lg rounded-md shadow-sm">
                <input
                  v-model="stateJoin.code"
                  type="text"
                  name="titel"
                  id="titel"
                  class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <p
                v-if="validatorJoin.code.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validatorJoin.code.$silentErrors[0].$message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5">
      <div class="flex justify-end">
        <button
          @click="router.push('/homeTrainer')"
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          @click="joinTeam"
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
        >
          Beitreten
        </button>
      </div>
    </div>
  </form>
  <br />
  <br />
  <br />
  <br />
  <p class="text-2xl font-bold">Neues Team erstellen:</p>
  <br />
  <form class="space-y-8 divide-y divide-gray-200 p-4 rounded-md shadow-lg">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
            <label for="titel" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Titel:</label
            >
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex max-w-lg rounded-md shadow-sm">
                <input
                  v-model="stateAdd.titel"
                  type="text"
                  name="titel"
                  id="titel"
                  class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm"
                />
              </div>
              <p
                v-if="validatorAdd.titel.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validatorAdd.titel.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Beschreibung</label
            >
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <textarea
                id="about"
                v-model="stateAdd.beschreibung"
                name="about"
                rows="3"
                class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
              />
              <p class="mt-2 text-sm text-gray-500">Schreibe eine kurze Beschreibung</p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="photo" class="block text-sm font-medium text-gray-700">Farbe</label>
            <div class="mt-1 sm:col-span-2 sm:mt-0">
              <div class="flex items-center">
                <input
                  class="rounded-md"
                  v-model="stateAdd.farbe"
                  type="color"
                  id="head"
                  name="head"
                />
                <p
                  v-if="validatorAdd.farbe.$invalid"
                  class="mt-2 text-sm text-red-600"
                  id="email-error"
                >
                  {{ validatorAdd.farbe.$silentErrors[0].$message }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          @click="router.push('/homeTrainer')"
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          @click="makeTeam"
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../Store/Store.js';
import axios from 'axios';
import { XCircleIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/20/solid';
// Vuelidate import
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const router = useRouter();
const store = PiniaStore();
let fehler = ref(false);

// Inputs
let stateAdd = reactive({
  titel: '',
  beschreibung: '',
  farbe: '#A629E6',
});

let stateJoin = reactive({
  code: '',
});

const rulesAdd = computed(() => {
  return {
    titel: { required },
    farbe: { required },
  };
});

const rulesJoin = computed(() => {
  return {
    code: { required },
  };
});

const validatorAdd = useValidate(rulesAdd, stateAdd);
const validatorJoin = useValidate(rulesJoin, stateJoin);

async function makeTeam(e) {
  e.preventDefault();

  if (validatorAdd.value.$silentErrors.length == 0) {
    try {
      // Daten an den Server schicken
      const result = await axios.post('/addTeam', {
        titel: stateAdd.titel,
        beschreibung: stateAdd.beschreibung,
        farbe: stateAdd.farbe,
        t_id: store.getAktivenUser.data.t_id,
      });
      console.log(result);

      // Ergebnis auswerten
      if (result.status == 200) router.push('/homeTrainer');
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log('fehler');
  }
}

async function joinTeam(e) {
  e.preventDefault();

  if (validatorJoin.value.$silentErrors.length == 0) {
    try {
      // Daten an den Server schicken
      const result = await axios.post('/tJoinTeam', {
        zugangscode: stateJoin.code,
        t_id: store.getAktivenUser.data.t_id,
      });

      // Ergebnis auswerten
      if (result.status == 200) router.push('/homeTrainer');
    } catch (error) {
      console.log(error.message);
      fehler.value = true;
      stateJoin.code = '';

      setTimeout(() => {
        fehler.value = false;
      }, 3000);
    }
  } else {
    console.log('fehler');
  }
}
</script>
