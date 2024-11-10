<script setup lang="ts">
	import Todo from '@enteties/Todo/Todo.vue';
	// import Cheeckbox from './services/TodoCheck.vue';
	import type { Todos } from '@shared/TodoStore/todoStore';
	import TodoCheck from '@features/TodoCheckbox/TodoCheck.vue';

	defineProps<{
		todos: Todos;
	}>();
</script>

<template>
	<TransitionGroup name="todo">
		<div
			v-for="(todo, todoIndex) in todos"
			:key="todo.id"
			class="todo-item">
			<TodoCheck
				:id="todoIndex"
				:todo="todo" />
			<Todo
				:todos="todos"
				:todo="todo"
				:todoIndex="todoIndex" />
		</div>
	</TransitionGroup>
</template>

<style scoped>
	/* Анимации для встроенного компонента TransitionGroup */
	.todo-enter-active {
		transition: opacity 0.4s ease, transform 0.4s ease;
	}

	/* Анимация при удалении */
	.todo-leave-active {
		transition: opacity 0.3s ease, transform 0.3s ease;
	}
	.todo-enter-from,
	.todo-leave-to {
		opacity: 0; /* Конечное состояние при уходе */
		transition: opacity 0.4s ease; /* Элемент испаряется */
	}

	.todo-item {
		flex: 0 1 100%;

		height: auto;
		margin: 10px;
		border: 2px solid var(--primary-color);
		border-radius: 40px;
		box-sizing: border-box; /* Учитываем отступы и границы в ширине */
		padding: 20px;
		word-wrap: break-word;
		overflow-wrap: break-word;
		justify-content: space-between;
		text-align: center;
		display: flex;
		/* transition: transform 0.5s ease, opacity 0.5s ease; */
	}
</style>
