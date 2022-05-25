import React from 'react';
import '../../../static/styles/todo.scss'

const Item = ({id, title, description, isActive, onChange, deleteTask}) => {
    // if (!isActive)
    //     classNames.push('todo__item_done')
    return (
        <div>
            <div className={"todo__item todo-item"}>
            <span><input className={"todo-item__checkbox"}
                         type="checkbox"
                         onChange={onChange}
                         checked={isActive}

            />
            </span>
                <span className={"todo-item__text"}>{title}</span>
                <button className={"todo-item__delete"} onClick={deleteTask}> *</button>
            </div>
            <div className={"todo-item__description description"}>
                <p className={'description__text'}>
                    {description}
                    {/*<textarea name="description">{description}</textarea>*/}
                </p>
            </div>
        </div>
    );
};

export default Item