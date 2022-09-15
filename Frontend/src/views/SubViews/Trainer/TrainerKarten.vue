<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-2xl font-bold leading-6 text-gray-900 sm:truncate">Teams</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <button
        @click="router.push('/addTeam')"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Team
        <PlusIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
  <div class="mt-6 px-4 sm:px-6 lg:px-8">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li
        v-for="project in store.getTeams"
        :key="project.id"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div :class="`flex flex-1 flex-col p-16 rounded-t-lg bg-[${project.farbe}]`"></div>
        <div class="flex flex-1 flex-col pb-4">
          <h3 class="mt-6 text-sm font-medium text-gray-900">{{ project.titel }}</h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-sm text-gray-500">{{ project.farbe }}</dd>
            <dd class="text-sm text-gray-500">12 Spieler</dd>
          </dl>
        </div>

        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span class="ml-3">Details</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid';

// Store impotieren
import { PiniaStore } from '../../../Store/Store';

import { useRouter } from 'vue-router';

const store = PiniaStore();
const router = useRouter();
</script>