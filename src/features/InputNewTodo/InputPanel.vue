<script setup lang="ts">
	import type { Ref } from 'vue';
	import { ref } from 'vue';
	import { useTodoStore } from '@shared/TodoStore/todoStore';

	export type TodoDate = Ref<Date>;
	export type TodoContent = Ref<string | null>;

	const todoDate: Ref<string> = ref('');
	const newTodoDate: TodoDate = ref(new Date());
	const { addTodo } = useTodoStore();
	const newTodoContent: TodoContent = ref('');
	const isVisible = ref(false);

	function addNewTodo() {
		if ((newTodoContent.value, newTodoDate.value)) {
			formatDate(todoDate);
			addTodo(newTodoContent.value, todoDate.value);
			newTodoContent.value = null;
			closeModal();
		}
	}

	function formatDate(todoDate: Ref<string>): void {
		const inputDate = new Date(newTodoDate.value);
		const todoMonth = String(inputDate.getMonth() + 1);
		const todoOfDate = String(inputDate.getDate()).padStart(2, '0');

		todoDate.value = `${todoOfDate}.${todoMonth}`;
	}

	const openModal = () => {
		isVisible.value = true;
	};

	const closeModal = () => {
		isVisible.value = false;
	};

	// Экспортируем функции для использования в родительском компоненте
	defineExpose({ openModal });
</script>

<template>
	<Transition name="fade">
		<div
			v-if="isVisible"
			class="modal-overlay"
			@click.self="closeModal">
			<div class="modal-content">
				<Calendar
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
						class="input_panel"
						@keyup.enter="addNewTodo" />
					<label for="todoInput">Что вы хотите сделать?</label>
				</FloatLabel>
				<ButtonGroup>
					<Button
						label="Save"
						icon="pi pi-check"
						@click="addNewTodo" />
					<Button
						label="Close"
						icon="pi pi-times"
						@click="closeModal" />
				</ButtonGroup>
			</div>
		</div>
	</Transition>
</template>

<style scoped>
	/* С помощью встроенного компонента transition добавим анимацию появления инпут-панели */
	.fade-enter-active {
		transition: all 0.2s ease;
	}

	.fade-leave-active {
		transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
	.input-date {
		width: auto;
		height: auto;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: var(--surface-section);
		border-radius: 10px;
		padding: 20px;
		padding-bottom: 30px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
		width: 40vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 40vh;
		gap: 5vh;
		z-index: 1000;
	}
</style>
