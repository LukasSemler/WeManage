<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <h1 class="text-2xl font-bold leading-6 text-gray-900 my-1">Gesundheit</h1>
  </div>

  <div class="px-4 pt-5 sm:px-6 lg:px-8">
    <div>
      <h3 class="text-lg font-medium leading-6 text-gray-900">Gesundheit</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Hier kannst du deinen Trainern mitteilen wie es dir körperlich geht. Also wie müde du bist
        beziehungsweise ob du zu viel Trainiert hast.
      </p>
    </div>
  </div>

  <Suspense>
    <CompSpielerHealth></CompSpielerHealth>

    <template #fallback>
      <h1 class="text-center text-xl font-bold mt-5">Loading...</h1>
    </template>
  </Suspense>
</template>

<script setup>
import CompSpielerHealth from '../../../components/CompSpielerHealth/CompSpielerHealth.vue';
</script>
