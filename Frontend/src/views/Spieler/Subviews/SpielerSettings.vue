<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <h1 class="text-2xl font-bold leading-6 text-gray-900 my-1">Settings</h1>
  </div>

  <div class="px-4 py-4 sm:px-6 lg:px-8">
    <h1 class="text-xl font-bold leading-6 text-gray-900 my-1">Settings:</h1>
    <p class="font-bold leading-6 text-gray-900 my-1">Hier kannst du deinen Account bearbeiten.</p>
  </div>
  <br />
  <form class="divide-y divide-gray-200 lg:col-span-9 flex justify-center">
    <!-- Profile section -->
    <div class="m-5 w-1/2">
      <div>
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">Vorname</label>
            <div class="mt-1">
              <input
                v-model="state.vorname"
                type="text"
                id="first-name"
                name="first-name"
                autocomplete="given-name"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />

              <p
                v-if="validator.vorname.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validator.vorname.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Nachname</label>
            <div class="mt-1">
              <input
                v-model="state.nachname"
                type="text"
                id="last-name"
                name="last-name"
                autocomplete="family-name"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />

              <p
                v-if="validator.nachname.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validator.nachname.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input
                v-model="state.email"
                type="email"
                name="email"
                id="email"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />

              <p v-if="validator.email.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
                {{ validator.email.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input
                v-model="state.password"
                type="password"
                name="password"
                id="password"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />

              <p
                v-if="validator.password.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validator.password.$silentErrors[0].$message }}
              </p>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Confirm Password</label
            >
            <div class="mt-1">
              <input
                v-model="state.c_password"
                type="password"
                name="c_password"
                id="c_password"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />

              <p
                v-if="validator.c_password.$invalid"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validator.c_password.$silentErrors[0].$message }}
              </p>
            </div>
          </div>
        </div>
        <br />
        <RadioGroup v-model="selectedAvatar">
          <RadioGroupLabel class="text-base font-medium text-gray-900"
            >Wählen Sie einen Avatar</RadioGroupLabel
          >
          <div class="mt-4 flex items-center space-x-3">
            <RadioGroupOption
              as="template"
              v-for="avatar in avatare"
              :key="avatar.name"
              :value="avatar"
              v-slot="{ active, checked }"
            >
              <div
                :class="[
                  avatar.selectedColor,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none w-14 h-14',
                ]"
              >
                <img :src="avatar.path" :alt="avatar.name" class="h-14 w-14 object-contain" />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
  </form>
  <hr />
  <div class="flex justify-center">
    <button
      @click="changeAccount"
      class="my-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
    >
      ändern
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../../Store/Store';
import { reactive, ref, computed, onMounted } from 'vue';

// Imports für Tailwind
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

// Imports für vuelidate
import useValidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

import axios from 'axios';

const router = useRouter();

// Variablen für die Error Messages
let duplicateError = ref(false);
const store = PiniaStore();
const selectedAvatar = ref('');
let icon = null;
// Variablen for input erstellen
const state = reactive({
  vorname: store.getAktivenUser.data.vorname,
  nachname: store.getAktivenUser.data.nachname,
  email: store.getAktivenUser.data.email,
  password: 'xxxxxxxx',
  c_password: 'xxxxxxxx',
});

onMounted(() => {
  icon = avatare.find((elem) => elem.path == store.getAktivenUser.data.avatarpath);

  selectedAvatar.value = icon;
  console.log(icon);
});

const avatare = [
  { name: 'Avatar1', path: '/Avatare/Avatar1.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar2', path: '/Avatare/Avatar2.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar3', path: '/Avatare/Avatar3.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar4', path: '/Avatare/Avatar4.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar5', path: '/Avatare/Avatar5.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar6', path: '/Avatare/Avatar6.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar7', path: '/Avatare/Avatar7.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar8', path: '/Avatare/Avatar8.png', selectedColor: 'ring-lime-500' },
  { name: 'Avatar9', path: '/Avatare/Avatar9.png', selectedColor: 'ring-lime-500' },
];

// Rules for vuelidate
const rules = computed(() => {
  return {
    vorname: { required },
    nachname: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    c_password: { required, minLength: minLength(6), sameAs: sameAs(state.password) },
  };
});

const validator = useValidate(rules, state);

async function changeAccount(e) {
  e.preventDefault();

  if (validator.value.$silentErrors.length == 0) {
    try {
      //! TODO change User
    } catch (error) {}
  } else {
    console.log('fehler');
  }
}
</script>
