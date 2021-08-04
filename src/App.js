import "./App.css";
import React, { useState,useEffect } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
//hooks
//useStates 
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos]= useState([]);
//useEffect
useEffect(()=>{
  //console.log('heyy')
  filterHandler();
},[todos,status])

//functionalnilita
const filterHandler =() => {
  switch(status){
    case 'completed' :
      setFilteredTodos(todos.filter(todo => todo.completed ===true))
      break;
    case 'uncompleted' :
      setFilteredTodos(todos.filter(todo => todo.completed ===false))
      break;
    default:
      setFilteredTodos(todos);  
      break;
  }
}


  return (
    <div className="App">
      <header>
        <h1>My Todo List ! </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;


//1) didnt manage to arrange div class "selector" to match input type "text" height.
//2) 