<template>
  <!-- Success -->
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Erfolgreich geändert</p>
                <p class="mt-1 text-sm text-gray-500">
                  Dein Gesundheitsstatus wurde erfolgreich geändert.
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="show = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!-- Error -->
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="fehler"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XMarkIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Fehler</p>
                <p class="mt-1 text-sm text-gray-500">Leider ist ein Fehler aufgetreten</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="fehler = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <!-- Form -->
  <form class="space-y-8 divide-y divide-gray-200 px-4 pb-4 sm:px-6 lg:px-8">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
        <div class="space-y-6 sm:space-y-5">
          <!-- Allgemein -->
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Allgemein</label
            >
            <div class="mt-1 sm:col-span-1 sm:mt-0">
              <Listbox as="div" v-model="selectedAllg">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
                  >
                    <div class="flex items-center">
                      <StarIcon
                        v-for="rating in [0, 1, 2, 3, 4]"
                        :key="rating"
                        :class="[
                          selectedAllg.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in sterne"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active, selectedAllg }"
                      >
                        <li
                          :class="[
                            active ? 'text-white bg-gray-300' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <StarIcon
                              v-for="rating in [0, 1, 2, 3, 4]"
                              :key="rating"
                              :class="[
                                person.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                          </div>

                          <span
                            v-if="selectedAllg"
                            :class="[
                              active ? 'text-white' : 'text-lime-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
          </div>
          <!-- Ausdauer -->
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Ausdauer</label
            >
            <div class="mt-1 sm:col-span-1 sm:mt-0">
              <Listbox as="div" v-model="selectedAusdauer">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
                  >
                    <div class="flex items-center">
                      <StarIcon
                        v-for="rating in [0, 1, 2, 3, 4]"
                        :key="rating"
                        :class="[
                          selectedAusdauer.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in sterne"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active, selectedAusdauer }"
                      >
                        <li
                          :class="[
                            active ? 'text-white bg-gray-300' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <StarIcon
                              v-for="rating in [0, 1, 2, 3, 4]"
                              :key="rating"
                              :class="[
                                person.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                          </div>

                          <span
                            v-if="selectedAusdauer"
                            :class="[
                              active ? 'text-white' : 'text-lime-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
          </div>

          <!-- Kraft -->
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Kraft</label
            >
            <div class="mt-1 sm:col-span-1 sm:mt-0">
              <Listbox as="div" v-model="selectedKraft">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
                  >
                    <div class="flex items-center">
                      <StarIcon
                        v-for="rating in [0, 1, 2, 3, 4]"
                        :key="rating"
                        :class="[
                          selectedKraft.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        ]"
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in sterne"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active, selectedKraft }"
                      >
                        <li
                          :class="[
                            active ? 'text-white bg-gray-300' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <StarIcon
                              v-for="rating in [0, 1, 2, 3, 4]"
                              :key="rating"
                              :class="[
                                person.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                          </div>

                          <span
                            v-if="selectedKraft"
                            :class="[
                              active ? 'text-white' : 'text-lime-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Sonstige Beschwerden</label
            >

            <div class="mt-1 sm:col-span-1 sm:mt-0">
              <div class="flex justify-end">
                <p class="text-sm text-gray-500 mx-1 mb-1" id="email-optional">Optional</p>
              </div>
              <textarea
                v-model="sonstigeBeschwerden"
                placeholder="Hier kannst du deinen Trainern körpleriche Probleme mitteilen"
                rows="4"
                name="comment"
                id="comment"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-center">
        <button
          @click="saveStatus"
          type="submit"
          class="w-48 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { PiniaStore } from '../../Store/Store.js';
import { ref } from 'vue';
import axios from 'axios';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { StarIcon } from '@heroicons/vue/20/solid';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { XMarkIcon } from '@heroicons/vue/20/solid';

const store = PiniaStore();

const sterne = [
  { id: 1, rating: 5 },
  { id: 2, rating: 4 },
  { id: 3, rating: 3 },
  { id: 4, rating: 2 },
  { id: 5, rating: 1 },
];

let selectedAllg = ref(sterne[0]);
let selectedAusdauer = ref(sterne[0]);
let selectedKraft = ref(sterne[0]);
let sonstigeBeschwerden = ref('');
let show = ref(false);
let fehler = ref(false);

try {
  const { data } = await axios.get(`/spielerHealth/${store.getAktivenUser.data.s_id}`);
  let obj = data[0];

  // Loop through the object and find the objects with the same id
  for (let i = 0; i < sterne.length; i++) {
    if (sterne[i].rating === obj.allgemein) {
      selectedAllg.value = sterne[i];
    }
    if (sterne[i].rating === obj.ausdauer) {
      selectedAusdauer.value = sterne[i];
    }
    if (sterne[i].rating === obj.kraft) {
      selectedKraft.value = sterne[i];
    }
  }
  // Textbox befüllen
  sonstigeBeschwerden.value = obj.sonstige;
} catch (error) {
  console.log(error);
}

async function saveStatus(e) {
  e.preventDefault();

  try {
    await axios.patch(`/spielerHealth/${store.getAktivenUser.data.s_id}`, {
      allg: selectedAllg.value.rating,
      ausdauer: selectedAusdauer.value.rating,
      kraft: selectedKraft.value.rating,
      sonstige: sonstigeBeschwerden.value,
    });
    // Success anzeigen
    show.value = true;
    setTimeout(() => (show.value = false), 3000);
  } catch (error) {
    fehler.value = true;
    setTimeout(() => (fehler.value = false), 3000);
  }
}
</script>
