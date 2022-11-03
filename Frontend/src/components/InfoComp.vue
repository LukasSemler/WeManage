<template>
  <div class="overflow-hidden">
    <div class="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <svg
        class="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dein Team! <br />
            Deine Möglichkeiten alles heraus zuholen!
          </h2>
        </div>
        <dl
          class="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0"
        >
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div
                class="flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white"
              >
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="mt-5 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  BoltIcon,
  BanknotesIcon,
  ArrowsPointingInIcon,
  Square2StackIcon,
} from '@heroicons/vue/24/outline';

const features = [
  {
    name: 'Bedienung & Handhabung',
    description:
      'Das Zusammenspiel neuer Technologien in Verbindung mit maximaler Innovation spricht nach einfacher Bedienung. Um es wirklich jedem recht zu machen!',
    icon: BoltIcon,
  },
  {
    name: 'Design & Aussehen',
    description:
      'Das Zusammenspiel moderner Design-Elemente, mit genügend Hirnschmalz um alles so darzustellen wie man es braucht, lässt sich sehen!',
    icon: Square2StackIcon,
  },
  {
    name: 'Preis & Kosten',
    description:
      'Keine versteckten Kosten, welche sich während Laufzeit der Reihe nach aufdecken. Preise werden im Vorhinein durch Abonnements festgelegt.',
    icon: BanknotesIcon,
  },
  {
    name: 'Ein Platz',
    description:
      'Für alle Mitglieder egal ob Spieler- oder Trainer-Position ein Platz. Alle Aufgaben auf einem Platz vereint! ',
    icon: ArrowsPointingInIcon,
  },
];
</script>
