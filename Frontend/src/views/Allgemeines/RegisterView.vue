<template>
  <!-- Duplicate Error -->
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
          v-if="duplicateError"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Error</p>
                <p class="mt-1 text-sm text-gray-500">
                  Es ist bereits ein User mit dieser Email registriert. Nimm bitte eine andere
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="duplicateError = false"
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

  <!-- Error -->
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
                <XCircleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Error</p>
                <p class="mt-1 text-sm text-gray-500">
                  Leider ist beim Erstellen ein Fehler aufgetreten. Bitte probiere es nocheinmal
                  oder kontaktiere unseren Support
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

  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../../assets/icons/placeholder_icon.png"
        alt="Electronic City"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6">
          <div>
            <div>
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-700"
                    >Vorname</label
                  >
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
                  <label for="last-name" class="block text-sm font-medium text-gray-700"
                    >Nachname</label
                  >
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

                    <p
                      v-if="validator.email.$invalid"
                      class="mt-2 text-sm text-red-600"
                      id="email-error"
                    >
                      {{ validator.email.$silentErrors[0].$message }}
                    </p>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="password" class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
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
              <div class="mt-4">
                <RadioGroup v-model="spielerTrainerLists">
                  <RadioGroupLabel class="text-base font-medium text-gray-900"
                    >Spieler oder Trainer</RadioGroupLabel
                  >

                  <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    <RadioGroupOption
                      as="template"
                      v-for="st in spieler_trainer"
                      :key="st.id"
                      :value="st"
                      v-slot="{ checked, active }"
                    >
                      <div
                        :class="[
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'border-lime-500 ring-2 ring-lime-500' : '',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                        ]"
                      >
                        <span class="flex flex-1">
                          <span class="flex flex-col">
                            <RadioGroupLabel
                              as="span"
                              class="block text-sm font-medium text-gray-900"
                              >{{ st.title }}</RadioGroupLabel
                            >
                            <RadioGroupDescription
                              as="span"
                              class="mt-1 flex items-center text-sm text-gray-500"
                              >{{ st.description }}</RadioGroupDescription
                            >
                          </span>
                        </span>
                        <CheckCircleIcon
                          :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-lime-500']"
                          aria-hidden="true"
                        />
                        <span
                          :class="[
                            active ? 'border' : 'border-2',
                            checked ? 'border-lime-500' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg',
                          ]"
                          aria-hidden="true"
                        />
                      </div>
                    </RadioGroupOption>
                  </div>
                </RadioGroup>
              </div>
              <div class="rounded-md bg-blue-50 p-4 mt-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm text-blue-700">
                      Diesen Punkt kannst du nachher nicht mehr ändern
                    </p>
                  </div>
                </div>
              </div>
              <br />
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
          <br />

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/login')"
                class="font-medium text-lime-500 hover:text-lime-600 underline"
              >
                Zu Login
              </a>
            </div>
          </div>

          <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <button
              @click="router.push('/')"
              class="my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Abbrechen
            </button>
            <button
              @click="register"
              class="my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, ref, computed } from 'vue';

// Imports für Tailwind
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/20/solid';
import { InformationCircleIcon } from '@heroicons/vue/20/solid';
import { XMarkIcon } from '@heroicons/vue/20/solid';

// Imports für vuelidate
import useValidate from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

import axios from 'axios';

// Variablen für die Error Messages
let duplicateError = ref(false);
let error = ref(false);

// Variable für die Radio Buttons
const spieler_trainer = [
  {
    id: 1,
    title: 'Spieler',
    description:
      'Als Spieler kannst du deinem Mannschaften beitreten und bekommst alle wichtigen Infos von deinen Trainern',
  },
  {
    id: 2,
    title: 'Trainer',
    description: 'Erstelle Mannschaften und verwalte diese einfach',
  },
];

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

const selectedAvatar = ref(avatare[0]);

// Liste für die Radio Buttons
const spielerTrainerLists = ref(spieler_trainer[0]);

const router = useRouter();

// Variablen for input erstellen
const state = reactive({
  vorname: '',
  nachname: '',
  email: '',
  password: '',
  c_password: '',
});

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

async function register(e) {
  e.preventDefault();

  if (validator.value.$silentErrors.length == 0) {
    try {
      // Daten an den Server schicken
      const result = await axios.post('/register', {
        vorname: state.vorname,
        nachname: state.nachname,
        email: state.email,
        password: state.password,
        type: spielerTrainerLists.value.title,
        avatarPath: selectedAvatar.value.path,
      });
      // Ergebnis auswerten
      if (result.status === 200) router.push('/login');
    } catch (error) {
      console.log(error.message);
      if (error.message.includes('400')) {
        duplicateError.value = true;
        setTimeout(() => (duplicateError.value = false), 3000);
      }
      if (error.message.includes('500')) {
        error.value = true;
        setTimeout(() => (error.value = false), 3000);
      }
    }
  } else {
    console.log('fehler');
  }
}
</script>
