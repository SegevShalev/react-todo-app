import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos,setTodos,filteredTodos }) => {
  //console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}//value from new array
            text={todo.text}//value from new array
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
