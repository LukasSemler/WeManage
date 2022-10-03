<template>
  <Suspense>
    <TrainerTabelle></TrainerTabelle>

    <template #fallback>
      <h1 class="text-center text-xl font-bold mt-5">Loading ...</h1>
    </template>
  </Suspense>
  <br />
  <hr />
  <br />

  <Suspense>
    <SpielerTabelle></SpielerTabelle>

    <template #fallback>
      <h1 class="text-center text-xl font-bold mt-5">Loading ...</h1>
    </template>
  </Suspense>
</template>

<script setup>
import TrainerTabelle from '../TableMitglieder/TrainerTabelle.vue';
import SpielerTabelle from '../TableMitglieder/SpielerTabelle.vue';
</script>
