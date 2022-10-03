<template>
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

// Vuelidate import
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const router = useRouter();
const store = PiniaStore();

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
}
</script>
