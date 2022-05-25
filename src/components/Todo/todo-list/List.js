import React from 'react';
import Item from "../todo-item/TodoItem";

const List = ({todos, onToggleItem, deleteTask}) => {
    return (
        <div>
            {todos.map(todo => <Item id={todo.id}
                                     title={todo.title}
                                     description={todo.description}
                                     isActive={todo.is_active}
                                     onChange={() => onToggleItem(todo.id)}
                                     deleteTask = {() => deleteTask(todo.id)}
            />)}
        </div>
    );
};

export default List