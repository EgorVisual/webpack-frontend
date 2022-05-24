import React from 'react';
import Item from "../todo-item/TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        background: 'yellow',
    }
}
const List = ({todos, onToggleItem, deleteTask}) => {
    return (
        <ul className={'menu__counter'}>
            {todos.map(todo => <Item id={todo.id}
                                     title={todo.title}
                                     isActive={todo.isActive}
                                     onChange={() => onToggleItem(todo.id)}
                                     deleteTask = {() => deleteTask(todo.id)}
            />)}
        </ul>
    );
};

export default List