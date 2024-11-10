<script setup lang="ts">
	import TodoList from './components/TodoList.vue';
	import InputPanel from './components/services/InputPanel.vue';
	import Toast from 'primevue/toast';
	import { useToast } from 'primevue/usetoast';
	import { ref, watch } from 'vue';
	import { useTodoStore } from './storage/todoStore.ts';
	import { usePrimeVue } from 'primevue/config';

	const toast = useToast();
	const PrimeVue = usePrimeVue();

	const { todos } = useTodoStore();
	// modal выступает в качестве ссылки на инпут-компонент, и здесь же проверка, указывает ли он на компонент либо он равен нулю
	// И присваиваем ему ноль с начала выполнения скрипта, так как в родительский он еще не передался
	const modal = ref<InstanceType<typeof InputPanel> | null>(null);
	const themeCheck = ref(false);

	const showModal = () => {
		if (modal.value) modal.value.openModal();
	};

	watch(
		() => todos,
		(newTodos, oldTodos) => {
			console.log(JSON.parse(JSON.stringify(newTodos)));
			console.log(JSON.parse(JSON.stringify(oldTodos)));
			if (newTodos.length > oldTodos.length) {
				toast.add({
					severity: 'success',
					summary: 'Готово!',
					detail: 'Н12213123',
					life: 3000,
				});
			} else if (newTodos.length < oldTodos.length) {
				toast.add({
					severity: 'success',
					summary: 'Готово!',
					detail: 'Работает!!!',
					life: 3000,
				});
			} else {
				toast.add({
					severity: 'success',
					summary: 'Готово!',
					detail: 'Ну ты и долбаеб',
					life: 3000,
				});
			}
		}
	);

	watch(themeCheck, (themeCheck) => {
		if (themeCheck) {
			PrimeVue.changeTheme(
				'aura-dark-green',
				'aura-light-green',
				'theme-link'
			);
		} else {
			PrimeVue.changeTheme(
				'aura-light-green',
				'aura-dark-green',
				'theme-link'
			);
		}
	});

	const changeTheme = () => {
		themeCheck.value = !!themeCheck.value;
		console.log(themeCheck.value);
	};
</script>

<template>
	<InputPanel ref="modal" />
	<header>
		<h2 style="flex-grow: 2">Todo List</h2>
		<Button
			class="add-todo-button"
			icon="pi pi-plus"
			aria-label="AddTodo"
			@click="showModal" />
		<ToggleButton
			onLabel="Light"
			offLabel="Dark"
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
