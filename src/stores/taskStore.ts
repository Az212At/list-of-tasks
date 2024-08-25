import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getTasks,
  addTask as apiAddTask,
  deleteTask as apiDeleteTask,
  Task,
} from "@/services/taskService";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchTasks = async () => {
    loading.value = true;
    error.value = null;
    try {
      tasks.value = await getTasks();
    } catch (err) {
      error.value = "Failed to load tasks";
    } finally {
      loading.value = false;
    }
  };

  const addTask = async (task: Task) => {
    try {
      const newTask = await apiAddTask(task);
      tasks.value.push(newTask);
    } catch {
      error.value = "Failed to add task";
    }
  };

  const removeTask = async (id: number) => {
    try {
      await apiDeleteTask(id);
      tasks.value = tasks.value.filter((tasks) => tasks.id !== id);
    } catch {
      error.value = "Failed to add task";
    }
  };

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    removeTask,
  };
});
