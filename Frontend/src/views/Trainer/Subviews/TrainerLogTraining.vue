<template>
  <h1 class="text-center text-3xl font-bold mt-3">Log Trainings</h1>
  <br />
  <br />
  <Suspense>
    <CompTrainerLog></CompTrainerLog>
    <template #fallback>
      <h1 class="text-center">Loading...</h1>
    </template>
  </Suspense>
</template>

<script setup>
import CompTrainerLog from '../../../components/Trainer/CompTrainerLog.vue';
</script>
