<template>
  <vue-cal
    style="height: 500px"
    class="vuecal"
    :time-from="10 * 60"
    :events="termine"
    :on-event-click="onEventClick"
  ></vue-cal>
</template>

<script setup>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { useRouter } from 'vue-router';

const props = defineProps({
  termine: Array,
});

const router = useRouter();

function onEventClick(event, e) {
  console.log(event);
  router.push(`/training/${event.t_id}`);
}
</script>

<style>
/* Green-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #84cc15;
  color: black;
}
.vuecal__title-bar {
  background-color: #4f4f4f;
  color: white;
}
.vuecal__cell--today,
.vuecal__cell--current {
  background-color: rgba(132, 204, 22, 0.4);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, 0.4);
}
.vuecal__cell--selected:before {
  border-color: #84cc15;
}

/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: #84cc15;
}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: rgba(0, 81, 255, 0.25);
}

.vuecal__event {
  background-color: rgba(132, 204, 22, 75);
  border: 1px solid black;
  color: black;
  box-sizing: border-box;
  padding: 5px;
}
</style>
