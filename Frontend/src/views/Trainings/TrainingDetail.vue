<template>
  <div>
    <nav class="bg-lime-500 relative z-10">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="relative flex h-16 items-center" @click="router.go('-1')">
          <ArrowLeftIcon class="w-10 h-10 text-black"></ArrowLeftIcon>
          <p class="text-black text-lg ml-2">Back</p>
        </div>
      </div>
    </nav>

    <CompTrainerDetail v-if="store.getAktivenUser.type == 'Trainer'"></CompTrainerDetail>
    <CompSpielerDetail v-else></CompSpielerDetail>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../Store/Store.js';

import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
import CompTrainerDetail from '../../components/TrainingDetail/CompTrainerDetail.vue';
import CompSpielerDetail from '../../components/TrainingDetail/CompSpielerDetail.vue';

const router = useRouter();
const store = PiniaStore();
const id = router.currentRoute.value.params.id;
</script>
