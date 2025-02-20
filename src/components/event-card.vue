<template>
	<div class="w-full flex flex-row">
		<div class="w-2 bg-light-blue rounded-l-lg"></div>
		<div class="p-5 w-full flex flex-col gap-2 bg-light-orange rounded-r-lg">
			<div class="w-[70%]">
				<span class="text-lg text-dark-blue font-bold">
					{{ event?.title }}
				</span>
			</div>
			<div class="text-neutral-400 flex flex-row gap-2">
				<span>{{ event?.start }} - {{ event?.end }} GMT + 7</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import type { EventModel } from "../models/event-model";

	const props = defineProps({
		event: Object as () => EventModel,
	});

	const event = computed(() => props.event);
</script>

<style scoped></style>
