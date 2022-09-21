<template>
  <div>{{ id }}</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const id = router.currentRoute.value.params.id;
</script>
