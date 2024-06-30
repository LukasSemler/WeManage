<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1 my-2">
      <h1 class="text-3xl font-bold text-gray-900">Gesundheitsstatus</h1>
    </div>
  </div>

  <h1 class="text-center font-bold text-3xl mt-12">In Progress, stay tuned...</h1>
  <!-- <Suspense>
    <TrainerSpielerHealth></TrainerSpielerHealth>

    <template #fallback>
      <h1>Loading</h1>
    </template>
  </Suspense> -->
</template>

<script setup>
import TrainerSpielerHealth from '../../../components/CompSpielerHealth/TrainerSpielerHealth.vue';
</script>
