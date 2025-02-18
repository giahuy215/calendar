<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-row justify-between items-center">
			<span class="text-xl text-dark-blue font-bold">Upcoming Events</span>
			<button class="!text-xs !text-white bg-dark-blue px-4 py-2 rounded-full">
				View All
			</button>
		</div>
		<div class="text-neutral-500 text-lg font-bold">
			{{ dayjs().format("ddd, DD MMM") }}
		</div>
		<div class="flex flex-col gap-2">
			<event-card></event-card>
			<appointment-card></appointment-card>
		</div>
	</div>
</template>

<script setup lang="ts">
	import dayjs from "dayjs";
	import EventCard from "./event-card.vue";
	import AppointmentCard from "./appointment-card.vue";
</script>

<style scoped></style>
