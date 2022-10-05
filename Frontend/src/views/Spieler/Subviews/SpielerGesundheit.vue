<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <h1 class="text-2xl font-bold leading-6 text-gray-900 my-1">Gesundheit</h1>
  </div>

  <form class="space-y-8 divide-y divide-gray-200 px-4 py-4 sm:px-6 lg:px-8">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">Gesundheit</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Hier kannst du deinen Trainern mitteilen wie es dir körperlich geht. Also wie müde du
            bist beziehungsweise ob du zu viel Trainiert hast.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="first-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >xxx</label
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
                        v-for="person in people"
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

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="last-name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >xxx</label
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
                        v-for="person in people"
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

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >xxx</label
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
                        v-for="person in people"
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

          <div
            class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Sonstige Beschwerden</label
            >
            <div class="mt-1 sm:col-span-1 sm:mt-0">
              <textarea
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
          type="submit"
          class="w-48 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  </form>

  <div class="w-2/3 flex justify-center"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { PiniaStore } from '../../../Store/Store';
import { ref } from 'vue';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { StarIcon } from '@heroicons/vue/20/solid';

const people = [
  { id: 1, rating: 1 },
  { id: 2, rating: 2 },
  { id: 3, rating: 3 },
  { id: 4, rating: 4 },
  { id: 5, rating: 5 },
];

const selectedAllg = ref(people[4]);
</script>
