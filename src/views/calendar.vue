<template>
	<base-layout>
		<template #calendar>
			<!-- Button change type of calendar -->
			<div class="w-full lg:hidden flex">
				<button
					class="w-full px-4 py-2 bg-dark-blue rounded-lg"
					@click="isFullScreenCalendar = !isFullScreenCalendar"
				>
					<span class="text-white">Change calendar type</span>
				</button>
			</div>
			<!-- Calendar -->
			<a-calendar
				v-model:value="date"
				@select="onSelect"
				@panelChange="onPanelChange"
				:fullscreen="isFullScreenCalendar"
			>
				<template #dateCellRender="{ current }">
					<div v-if="isFullScreenCalendar">
						<template v-for="item in getListData(current)" :key="item.id">
							<div
								class="w-full flex flex-row overflow-hidden"
								:class="{
									'bg-light-blue': item.type === EventType.APPOINTMENT,
									'bg-light-orange': item.type === EventType.EVENT,
								}"
							>
								<div
									class="w-1"
									:class="{
										'bg-dark-orange': item.type === EventType.APPOINTMENT,
										'bg-light-blue': item.type === EventType.EVENT,
									}"
								></div>
								<span
									class="truncate px-2 py-1 font-semibold"
									:class="{
										'text-white': item.type === EventType.APPOINTMENT,
										'text-dark-blue': item.type === EventType.EVENT,
									}"
								>
									{{ item.title }}
								</span>
							</div>
						</template>
					</div>
				</template>
			</a-calendar>
		</template>
		<template #event>
			<event-sidebar
				:selectedDate="selectedValue"
				:list-event="listEvent"
			></event-sidebar>
		</template>
	</base-layout>
</template>

<script setup lang="ts">
	import { ref, watch } from "vue";
	import dayjs, { Dayjs } from "dayjs";
	import BaseLayout from "../layouts/base-layout.vue";
	import EventSidebar from "../components/event-sidebar.vue";
	import eventData from "../assets/data.json";
	import { EventType } from "../utils/constant";
	import type { EventModel } from "../models/event-model";

	const date = ref(dayjs());
	const selectedValue = ref(dayjs().format("YYYY-MM-DD"));
	let listEvent: Array<EventModel> = [];

	const onSelect = (value: Dayjs) => {
		date.value = value;
		selectedValue.value = value.format("YYYY-MM-DD");
		listEvent = eventData.items.filter(
			(item) => item.dateInMonth === date.value.date(),
		);
	};

	const onPanelChange = (value: Dayjs) => {
		date.value = value;
	};

	const getListData = (value: Dayjs) => {
		let listData;
		const currentDate = value.date();

		listData = eventData.items.filter(
			(item) => item.dateInMonth === currentDate,
		);

		return listData || [];
	};

	const screenWidth = ref(window.innerWidth);

	const isFullScreenCalendar = ref(true);

	watch(screenWidth, (newValue) => {
		if (newValue < 1024) {
			isFullScreenCalendar.value = false;
		} else {
			isFullScreenCalendar.value = true;
		}
	});

	const updateScreenWidth = () => {
		screenWidth.value = window.innerWidth;
	};

	window.addEventListener("resize", updateScreenWidth);
</script>

<style lang="scss" scoped></style>
