export type Todo = {
  id?: number;
  text: string;
  done: boolean;
};

const todos: Todo[] = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Buy eggs", done: false },
  { id: 3, text: "Buy bread", done: false },
];

export const getTodos = () => {
  return todos;
};

export const addTodo = (todo: Todo) => {
  const newTodo = { ...todo, id: new Date().getDate() };
  todos.push(newTodo);
  return newTodo;
};

export const toggleTodo = (id: number) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
    return todo;
  }
  return null;
};

export const removeTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};
