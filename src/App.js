import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  //useState pass 'setInputText' down to Form.jsx
  //state for Form
  const [inputText, setInputText] = useState("");

  //state for Todolist
  const [todos, setTodos] = useState([]);

  //state for filter
  const [status, setStatus] = useState("all");
  const [fiteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() => {
    console.log("useEffect called!!!");
    filterHandler();
  }, [todos, status]);

  //function filter
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>tharod's to-do</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={fiteredTodos}
      />
    </div>
  );
}

export default App;
