import { v4 as uuid } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import GlobalState from "./components/GlobalStateProvider";
import { useContext } from "react";

function App() {
  const { todos } = useContext(GlobalState);

  const checkTodo = (id) => {
    GlobalState.set(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const addTodo = (title) => {
    const todo = {
      id: uuid(),
      title: title,
      isCompleted: false,
    };

    GlobalState.set([...todos, todo]);
  };

  const deleteTodo = (id) => {
    GlobalState.set(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
