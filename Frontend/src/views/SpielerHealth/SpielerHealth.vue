<template>
  <div>
    <h1 class="text-center text-3xl font-bold">Spieler Health {{ id }}</h1>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const id = router.currentRoute.value.params.id;
</script>
