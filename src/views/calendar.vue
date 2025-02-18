<template>
	<base-layout>
		<template #calendar>
			<a-calendar
				:value="date"
				@select="onSelect"
				@panelChange="onPanelChange"
			/>
		</template>
		<template #event>
			<event-sidebar></event-sidebar>
		</template>
	</base-layout>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import dayjs, { Dayjs } from "dayjs";
	import BaseLayout from "../layouts/base-layout.vue";
	import EventSidebar from "../components/event-sidebar.vue";

	const date = ref(dayjs());
	const selectedValue = ref(dayjs());

	const onSelect = (value: Dayjs) => {
		date.value = value;
		selectedValue.value = value;
	};
	const onPanelChange = (value: Dayjs) => {
		date.value = value;
	};
</script>

<style lang="scss" scoped></style>
