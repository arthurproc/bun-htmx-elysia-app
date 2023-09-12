import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import TodoForm from './components/todo-form'
import { Todo, addTodo } from './services/todo';
import TodoList from './components/todo-list';

new Elysia()
    .use(html())
    .get('/', () => (
      <html lang="en">
        <head>
          <title>Hello World</title>
          <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className="bg-gray-800 text-white container">
          <h1 className="text-3xl font-bold underline">
            Minhas tarefas
          </h1>
          <TodoList />
        </body>
      </html>
    ))
    .get('/todo/add', () => (
      <TodoForm />
    ))
    .get('/todo', () => (
      <TodoList />
    ))
    .post('/todo', ({ body }) => {
      const newTodo: Todo = {
        text: body?.text,
        done: body?.completed === 'on',
      };

      const addedTodo = addTodo(newTodo);

      return (
        <li>
          <p>{addedTodo.text}</p>
          <p>{addedTodo.done ? 'Finalizada' : 'Não finalizada'}</p>
        </li>
      );
    },
    {
      body: t.Object({
        text: t.String(),
        completed: t.Optional(t.String()),
      })
    })
    .listen(8080)