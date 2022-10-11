<template>
  <div class="px-4 sm:px-6 lg:px-8 mt-4">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-gray-900">Abwesenheiten</h1>
        <p class="mt-2 text-sm text-gray-700">All deine Abwesendheiten auf einem Blick.</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <Suspense>
          <SpielerAbwesendheitenTable />
          <template #fallback>
            <h2 class="text-center text-xl font-bold mt-5">Loading...</h2>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpielerAbwesendheitenTable from '@/components/TableAbwesendheiten/SpielerAbwendheitenTable.vue';
</script>
