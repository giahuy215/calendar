<template>
	<div class="flex lg:flex-row flex-col lg:divide-x divide-gray-200 divide-y">
		<div class="lg:w-2/3 w-full p-5">
			<slot name="calendar"></slot>
		</div>
		<div class="lg:w-1/3 w-full p-5">
			<slot name="event"></slot>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
