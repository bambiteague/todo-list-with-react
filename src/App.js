import React, { useState } from "react";
import "./App.css";

//importing components-->
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]); //in progress with filters portion of the app
  return (
    <div className="App">
      <header>
        <h1>Bambi's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
