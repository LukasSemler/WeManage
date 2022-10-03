<template>
  <div>
    <Suspense>
      <Ankuendigungen></Ankuendigungen>

      <template #fallback>
        <h1 class="text-center text-xl font-bold mt-5">Loading...</h1>
      </template>
    </Suspense>
    <br />
    <hr />
    <br />
    <Suspense>
      <Trainings></Trainings>

      <template #fallback>
        <h1 class="text-center text-xl font-bold mt-5">Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Ankuendigungen from './Comps/Ankuendigungen.vue';
import Trainings from './Comps/Trainings.vue';
</script>
