<script setup lang="ts">
	import type { Ref } from 'vue';
	import { ref } from 'vue';
	import { useTodoStore } from '@shared/TodoStore/todoStore';
	import { inject } from 'vue';

	export type TodoDate = Ref<Date>;
	export type TodoContent = Ref<string | null>;

	const dialogRef = inject('dialogRef');
	const todoDate: Ref<string> = ref('');
	const newTodoDate: TodoDate = ref(new Date());
	const { addTodo } = useTodoStore();
	const newTodoContent: TodoContent = ref('');

	function addNewTodo() {
		if ((newTodoContent.value, newTodoDate.value)) {
			formatDate(todoDate);
			addTodo(newTodoContent.value, todoDate.value);
			newTodoContent.value = null;
			closeDialog();
		}
	}

	function formatDate(todoDate: Ref<string>): void {
		const inputDate = new Date(newTodoDate.value);
		const todoMonth = String(inputDate.getMonth() + 1);
		const todoOfDate = String(inputDate.getDate()).padStart(2, '0');

		todoDate.value = `${todoOfDate}.${todoMonth}`;
	}

	const closeDialog = () => {
		dialogRef.value.close();
	};
</script>

<template>
	<ConfirmDialog id="confirm" />
	<div class="inputTodo">
		<Calendar
			class="inputDateTodo"
			v-model="newTodoDate"
			showIcon
			iconDisplay="input">
			<template>
				<InputIcon class="pi pi-calendar cursor pointer" />
			</template>
		</Calendar>
		<FloatLabel>
			<InputText
				id="todoInput"
				type="text"
				v-model="newTodoContent"
				class="input_Todo"
				@keyup.enter="addNewTodo" />
			<label for="todoInput">Что вы хотите сделать?</label>
		</FloatLabel>
		<ButtonGroup>
			<Button
				label="Сохранить"
				icon="pi pi-check"
				@click="addNewTodo" />
			<Button
				style="width: 47%"
				label="Отмена"
				@click="closeDialog" />
		</ButtonGroup>
	</div>
</template>

<style scoped>
	.inputTodo {
		display: flex;
		align-items: right;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
		z-index: 1000;
	}

	.input_Todo {
		flex: 1;
		min-width: 0;
		width: 100%;
	}

	.inputDateTodo {
		flex: 1;
		min-width: 0;
		width: 100%;
	}
</style>
