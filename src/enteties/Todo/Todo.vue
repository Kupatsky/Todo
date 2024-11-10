<script setup lang="ts">
	import DeleteButton from '@features/DeleteTodoButton/DeleteButton.vue';
	import { Todo, useTodoStore } from '@shared/TodoStore/todoStore';
	import type { Todos } from '@shared/TodoStore/todoStore';

	const { removeTodo } = useTodoStore();

	defineProps<{
		todo: Todo;
		todoIndex: number;
		todos: Todos;
	}>();
</script>

<template>
	<div
		class="todo_content"
		:class="{ todo_done: todo.checked }">
		<div class="text-container">
			<p>{{ todo.content }}</p>
			<p class="date">
				{{ todo.date }}
			</p>
		</div>
		<DeleteButton
			:todos="todos"
			:removeTodo="removeTodo"
			:todo="todo"
			:todoIndex="todoIndex" />
	</div>
</template>

<style scoped>
	.todo_done {
		color: rgba(128, 128, 128, 0.5);
		text-decoration: line-through;
	}

	.todo_content {
		font-size: 25px;
		font-weight: 200;
		display: flex;
		padding: 20px;
		text-align: left;
		margin: 0 auto;
		width: 100%;
		justify-content: space-between;
	}

	.text-container {
		display: flex;
		flex-direction: column;
	}

	p {
		margin: 0;
	}

	.data img {
		padding-left: 5px;
	}
</style>
