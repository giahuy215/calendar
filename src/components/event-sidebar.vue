<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-row justify-between items-center">
			<span class="text-xl text-dark-blue font-bold">Upcoming Events</span>
			<button class="!text-xs !text-white bg-dark-blue px-4 py-2 rounded-full">
				View All
			</button>
		</div>
		<div class="text-neutral-500 text-lg font-bold">
			{{ dayjs(selectedDate).format("ddd, DD MMM") }}
		</div>
		<div class="flex flex-col gap-2">
			<div v-if="listEvent?.length === 0" class="mx-auto">
				<div class="text-neutral-400">No event today</div>
			</div>
			<template v-for="item in listEvent" :key="item.id">
				<event-card v-if="item.type === EventType.EVENT" />
				<appointment-card v-else />
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import dayjs from "dayjs";
	import EventCard from "./event-card.vue";
	import AppointmentCard from "./appointment-card.vue";
	import { defineProps, computed, watch } from "vue";
	import type { EventModel } from "../models/event-model";
	import { EventType } from "../utils/constant";

	const props = defineProps({
		selectedDate: String,
		listEvent: Array<EventModel> || undefined,
	});

	const selectedDate = computed(() => props.selectedDate);
	const listEvent = computed(() => props.listEvent);

	watch(listEvent, (newVal) => {
		console.log(newVal?.length);
	});
</script>

<style scoped></style>
