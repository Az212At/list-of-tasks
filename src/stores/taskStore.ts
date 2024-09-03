import { defineStore } from "pinia";
import {
  getTasks,
  addTask as addTaskService,
  deleteTask,
  Task,
} from "@/services/taskService";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
    loading: false as boolean,
    error: null as string | null,
  }),

  actions: {
    getTasks() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        getTasks()
          .then((response) => {
            this.tasks = response.data;
            resolve(response);
          })
          .catch((error) => {
            this.error = error.message;
            reject(error);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },

    async addTask(task: Task) {
      this.loading = true;
      this.error = null;
      try {
        const newTask = await addTaskService(task);
        this.tasks.push(newTask);
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    removeTask(id: number) {
      return new Promise((resolve, reject) => {
        deleteTask(id)
          .then((response) => {
            this.getTasks();
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
