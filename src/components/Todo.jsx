import React from 'react';

function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        // console.log(todo.text);
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        
    }
    return (
        <div className='todo'>
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;