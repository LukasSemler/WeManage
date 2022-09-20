<template>
  <TransitionRoot as="template" :show="add">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div class="h-0 flex-1 overflow-y-auto">
                    <div class="bg-indigo-700 py-6 px-4 sm:px-6">
                      <div class="flex items-center justify-between">
                        <DialogTitle class="text-lg font-medium text-white"
                          >Neue Ankündigung</DialogTitle
                        >
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            @click="closeSideBar"
                          >
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div class="mt-1">
                        <p class="text-sm text-indigo-300">
                          Hier kannst du eine neue Ankündigung posten. Diese ist für alle Spieler
                          sichtbar.
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-between">
                      <div class="divide-y divide-gray-200 px-4 sm:px-6">
                        <div class="space-y-6 pt-6 pb-5">
                          <div>
                            <label for="titel" class="block text-sm font-medium text-gray-900"
                              >Titel</label
                            >
                            <div class="mt-1">
                              <input
                                v-model="titel"
                                type="text"
                                name="titel"
                                id="titel"
                                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label for="message" class="block text-sm font-medium text-gray-900"
                              >Nachricht</label
                            >
                            <div class="mt-1">
                              <textarea
                                v-model="message"
                                id="message"
                                name="message"
                                rows="4"
                                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      @click="closeSideBar"
                    >
                      Cancel
                    </button>
                    <button
                      @click="posten"
                      type="submit"
                      class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Posten
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- ----- -->
  <div v-for="news of nachrichten" v-if="nachrichten.length > 0">
    <div class="bg-white px-4 py-6 sm:px-6">
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="news.avatarpath" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline">{{ news.vorname }} {{ news.nachname }}</a>
          </p>
          <p class="text-sm text-gray-500">
            <a href="#" class="hover:underline">{{ news.datetime }}</a>
          </p>
        </div>
      </div>
      <div class="bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto">
        <div class="flex flex-rows items-center">
          <h1 class="font-bold mr-12 w-full">{{ news.titel }}</h1>
          <div class="ml-5 w-11/12"></div>
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"
              >
                <span class="sr-only">Open options</span>
                <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex px-4 py-2 text-sm',
                      ]"
                    >
                      <TrashIcon class="mr-3 h-5 w-5 text-red-600" aria-hidden="true" />
                      <span>Delete</span>
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>

        <p class="mt-3">
          {{ news.nachricht }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
            Keine Ankündigungen vorhanden
          </p>
          <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Es sind noch keine Ankündigungen vorhanden, wenn du eine Erstellen willst, klicke rechts
            oben auf den Knopf "Ankündigung erstellen"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

// Tailwind imports

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { EllipsisVerticalIcon, TrashIcon } from '@heroicons/vue/20/solid';
import { XMarkIcon } from '@heroicons/vue/24/outline';

// Store impotieren
import { PiniaStore } from '../../Store/Store';
import axios from 'axios';

const props = defineProps({
  add: Boolean,
});

const emit = defineEmits(['sidebar']);

const store = PiniaStore();
const router = useRouter();
const id = ref(router.currentRoute.value.params.id);
// let open = ref(false);

let titel = ref('');
let message = ref('');

let nachrichten = ref([]);

onMounted(async () => {
  const { data } = await axios.get(`/getNews/${id.value}`);
  console.log(data);
  nachrichten.value = data;
});

async function posten(e) {
  e.preventDefault();

  let date = new Date();

  let weekday = date.getDay();
  let monthL = date.toLocaleString('de-de', { month: 'long' });
  let year = date.toLocaleString('de-de', { year: 'numeric' });
  let stunden = date.getHours();
  let minuten = date.getMinutes();

  const dateTime = `${weekday}. ${monthL} ${year} um ${stunden}:${minuten}`;

  // lokal Pushen
  nachrichten.value.push({
    titel: titel.value,
    nachricht: message.value,
    name: store.getNamen,
    dateTime: dateTime,
    avatarPath: store.getAktivenUser.data.avatarpath,
  });

  // in Datebase speichern
  const result = await axios.post('/postNews', {
    titel: titel.value,
    nachricht: message.value,
    dateTime: dateTime,
    m_id: id.value,
    t_id: store.getAktivenUser.data.t_id,
  });

  console.log(result);

  //! open.value = false;
  closeSideBar();
}

function closeSideBar() {
  emit('sidebar', false);
}
</script>
