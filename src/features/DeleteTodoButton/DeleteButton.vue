<script setup lang="ts">
	import { defineProps } from 'vue';
	import type { Todo, Todos } from '@shared/TodoStore/todoStore';
	import { useConfirm } from 'primevue/useconfirm';
	import { ref } from 'vue';

	// Определяем свойства, которые будут переданы в компонент
	const props = defineProps<{
		todos: Todos;
		todo: Todo;
		removeTodo: (todos: Todos, id: number) => void;
	}>();

	// Функция для удаления задачи
	const removeTodo = () => {
		console.log('Запрос на удаление задачи с ID:', props.todo.id);
		props.removeTodo(props.todos, props.todo.id);
	};

	const isVisible = ref(false);
	const confirm = useConfirm();

	const openDialog = () => {
		confirm.require({
			message: 'Вы уверенны, что хотите удалить сущность?',
			header: 'Подтверждение',
			onShow: () => {
				isVisible.value = true;
			},
			onHide: () => {
				removeTodo();
			},
			accept: () => {
				removeTodo();
			},
			acceptLabel: 'Да',
			rejectLabel: 'Нет',
		});
	};
</script>

<template>
	<ConfirmDialog />
	<Button
		icon="pi pi-times"
		class="add-todo-button"
		rounded
		aria-label="Filter"
		@click="openDialog" />
</template>

<style scoped></style>
