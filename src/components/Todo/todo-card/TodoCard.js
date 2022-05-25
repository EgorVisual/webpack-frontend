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
    let [task, setTask] = useState({title: ''});
    if (userTasks !== auth.tasks) {
        console.log("Get tasks from server!")
        setUserTasks(auth.tasks)
        console.log(userTasks)
        console.log(auth.tasks)
    }
    // if(!auth.tasks) {
    //
    //     console.log("Get tasks from server!")
    // }
    // if(auth.tasks) {
    //          auth.tasks.map(task => setUserTask([...userTask,task]))
    // }

    function onToggleItem(idTask) {
        console.log(idTask + ' - clicked!')
        console.log(userTasks)
        setUserTasks(
            userTasks.map(task => {
                if (task.id === idTask) {
                    task.is_active = !task.is_active
                    auth.updateTaskInfo(task, () => navigate("/main"))
                }
                return task
            }))
    }

    function deleteTask(idTask) {
        console.log(idTask + ' - deleted!')
        setUserTasks(userTasks.filter(task => task.id !== idTask))
        auth.deleteUsersTask(idTask, () => navigate("/main"))
    }

    function addTask() {
        console.log(task.title)
        if (task.title !== '') {
            auth.addNewTask(task.title, () => navigate("/main"))
        } else {
            (async () => {
                try {
                    const permission = await Notification.requestPermission();
                    console.log(permission);
                    const options = {
                        dir: 'rtl',
                        body: "Bad",
                    };
                    const n = new Notification("ww", options);
                    console.log(n);
                    await new Promise(resolve => {
                        setTimeout(() => {
                            n.close();
                            resolve();
                        }, 5000);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
        // auth.getUsersTasks(() => navigate("/main"))
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
                <input type="text" className="search__input" value={task.title}
                       onChange={obj => onChangeValue(obj.target.value)}
                       placeholder="Your task?"/>
            </div>
            <div className="todo__body">
                <List todos={userTasks} onToggleItem={onToggleItem} deleteTask={deleteTask}/>
            </div>
        </div>
    );
};

export default TodoCard