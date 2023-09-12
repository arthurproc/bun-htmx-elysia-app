import { getTodos } from "../services/todo"
import Button from "./form-elements/button";

export default function TodoList() {
  const todos = getTodos();
  
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ul id="todo-ul-list">
        {todos.map((todo) => (
          <li>
            <p>{todo.text}</p>
            <p>{todo.done ? 'Finalizada' : 'Não finalizada'}</p>
          </li>
        ))}
      </ul>
      <Button hx-get="/todo/add" hx-swap="outerHTML">
        Adicionar tarefa
      </Button>
    </div>
  );
}