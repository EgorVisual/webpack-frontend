import React from 'react';
import '../../../../styles/todo.scss'

const TodoItem = ({id, title, isActive, onChange}) => {
    const classNames = ['todo__item todo-item']
    if (!isActive)
        classNames.push('todo__item_done')
    return (
        <li className={classNames.join(" ")}>
            <span><input className={'todo-item__checkbox'}
                         type="checkbox"
                         onChange={onChange}
            />
            </span>
            <span className={'todo-item__text'}>{title}</span>
            <button className={'todo-item__delete'}> *</button>
        </li>
    );
};

export default TodoItem