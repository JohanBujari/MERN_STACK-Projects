import React from "react";

const Todo = ({i,todo,handleToggleCompleted,handleDelete}) => {
    const todoClasses = ["bold", "italic"];
        if(todo.completed){
          todoClasses.push("line-through");
        }
        return (
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => {
                handleToggleCompleted(i);
              }}
            />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button
              onClick={(e) => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
}

export default Todo;