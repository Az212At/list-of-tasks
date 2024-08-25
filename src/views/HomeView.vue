<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
</script>

<template>
  <MainLayout />
  <h1>Панель отслеживания задач</h1>
  <div class="home-content">
    <TaskForm />
    <TaskList />
  </div>
</template>

<style scoped lang="scss">
.home-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.task-form,
.task-list {
  margin-bottom: 2rem;
}
</style>
