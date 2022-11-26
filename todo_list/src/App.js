import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(
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
      id: 5,
      title: title,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
  };

  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
