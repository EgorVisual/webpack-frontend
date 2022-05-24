import React, {useState} from 'react';
import TodoMenu from "../todo-menu/TodoMenu";
import '../../../static/styles/todo.scss'
import useAuth from "../../../hooks/auth";
import {useNavigate} from "react-router-dom";
import List from "../todo-list/List";

const TodoCard = () => {
    let auth = useAuth();
    let navigate = useNavigate();
    let [userTasks, setUserTasks] = useState(null);
    let [task, setTask] = useState({title:''} );
    // if (!auth.tasks) {
    //     (async () => {
    //         console.log('Request to backend!');
    //         const tasks = await auth.getUsersTasks(auth.user.username, () => navigate("/main"))
    //     })()
    // }
    if (!userTasks) {
        // setUserTask(previousState => {previousState = []})
        // auth.tasks.map(task => setUserTask([...userTask, task]))
        setUserTasks(auth.tasks)
        console.log("Get tasks from server!")
    }
    // if(!auth.tasks) {
    //
    //     console.log("Get tasks from server!")
    // }
    // if(auth.tasks) {
    //          auth.tasks.map(task => setUserTask([...userTask,task]))
    // }
    console.log(userTasks)

    function onToggleItem(idTask) {
        console.log(idTask + ' - clicked!')
        setUserTasks(
            userTasks.map(task => {
                if (task.id === idTask) {
                    task.is_active = !task.is_active
                }
                return task
            }))
    }

    function deleteTask(idTask) {
        console.log(idTask + ' - deleted!')
        setUserTasks(userTasks.filter(task => task.id !== idTask))
        auth.deleteUsersTask(idTask, () => navigate("/main"))
    }

    function addTask(titleTask) {
        console.log(titleTask + ' - added!')
        setUserTasks(userTasks.filter(task => task.id !== idTask))
        auth.deleteUsersTask(idTask, () => navigate("/main"))
    }

    function onChangeValue(inputValue) {
        setTask(previousState => {
            previousState['title'] = inputValue;
            return {...previousState}
        })
    }

    return (
        <div className="todo__card">
            <TodoMenu/>
            <div className="todo__search search">
                <button className="search__button" onClick={addTask}>▼</button>
                <input type="text" className="search__input" value={task.title} onChange={obj => onChangeValue(obj.target.value)}
                       placeholder="Your task?"/>
            </div>
            <div className="todo__body">
                <List todos={userTasks} onToggleItem={onToggleItem} deleteTask={deleteTask}/>
            </div>
        </div>
    );
};

export default TodoCard