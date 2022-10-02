<template>
  <main class="mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16">
    <form>
      <div class="space-y-6">
        <div>
          <h1 class="text-lg font-medium leading-6 text-gray-900">Mannschaft anpassen</h1>
          <p class="mt-1 text-sm text-gray-500">Hier kannst du deine Mannschaft anpassen.</p>
        </div>

        <div>
          <label for="project-name" class="block text-sm font-medium text-gray-700"
            >Team Name</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
              value="Project Nero"
            />
          </div>
        </div>

        <div class="space-y-2">
          <div class="space-y-1">
            <label for="add-team-members" class="block text-sm font-medium text-gray-700"
              >Add Team Members</label
            >
            <p id="add-team-members-helper" class="sr-only">Search by email address</p>
            <div class="flex">
              <div class="flex-grow">
                <input
                  type="text"
                  name="add-team-members"
                  id="add-team-members"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                  placeholder="Email address"
                  aria-describedby="add-team-members-helper"
                />
              </div>
              <span class="ml-3">
                <button
                  type="button"
                  class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  <PlusIcon class="-ml-2 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span>Add</span>
                </button>
              </span>
            </div>
          </div>

          <div class="border-b border-gray-200">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="person in team" :key="person.email" class="flex py-4">
                <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                <div class="ml-3 flex flex-col">
                  <span class="text-sm font-medium text-gray-900">{{ person.name }}</span>
                  <span class="text-sm text-gray-500">{{ person.email }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <label for="tags" class="block text-sm font-medium text-gray-700">Zugangscode</label>
          <input
            type="text"
            name="tags"
            id="tags"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
          />
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          >
            Create this project
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue';
import { PlusIcon } from '@heroicons/vue/20/solid';

const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
const settings = [
  {
    name: 'Public access',
    description: 'This project would be available to anyone who has the link',
  },
  {
    name: 'Private to Project Members',
    description: 'Only members of this project would be able to access',
  },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
];

const selected = ref(settings[0]);
</script>
