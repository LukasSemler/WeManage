<template>
  <!-- Page title & actions -->
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1">
      <h1 class="text-2xl font-bold leading-6 text-gray-900 sm:truncate">Home</h1>
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

  <!-- Pinned projects -->
  <div class="mt-6 px-4 sm:px-6 lg:px-8">
    <h2 class="text-sm font-medium text-gray-900">Meine Mannschaften</h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      <li
        v-for="project in store.getTeams"
        :key="project.id"
        class="relative col-span-1 flex rounded-md shadow-sm"
      >
        <div
          :class="`flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-[${project.farbe}]`"
        >
          {{ project.farbe }}
        </div>
        <div
          class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"
        >
          <div class="flex-1 truncate px-4 py-2 text-sm">
            <a class="font-medium text-gray-900 hover:text-gray-600">{{ project.titel }}</a>
            <p class="text-gray-500">12 Spieler</p>
          </div>
          <Menu as="div" class="flex-shrink-0 pr-2">
            <MenuButton
              class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >View</a
                    >
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Removed from pinned</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Share</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </li>
    </ul>
  </div>

  <!-- Kalender -->
  <div class="p-8"><Kalender_comp></Kalender_comp></div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Kalender impotieren
import Kalender_comp from '../../../components/Kalender_comp.vue';

// Tailwind imports
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/vue/20/solid';

// Store impotieren
import { PiniaStore } from '../../../Store/Store';

const store = PiniaStore();
const router = useRouter();
</script>
