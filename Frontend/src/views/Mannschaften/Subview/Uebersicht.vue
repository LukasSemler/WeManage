<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-3xl font-bold text-gray-900 sm:truncate my-2">Übersicht</h1>
    </div>
  </div>

  <Comp_Uebersicht></Comp_Uebersicht>
</template>

<script setup>
import Comp_Uebersicht from '../../../components/Übersicht/Comp_Uebersicht.vue';
</script>
