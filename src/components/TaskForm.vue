<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const newTaskTitle = ref("");
const taskStore = useTaskStore();
const loading = ref(false);
const error = ref<string | null>(null);

const addNewTask = async () => {
  if (newTaskTitle.value.trim() !== "") {
    loading.value = true;
    try {
      await taskStore.addTask({
        id: Date.now(),
        title: newTaskTitle.value,
        completed: false,
      });
      newTaskTitle.value = "";
      error.value = null;
    } catch (err) {
      error.value =
        "Ошибка при добавлении задачи. Пожалуйста, попробуйте еще раз.";
    } finally {
      loading.value = false;
    }
  } else {
    error.value = "Название задачи не может быть пустым.";
  }
};
</script>

<template>
  <form class="task-form" @submit.prevent="addNewTask">
    <input
      v-model="newTaskTitle"
      type="text"
      placeholder="Введите название задачи"
      aria-label="Task title"
      :disabled="loading"
      class="task-input"
    />
    <button type="submit" :disabled="loading" class="task-button">
      {{ loading ? "Добавление..." : "Добавить задачу" }}
    </button>
    <p v-show="error" class="error-message">{{ error }}</p>
  </form>
</template>

<style lang="scss" scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.task-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

.task-button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.task-button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.task-button:hover:not(:disabled) {
  background-color: #218838;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
}
</style>
