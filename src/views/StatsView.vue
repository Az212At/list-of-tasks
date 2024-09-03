<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const taskStore = useTaskStore();

const totalTasks = computed(() => taskStore.tasks.length);
const completedTasks = computed(
  () => taskStore.tasks.filter((task) => task.completed).length
);
const incompleteTasks = computed(() => totalTasks.value - completedTasks.value);
</script>

<template>
  <div class="stats-content">
    <h2>Статистика</h2>
    <div class="stats">
      <div class="stat-item">
        <h3>Всего задач:</h3>
        <p>{{ totalTasks }}</p>
      </div>
      <div class="stat-item">
        <h3>Выполненные задачи:</h3>
        <p>{{ completedTasks }}</p>
      </div>
      <div class="stat-item">
        <h3>Незавершенные задачи:</h3>
        <p>{{ incompleteTasks }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.stat-item {
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 0.5rem;
  flex: 1;
  max-width: 250px;
}

.stat-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #555;
}

.stat-item p {
  font-size: 1.5rem;
  font-weight: bold;
}

.completed {
  background: #e0ffe0;
}

.incomplete {
  background: #ffe0e0;
}
</style>
