import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  //useState pass 'setInputText' down to Form.jsx
  //state for Form
  const [inputText, setInputText] = useState("");

  //state for Todolist
  const [todos, setTodos] = useState([]);

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
      />
      <Todolist />
    </div>
  );
}

export default App;
