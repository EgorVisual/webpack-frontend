import React from 'react';
import TodoItem from "../todo-item/TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        background: 'yellow',
    }
}
const TodoList = ({todos, onToggleItem}) => {
    return (
        <ul className={'menu__counter'}>
            {todos.map(todo => <TodoItem id={todo.id}
                                         title={todo.title}
                                         isActive={todo.isActive}
                                         onChange={() => onToggleItem(todo.id)}
            />)}
        </ul>
    );
};

export default TodoList