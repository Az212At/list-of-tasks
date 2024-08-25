<script setup lang="ts">
import { Task } from "@/services/taskService";

const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
});

const emit = defineEmits(["toggleComplete", "deleteTask"]);

const toggleComplete = () => {
  emit("toggleComplete", props.task.id);
};

const deleteTask = () => {
  emit("deleteTask", props.task.id);
};
</script>

<template>
  <div class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleComplete" />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button type="button" @click="deleteTask">Удалить</button>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    flex-grow: 1;
    margin-left: 10px;

    &.completed {
      text-decoration: line-through;
      color: #888;
    }
  }

  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #c0392b;
  }
}
</style>
