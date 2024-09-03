import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const getTasks = () => {
  return apiClient.get<Task[]>("/todos?_limit=5");
};

export const addTask = async (task: Task) => {
  const response = await apiClient.post("/todos", task);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await apiClient.delete(`/todos/${id}`);
};
