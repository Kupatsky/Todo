<script setup lang="ts">
	import TodoList from '@enteties/TodoList/TodoList.vue';
	// import InputPanel from '@features/InputNewTodo/InputPanel.vue';
	import TodoInput from '@/features/TemplateInputTodo/TodoInput.vue';
	import Toast from 'primevue/toast';
	import { useToast } from 'primevue/usetoast';
	import { ref, watch } from 'vue';
	import { useTodoStore } from '@shared/TodoStore/todoStore';
	import { usePrimeVue } from 'primevue/config';
	import { useDialog } from 'primevue/usedialog';

	const PrimeVue = usePrimeVue();
	const toast = useToast();
	const { todos } = useTodoStore();
	const dialog = useDialog();

	const themeCheck = ref(false);

	watch(themeCheck, (themeCheck) => {
		if (themeCheck) {
			PrimeVue.changeTheme(
				'aura-dark-green',
				'aura-light-green',
				'theme-link'
			);
			toast.add({
				severity: 'info',
				summary: 'Готово!',
				detail: 'Вы изменили тему на светлую',
				life: 3000,
			});
		} else {
			PrimeVue.changeTheme(
				'aura-light-green',
				'aura-dark-green',
				'theme-link'
			);
			toast.add({
				severity: 'info',
				summary: 'Готово!',
				detail: 'Вы изменили тему на темную',
				life: 3000,
			});
		}
	});

	const showInputTodo = () => {
		dialog.open(TodoInput, {
			props: {
				header: 'Новая задача',
				modal: true,
			},
		});
	};

	const changeTheme = () => {
		themeCheck.value = !!themeCheck.value;
		console.log(themeCheck.value);
	};
</script>

<template>
	<DynamicDialog header="Новая задача" />
	<header>
		<h2 style="flex-grow: 2">Todo List</h2>
		<Button
			class="add-todo-button"
			icon="pi pi-plus"
			aria-label="AddTodo"
			@click="showInputTodo" />
		<ToggleButton
			onLabel="Светлая"
			offLabel="Темная"
			offIcon="pi pi-moon"
			onIcon="pi pi-sun"
			@click="changeTheme"
			v-model="themeCheck" />
		<Toast position="bottom-right" />
	</header>
	<div class="todoColumn">
		<TodoList :todos="todos" />
	</div>
</template>

<style scoped>
	header {
		background-color: var(--surface-section);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 20px;
		z-index: 1000;
	}
	Button {
		z-index: -1000;
	}
	header .title {
		flex: 1;
	}

	.add-todo-button {
		margin-right: 30px;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		width: 30px;
		height: 30px;
	}

	.todoColumn {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 10px;
		max-width: 100%;
		margin-top: 10vh;
		padding-left: 0;
		padding-right: 0;
		flex-grow: 1;
	}

	.input-container {
		flex: 1; /* Занимает доступное пространство в центре */
		display: flex;
		justify-content: center;
	}
	@media (min-width=1px) {
		:root {
			width: auto;
			height: auto;
		}
	}
</style>
