<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 sm:truncate">Ankündigungen</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <button
        v-if="store.getAktivenUser.type == 'Trainer'"
        @click="open = true"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600"
      >
        Ankündigungen
        <PlusIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>

  <AnkuendigungenTrainer
    v-if="store.getAktivenUser.type == 'Trainer'"
    :add="open"
    @sidebar="closeSideBar"
  ></AnkuendigungenTrainer>

  <AnkuendigungSpieler v-else></AnkuendigungSpieler>
</template>

<script setup>
import { ref } from 'vue';

// Tailwind imports
import { PlusIcon } from '@heroicons/vue/20/solid';

import { PiniaStore } from '../../../Store/Store';

import AnkuendigungenTrainer from '../../../components/Ankuendigungen/AnkuendigungenTrainer.vue';
import AnkuendigungSpieler from '../../../components/Ankuendigungen/AnkuendigungSpieler.vue';

const store = PiniaStore();

let open = ref(false);

function closeSideBar() {
  open.value = false;
}
</script>
