<template>
  <div class="mt-4 md:flex md:items-center md:justify-between">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Team Beitreten
      </h2>
      <p class="text-gray-900 sm:truncate sm:text-md sm:tracking-tight mt-3">
        Hier kannst du einem Team beitreten, indem du den Zugangscode eingibst. Diesen bekommst du
        von deinem Trainer
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
                  v-model="state.titel"
                  type="text"
                  name="titel"
                  id="titel"
                  class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <p v-if="validator.titel.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                {{ validator.titel.$silentErrors[0].$message }}
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
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          @click="makeTeam"
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
let state = reactive({
  titel: '',
  beschreibung: '',
  farbe: '#A629E6',
  zugangscode: makeid(6),
});

const rules = computed(() => {
  return {
    titel: { required },
    farbe: { required },
    zugangscode: { required },
  };
});

const validator = useValidate(rules, state);

async function makeTeam(e) {
  e.preventDefault();

  if (validator.value.$silentErrors.length == 0) {
    try {
      // Daten an den Server schicken
      const result = await axios.post('/addTeam', {
        titel: state.titel,
        beschreibung: state.beschreibung,
        farbe: state.farbe,
        zugangscode: state.zugangscode,
        t_id: store.getAktivenUser.data.t_id,
      });
      console.log(result);

      // Ergebnis auswerten
      if (result.status == 200) router.push('/homeTrainer');
    } catch (error) {
      console.log(error.message);
      // if (error.message.includes('400')) {
      //   duplicateError.value = true;
      //   setTimeout(() => (duplicateError.value = false), 3000);
      // }
      // if (error.message.includes('500')) {
      //   error.value = true;
      //   setTimeout(() => (error.value = false), 3000);
      // }
    }
  } else {
    console.log('fehler');
  }
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>
