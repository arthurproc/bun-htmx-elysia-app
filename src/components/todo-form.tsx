import Button from "./form-elements/button";
import Input from "./form-elements/input";

export default function TodoForm() {
  return (
    <form hx-post="/todo" hx-target="#todo-ul-list" hx-swap="beforeend">
      <div>
        <label>Nome da tarefa</label>
        <Input type="text" name="text" />
      </div>
      <div class="form-group">
        <label>Finalizada?</label>
        <Input type="checkbox" name="completed" />
      </div>
      <Button>Submit</Button>
    </form>
  );
}