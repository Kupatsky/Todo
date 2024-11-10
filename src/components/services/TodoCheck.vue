<template>
	<Checkbox
		v-model="props.todo.checked"
		:binary="true"
		class="checkbox" />
</template>

<script setup lang="ts">
	import type { Todo } from '../../storage/todoStore';

	const props = defineProps<{
		id: number;
		todo: Todo;
	}>();
</script>

<style scoped></style>
