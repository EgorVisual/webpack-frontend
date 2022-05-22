import React from 'react';
import TodoMenu from "../todo-menu/TodoMenu";
import '../../../static/styles/todo.scss'

const TodoCard = () => {

    return (
        <div className="todo__card">
            <div className="todo__search search">
                <button className="search__button">▼</button>
                <input type="text" className="search__input" placeholder="What needs to be done?"/>
            </div>
            <div className="todo__body">
            </div>
            <TodoMenu/>
        </div>
    );
};

export default TodoCard