<script setup lang="ts">
import { useTasks } from "@/composables/useTasks";
import TaskItem from "@/components/TaskItem.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const { toggleComplete, deleteTask } = useTasks();

const anyStore = useTaskStore();

const tasks = computed(() => anyStore.tasks);
const loading = computed(() => anyStore.loading);
const error = computed(() => anyStore.error);
</script>

<template>
  <div class="task-list">
    <h2>Задачи</h2>
    <LoadingSpinner v-if="loading" />
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!loading && !error && tasks.length === 0" class="no-tasks">
      Нет доступных задач.
    </div>
    <ul v-if="!loading && !error && tasks.length > 0">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <TaskItem
          :task="task"
          @toggleComplete="toggleComplete"
          @deleteTask="deleteTask"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.task-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.error {
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
}

.no-tasks {
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
}

.task-item {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}
</style>
