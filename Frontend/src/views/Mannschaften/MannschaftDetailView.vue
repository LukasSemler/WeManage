<template>
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="../../assets/icons/placeholder_icon.png"
                  alt="Your Company"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="px-2">
                  <div class="space-y-1">
                    <a
                      @click="changeSite(item.path)"
                      v-for="item in navigation"
                      :key="item.name"
                      :class="[
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                        'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md',
                      ]"
                      :aria-current="item.current ? 'page' : undefined"
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </div>
                  <div class="mt-8">
                    <h3 class="px-3 text-sm font-medium text-gray-500" id="mobile-teams-headline">
                      Teams
                    </h3>
                    <div
                      class="mt-1 space-y-1"
                      role="group"
                      aria-labelledby="mobile-teams-headline"
                    >
                      <a
                        v-for="team in store.getTeams"
                        :key="team.t_id"
                        class="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span
                          :class="`w-2.5 h-2.5 mr-4 rounded-full bg-[#50d71e] `"
                          aria-hidden="true"
                        />
                        <span class="truncate">{{ team.titel }}</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"
    >
      <div class="flex flex-shrink-0 items-center px-6">
        <img class="h-8 w-auto" src="../../assets/icons/placeholder_icon.png" alt="Your Company" />
      </div>
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
        <!-- User account dropdown -->
        <div class="mt-6 mb-3 px-3 flex-row">
          <div class="space-y-1">
            <div
              @click="router.push('/homeSpieler/teams')"
              class="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <ArrowLeftIcon class="h-10 w-10"></ArrowLeftIcon>
              <p class="text-2xl font-bold mx-2">Back</p>
            </div>
          </div>
        </div>

        <hr />

        <!-- Navigation -->
        <nav class="mt-6 px-3">
          <div class="space-y-1">
            <a
              v-for="item of navigation"
              :key="item.name"
              @click="changeSite(item.path)"
              :class="[
                item.current
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </nav>
      </div>
    </div>
    <!-- Main column -->
    <div class="flex flex-col lg:pl-64">
      <!-- Search header -->
      <div
        class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"
      >
        <button
          type="button"
          class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8"></div>
      </div>
      <main class="flex-1">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import {
  Bars3CenterLeftIcon,
  BellIcon,
  UserGroupIcon,
  HomeIcon,
  XMarkIcon,
  CalendarDaysIcon,
  ArrowLeftIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline';

import { RouterView, useRouter } from 'vue-router';
// Store impotieren
import { PiniaStore } from '../../Store/Store.js';
import axios from 'axios';

const store = PiniaStore();
const router = useRouter();

const sidebarOpen = ref(false);

const navigation = [
  {
    name: 'Übersicht',
    icon: HomeIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}`,
    params: true,
    onlyTrainer: true,
  },
  {
    name: 'Ankündigungen',
    icon: BellIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}/ankuendigungen`,
    params: true,
    onlyTrainer: true,
  },
  {
    name: 'Trainings',
    icon: CalendarDaysIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}/trainings`,
    onlyTrainer: true,
  },
  {
    name: 'Mitglieder',
    icon: UserGroupIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}/mitglieder`,
    onlyTrainer: true,
  },
  {
    name: 'Statistik',
    icon: ChartPieIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}/statistik`,
    onlyTrainer: true,
  },
  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    current: false,
    path: `/detailMannschaft/${router.currentRoute.value.params.id}/settings`,
    onlyTrainer: true,
  },
];

onMounted(async () => {
  const { data } = await axios.get(`/mannschaftenTrainer/${store.getAktivenUser.data.t_id}`);
  store.setMannschaften(data);
});

function changeSite(path) {
  router.push(path);
  sidebarOpen.value = false;
}

const id = ref(router.currentRoute.value.params.id);
</script>
