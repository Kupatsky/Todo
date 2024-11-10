<template>
	<Checkbox
		v-model="props.todo.checked"
		:binary="true"
		class="checkbox" />
</template>

<script setup lang="ts">
	import type { Todo } from '@shared/TodoStore/todoStore';

	const props = defineProps<{
		id: number;
		todo: Todo;
	}>();
</script>

<style scoped></style>
