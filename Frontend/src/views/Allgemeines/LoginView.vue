<template>
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
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
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
              <a href="#" class="font-medium text-lime-500 hover:text-lime-600">
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            <button
              @click="router.push('/')"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
            >
              Abbrechen
            </button>
            <button
              @click="login"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"
            >
              Login
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

// Vuelidate import
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const store = PiniaStore();
const router = useRouter();

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
      // Ergebnis auswerten

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
</script>
