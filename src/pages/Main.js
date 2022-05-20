import React from 'react';

const Main = () => {
    return (
        <div className="todo__menu menu">
            <button className="menu__exit menu-button">Exit
            </button>
            <span className="menu__counter">items left</span>
            <div className="menu__filter menu-filter">
                <button className="menu-filter__button menu-button filter-all">All</button>
                <button className="menu-filter__button menu-button filter-active">Active</button>
                <button className="menu-filter__button menu-button filter-completed">Completed</button>
            </div>
            <span className="menu__status">Элемент TODO</span>
            <button className="menu__configuration menu-button">&#9881</button>
        </div>
    );
};

export default Main