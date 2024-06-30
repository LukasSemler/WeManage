<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
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
          v-if="errorLogin"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XMarkIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Fehler</p>
                <p class="mt-1 text-sm text-gray-500">
                  Beim Anmelden ist leider ein Fehler aufgetreten. Bitte probiere es erneut.
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="errorLogin = false"
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

  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="../../assets/icons/placeholder_icon.png"
        alt="Electronic City"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="login">
          <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
          <div class="mt-1">
            <input
              v-model="state.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
            />

            <p v-if="validator.email.$invalid" class="mt-2 text-sm text-red-600" id="email-error">
              {{ validator.email.$silentErrors[0].$message }}
            </p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input
                v-model="state.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
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

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                @click="router.push('/register')"
                class="font-medium text-lime-500 hover:text-lime-600 underline"
              >
                Erstellen Sie ein Konto
              </a>
            </div>

            <div class="text-sm">
              <a class="font-medium text-lime-500 hover:text-lime-600">
                Passwort vergessen?
              </a>
            </div>
          </div>

          <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <button
              type="submit"
              :class="
                !checkError
                  ? 'my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none'
                  : 'my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-800 focus:outline-none'
              "
              value="Login"
            >
              Login
            </button>
            <button
              @click="router.push('/')"
              class="my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
            >
              Abbrechen
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../Store/Store';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/vue/20/solid';

// Vuelidate import
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const store = PiniaStore();
const router = useRouter();

let errorLogin = ref(false);

// Inputs
let state = reactive({
  email: '',
  password: '',
});
// Rules for vuelidate
const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});

const validator = useValidate(rules, state);

async function login(e) {
  e.preventDefault();

  if (validator.value.$silentErrors.length == 0) {
    try {
      // Daten an den Server schicken
      const result = await axios.post('/login', {
        email: state.email,
        password: state.password,
      });
      console.log(result);

      // Person im Store setzen
      store.setAktivenUser(result.data);

      if (result.data.type == 'Trainer') {
        // Home Seite vomn Trainer Pushen
        console.log('push');
        router.push('/homeTrainer');
      } else {
        router.push('/homeSpieler');
      }
    } catch (error) {
      console.log('catch');
      errorLogin.value = true;
      console.log(errorLogin.value);
      setTimeout(() => (errorLogin.value = false), 3000);
    }
  } else {
    console.log('fehler');
  }
}

const checkError = computed(() => {
  return validator.value.$invalid == true ? true : false;
});
</script>
