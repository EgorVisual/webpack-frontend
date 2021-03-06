import React from 'react';
import '../../../static/styles/todo.scss'

const TodoMenu = () => {
    return (
        <div className="todo__menu menu">
            <div className="menu__filter menu-filter">
                <button className="menu-filter__button menu-button filter-all" >All</button>
                <button className="menu-filter__button menu-button filter-active">Active</button>
                <button className="menu-filter__button menu-button filter-completed">Completed</button>
            </div>
        </div>
    );
};

export default TodoMenu