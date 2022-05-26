import React from 'react';
import Item from "../todo-item/TodoItem";

const List = ({todos,onChangeItem, onToggleItem, deleteTask}) => {
    return (
        <div>
            {todos.map(todo => <Item id={todo.id}
                                     title={todo.title}
                                     description={todo.description}
                                     status={todo.status_task}
                                     onToggleItem={() => onToggleItem(todo.id)}
                                     onChangeItem={onChangeItem}
                                     deleteTask = {() => deleteTask(todo.id)}
            />)}
        </div>
    );
};

export default List