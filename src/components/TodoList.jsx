import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import TodoForm from "./TodoForm";
import Track from "./Track";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3210/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("there is a problem is fetching your tasks!", error);
      }
    };
    fetchTodos();
  }, []);

  const addItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

  async function onToggle(id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
    try {
      const todo = updateTodos.find((todo) => todo.id === id);
      await axios.put(`http://localhost:3210/todos/${id}`, todo);
    } catch (error) {
      console.error("There was an error updating the todo item!", error);
    }
  }

  async function onDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));

    try {
      await axios.delete(`http://localhost:3210/todos/${id}`);
    } catch (error) {
      console.error("There was an error deleting the todo item!", error);
    }
  }

  async function onUpdate(id, newText) {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });
    setTodos(updateTodo);
    try {
      const todo = updateTodo.find((todo) => todo.id === id);
      await axios.put(`http://localhost:3210/todos/${id}`, todo);
    } catch (error) {
      console.error("There was an error updating the todo item!", error);
    }
  }

  return (
    <>
      <Track trackTodos={todos}/>
      <TodoForm addItem={addItem} />
      <ul className="list-unstyled">
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
      </ul>
    </>
  );
}

export default TodoList;
