import React from "react";
import Todo from "./Todo";
function Todolist({ todos, setTodos }) {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todolist;
