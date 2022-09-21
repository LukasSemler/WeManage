<template>
  <div class="mx-4 mt-4">
    <Kalender_comp></Kalender_comp>
  </div>
  <br /><br />
  <h1 class="ml-5 text-xl font-bold">Nächsten Trainings</h1>
  <br />
  <div class="overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3">
    <ul role="list" class="divide-y divide-gray-200">
      <li
        v-for="position in positions"
        :key="position.id"
        @click="$router.push(`/training/${position.id}`)"
      >
        <a class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="truncate text-sm font-medium text-indigo-600">{{ position.title }}</p>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <CalendarIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>2.September 2022 um 13:00</p>
                </div>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <MapPinIcon
                    class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  HTL Ottakring
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

// Tailwind imports
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';

const positions = [
  {
    id: 1,
    title: 'Montag Training',
    location: 'HTL Ottakring',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Mittwoch Training',
    location: 'Spallartgasse',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'Donnerstag Training',
    location: 'HTL Ottakring',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
  {
    id: 4,
    title: 'Samstag Training',
    location: 'HTL Ottakring',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
];
</script>
