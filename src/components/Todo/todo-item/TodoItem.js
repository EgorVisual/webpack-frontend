import React from 'react';
import '../../../static/styles/todo.scss'
import '../../../static/styles/components_main/items.scss'

const Item = ({id, title, description, status_task, onToggleItem, onChangeItem, deleteTask}) => {
    return (
        <div className="todo__form">
            <div className={"todo__item todo-item"}>
                {/*<span><input className={"todo-item__checkbox"}*/}
                {/*             type="text"*/}
                {/*             onChange={onToggleItem}*/}
                {/*             checked={status_task}*/}
                {/*/>*/}
                {/*</span>*/}
                <span className="todo-item__drop-list drop-list">
                    <button className="drop-list__button">Status</button>
                    <div className="drop-list__content">
                        <div className="drop-list__content__field"><button className="drop-list__content__button" onClick={obj => onChangeItem(id, "planned", 'status_task')}>Planned</button></div>
                        <div className="drop-list__content__field"><button className="drop-list__content__button" onClick={obj => onChangeItem(id, "active", 'status_task')}>Active</button></div>
                        <div className="drop-list__content__field"><button className="drop-list__content__button" onClick={obj => onChangeItem(id, "completed", 'status_task')}>Completed</button></div>
                    </div>
                </span>
                <input type="text"
                       className={"todo-item__text"}
                       value={title}
                       placeholder={title}
                       onChange={obj => onChangeItem(id, obj.target.value, 'title')}
                />
                <button className={"todo-item__delete"} onClick={deleteTask}>X</button>
            </div>
            <div className={"todo-item__description description"}>
                <textarea type="text"
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