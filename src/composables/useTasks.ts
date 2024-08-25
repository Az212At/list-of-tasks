import { onMounted } from "vue";
import { useTaskStore } from "@/stores/taskStore";

export function useTasks() {
  const { tasks, loading, error, fetchTasks, removeTask } = useTaskStore();

  const toggleComplete = (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  const deleteTask = (id: number) => {
    removeTask(id);
  };

  onMounted(fetchTasks);

  return {
    tasks,
    loading,
    error,
    toggleComplete,
    deleteTask,
  };
}
