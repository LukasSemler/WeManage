<template>
  <div class="m-12">
    <div>
      <nav class="sm:hidden" aria-label="Back">
        <a
          @click="router.push('/homeTrainer')"
          class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Back
        </a>
      </nav>
      <nav class="hidden sm:flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex">
              <a
                @click="router.push('/homeTrainer')"
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
                >Home</a
              >
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <a class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Team erstellen oder beitreten</a
              >
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <!-- -->
    <T_TeamErstellen v-if="store.getAktivenUser.type == 'Trainer'"></T_TeamErstellen>
    <S_TeamErstellen v-else></S_TeamErstellen>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../Store/Store.js';
import axios from 'axios';

// Vuelidate import
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import T_TeamErstellen from '../../components/TeamErstellenBeitreten/T_TeamErstellen.vue';
import S_TeamErstellen from '../../components/TeamErstellenBeitreten/S_TeamErstellen.vue';

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
