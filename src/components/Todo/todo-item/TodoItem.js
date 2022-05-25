import React from 'react';
import '../../../static/styles/todo.scss'

const Item = ({id, title, description, isActive, onToggleItem, onChangeItem, deleteTask}) => {
    // if (!isActive)
    //     classNames.push('todo__item_done')
    return (
        <div className="todo__form">
            <div className={"todo__item todo-item"}>
            <span><input className={"todo-item__checkbox"}
                         type="checkbox"
                         onChange={onToggleItem}
                         checked={isActive}
            />
            </span>
                <input type="text"
                       className={"todo-item__text"}
                       value={title}
                       placeholder={title}
                       onChange={obj => onChangeItem(id, obj.target.value, 'title')}
                />
                <button className={"todo-item__delete"} onClick={deleteTask}> *</button>
            </div>
            <div className={"todo-item__description description"}>
                <input type="text"
                       className={'description__text'}
                       value={description}
                       placeholder={description}
                       onChange={obj => onChangeItem(id, obj.target.value, 'description')}
                />
            </div>
        </div>
    );
};

export default Item