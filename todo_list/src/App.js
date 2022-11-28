import { v4 as uuid } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useGlobalState } from "./components/GlobalStateProvider";

function App() {
  const { todos } = useGlobalState(window.GlobalState);

  const checkTodo = (id) => {
    window.GlobalState.set({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }),
    });
  };

  const addTodo = (title) => {
    const todo = {
      id: uuid(),
      title: title,
      isCompleted: false,
    };

    window.GlobalState.set({ todos: [...todos, todo] });
  };

  const deleteTodo = (id) => {
    window.GlobalState.set({ todos: todos.filter((todo) => todo.id !== id) });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
