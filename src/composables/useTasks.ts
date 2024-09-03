import { onMounted } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import { Task } from "@/services/taskService";

export function useTasks() {
  const anyStore = useTaskStore();
  const { tasks, getTasks, removeTask } = anyStore;

  const toggleComplete = (id: number) => {
    const task = tasks.find((t: Task) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  const deleteTask = async (id: number) => {
    await removeTask(id);
  };

  onMounted(async () => {
    await getTasks();
  });

  return {
    toggleComplete,
    deleteTask,
  };
}
