<template>
	<base-layout>
		<template #calendar>
			<a-calendar
				v-model:value="date"
				@select="onSelect"
				@panelChange="onPanelChange"
			>
				<template #dateCellRender="{ current }">
					<div v-for="item in getListData(current)" :key="item.id">
						<div
							class="w-full flex flex-row"
							:class="{
								'bg-light-blue': item.type === EventType.APPOINTMENT,
								'bg-light-orange': item.type === EventType.EVENT,
							}"
						>
							<div
								class="w-1"
								:class="{
									'bg-light-orange': item.type === EventType.APPOINTMENT,
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
	import { ref } from "vue";
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
</script>

<style lang="scss" scoped></style>
