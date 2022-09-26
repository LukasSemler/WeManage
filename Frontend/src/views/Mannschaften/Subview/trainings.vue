<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 sm:truncate">Trainings</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4" v-if="store.getAktivenUser.type == 'Trainer'">
      <button
        @click="router.push(`/trainingerstellen/${id}`)"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
      >
        Training
        <PlusIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
  <TrainerTrainings></TrainerTrainings>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../../Store/Store';
// Tailwind imports
import { PlusIcon } from '@heroicons/vue/20/solid';

import TrainerTrainings from '../../../components/Trainings/TrainerTrainings.vue';

const router = useRouter();
const store = PiniaStore();
const id = router.currentRoute.value.params.id;
</script>
