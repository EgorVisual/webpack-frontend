import React from 'react';
import '../../../static/styles/todo.scss'

const TodoItem = ({id, title, isActive, onChange, deleteTask}) => {
    const classNames = ['todo__item todo-item']
    if (!isActive)
        classNames.push('todo__item_done')
    return (
        <li>
            <span><input className={'todo-item__checkbox'}
                         type="checkbox"
                         onChange={onChange}
            />
            </span>
            <span className={'todo-item__text'}>{title}</span>
            <button className={'todo-item__delete'} onClick={deleteTask}> *</button>
        </li>
    );
};

export default TodoItem