<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="min-w-0 flex-1 my-2">
      <h1 class="text-3xl font-bold text-gray-900">Statistik</h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4"></div>
  </div>

  <div class="flex flex-row justify-center mt-4">
    <div class="w-5/6">
      <vue3-chart-js
        :id="barChart.id"
        ref="chartRef"
        :type="barChart.type"
        :data="barChart.data"
        :options="barChart.options"
      />
    </div>
  </div>
  <br />
  <br />
  <div class="flex flex-row justify-center">
    <div class="w-5/6">
      <h3 class="text-base font-semibold leading-6 text-gray-900">Allgemeine Statistiken</h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt class="truncate text-sm font-medium text-gray-500">Anwesenheitsquote</dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {{ anwesenheitsquote }}%
          </dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt class="truncate text-sm font-medium text-gray-500">Abwesenheitsquote</dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {{ abwesenheitsquote }}%
          </dd>
        </div>
        <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt class="truncate text-sm font-medium text-gray-500">
            Spieler, der am Häufigsten Fehlt
          </dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ mostMissed }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

let abwesenheit = ref([{ name: 'Lukas', fehlendetrainings: 2 }]);
let anzahlTrainings = ref(0);
let anzahlAbwesenheit = ref(0);
let anzahlSpieler = ref(0);

let spieler = ['Lukas Semler'];
let spielerFehlen = [1];

const chartRef = ref(null);

const updateChart = (labels, data) => {
  barChart.data.labels = labels;
  barChart.data.datasets = [
    {
      data: data,
      label: 'Verpasste Trainings pro Spieler',
      backgroundColor: ['#84cc16'],
    },
  ];

  chartRef.value.update(250);
};

const barChart = {
  type: 'bar',
  options: {
    min: 0,
    max: 10,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          callback: function (value) {
            return `${value}`;
          },
        },
      },
    },
  },
  data: {
    labels: spieler,
    datasets: [
      {
        label: 'Verpasste Trainings pro Spieler',
        backgroundColor: ['#84cc16'],
        data: spielerFehlen,
      },
    ],
  },
};

onMounted(async () => {
  const { data } = await axios.get(`/statistic/${router.currentRoute.value.params.id}`);
  console.log(data);

  // Alle Variablen Zuweisen
  abwesenheit.value = data.Abwensenheiten;
  anzahlTrainings.value = Number(data.InsegesamteAnzahlTrainings);
  anzahlAbwesenheit.value = Number(data.AnzahlDerFehleinheiten);
  anzahlSpieler.value = Number(data.SpielerAnzahl);

  let spieler = [];
  let spielerFehlen = [];

  // Spielernamen und Abwesenheiten trennen
  for (const iterator of abwesenheit.value) {
    spieler.push(iterator.name);
    spielerFehlen.push(iterator.fehlendetrainings);
  }

  updateChart(spieler, spielerFehlen);
});

const anwesenheitsquote = computed(() => {
  const erg =
    (anzahlTrainings.value * anzahlSpieler.value - anzahlAbwesenheit.value) /
    (anzahlTrainings.value * anzahlSpieler.value);
  return erg.toFixed(2) * 100;
});

const abwesenheitsquote = computed(() => {
  const erg =
    1 -
    (anzahlTrainings.value * anzahlSpieler.value - anzahlAbwesenheit.value) /
      (anzahlTrainings.value * anzahlSpieler.value);
  return erg.toFixed(2) * 100;
});

const mostMissed = computed(() => {
  // Spieler finden der am häufigsten gefehlt hat
  let mostMissed = 0;
  let mostMissedName = '';

  console.log(abwesenheit.value);

  for (const iterator of abwesenheit.value) {
    if (iterator.fehlendetrainings > mostMissed) {
      mostMissed = iterator.fehlendetrainings;
      mostMissedName = iterator.name;
    }
  }

  return mostMissedName;
});
</script>
