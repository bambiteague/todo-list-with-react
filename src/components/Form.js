import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //would want to use a package to handle the id setting instead on Math in an up and running application!!
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => 
          setInputText(e.target.value)
        }
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
