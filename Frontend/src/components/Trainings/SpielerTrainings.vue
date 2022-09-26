<template>
  <div class="mx-4 mt-4">
    <Kalender_comp :termine="trainingKalender"></Kalender_comp>
  </div>
  <br /><br />
  <h1 class="ml-5 text-xl font-bold">Nächsten Trainings Spieler</h1>
  <br />
  <div class="overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3">
    <ul role="list" class="divide-y divide-gray-200">
      <li
        v-for="training in trainings"
        :key="training.training_id"
        @click="$router.push(`/training/${training.training_id}`)"
      >
        <a class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="truncate text-sm font-medium text-lime-500">{{ training.titel }}</p>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>
                    {{ training.trainingdatum }} | Beginn: {{ training.trainingbeginn }}, Ende:
                    {{ training.trainingende }}
                  </p>
                </div>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <MapPinIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {{ training.wo }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <ArrowRightIcon
                  class="mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import Kalender_comp from '../Kalender_comp.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Tailwind imports
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';
const router = useRouter();
let trainings = ref([]);
let trainingKalender = ref([]);

onMounted(async () => {
  const { data: training } = await axios.get(`/getTrainings/${id}`);
  trainings.value = training;

  trainingKalender.value = trainings.value.map((training) => {
    let date = new Date(training.trainingdatum);

    let beginn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
      training.trainingbeginn
    }`;

    let end = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
      training.trainingende
    }`;

    return { title: training.titel, start: beginn, end };
  });

  console.log(trainingKalender.value);
});

const id = router.currentRoute.value.params.id;
</script>
