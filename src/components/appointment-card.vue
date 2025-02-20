<template>
	<div class="flex flex-row">
		<div class="w-2 bg-dark-orange rounded-l-lg"></div>
		<div class="p-5 w-full flex flex-row bg-dark-blue rounded-r-lg">
			<div class="w-[70%] flex flex-col gap-2">
				<!-- Title -->
				<span class="text-lg text-white font-bold">
					{{ appointment?.title }}
				</span>
				<!-- Time -->
				<span class="text-light-orange">
					{{ appointment?.start }} - {{ appointment?.end }} GMT + 7
				</span>
				<div class="flex flex-row gap-3 items-center text-white">
					<div class="w-10 h-10 p-2 rounded-full bg-dark-orange">
						<img
							class="w-full h-full"
							src="../assets/user-white.svg"
							alt="user-white"
						/>
					</div>
					<span class="underline">View Client Profile</span>
				</div>
			</div>
			<div class="w-[30%] flex justify-end">
				<div class="w-14 h-14 p-2 rounded-full bg-dark-orange">
					<img
						class="w-full h-full"
						src="../assets/camera-dark-blue.svg"
						alt="camera-dark-blue"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import type { AppointmentModel } from "../models/event-model";

	const props = defineProps({
		appointment: Object as () => AppointmentModel,
	});

	const appointment = computed(() => props.appointment);
</script>

<style scoped></style>
