<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const route = useRoute();
const taskStore = useTaskStore();

const taskId = parseInt(route.params.id as string);
const task = computed(() => taskStore.tasks.find((t) => t.id === taskId));
</script>

<template>
  <h1>Детали задачи</h1>
  <div v-if="task">
    <h2>{{ task.title }}</h2>
    <p>Статус: {{ task.completed ? "Выполнена" : "Не выполнена" }}</p>
    <p>ID: {{ task.id }}</p>
    <RouterLink :to="{ name: 'home' }">Вернуться на главную</RouterLink>
  </div>
  <div v-else>
    <p>Задача не найдена.</p>
  </div>
</template>

<style lang="scss" scoped></style>
