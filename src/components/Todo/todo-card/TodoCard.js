import React, {useEffect, useState} from 'react';
import TodoMenu from "../todo-menu/TodoMenu";
import '../../../static/styles/todo.scss'
import useAuth from "../../../hooks/auth";
import {useNavigate} from "react-router-dom";
import List from "../todo-list/List";

const TodoCard = () => {
        let auth = useAuth();
        let navigate = useNavigate();
        let [task, setTask] = useState({title: ''});
        let [userTasks, setUserTasks] = useState(null);
        let [plannedTasks, setPlannedTasks] = useState(null);
        let [activeTasks, setActiveTasks] = useState(null);
        let [completedTasks, setCompletedTasks] = useState(null);

        if (userTasks !== auth.tasks) {
            console.log("Get tasks from server!")
            setUserTasks(auth.tasks)
            updateStatusesTasks(auth.tasks)
        }

        function updateStatusesTasks(allTasks) {
            if(allTasks){
                console.log("updateStatusesTasks")
                setPlannedTasks(allTasks.filter(task => task.status_task === 'planned'))
                setActiveTasks(allTasks.filter(task => task.status_task === 'active'))
                setCompletedTasks(allTasks.filter(task => task.status_task === 'completed'))
                console.log(plannedTasks)
                console.log(activeTasks)
                console.log(completedTasks)
                console.log("updateStatusesTasks/")
            }
        }

        function onToggleItem(idTask) {
            console.log(idTask + ' - clicked!')
            console.log(userTasks)
            // setUserTasks(
            //     userTasks.map(task => {
            //         if (task.id === idTask) {
            //             task.is_active = !task.is_active
            //             auth.updateTaskInfo(task, () => navigate("/main"))
            //         }
            //         return task
            //     }))
            // updateStatusesTasks(userTasks)
        }

        function deleteTask(idTask) {
            console.log(idTask + ' - deleted!')
            setUserTasks(userTasks.filter(task => task.id !== idTask))
            updateStatusesTasks(userTasks)
            auth.deleteUsersTask(idTask, () => navigate("/main"))
        }

        function addTask() {
            console.log(task.title)
            if (task.title !== '' && task.description !== '') {
                auth.addNewTask(task.title, task.description, () => navigate("/main"))
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

        function onSetValue(inputValue, type) {
            setTask(previousState => {
                previousState[type] = inputValue;
                return {...previousState}
            })
        }

        function onChangeItem(idTask, inputValue, type) {
            console.log(idTask + ' - changed!')
            console.log(idTask)
            console.log(inputValue)
            console.log(type)
            setUserTasks(
                userTasks.map(task => {
                    if (task.id === idTask) {
                        task[type] = inputValue
                        auth.updateTaskInfo(task, () => navigate("/main"))
                    }
                    return task
                }))
            updateStatusesTasks(userTasks)
        }


        return (
            <div className={'todo__body'}>
                <div className="todo__search-menu">
                    <div className="todo__enter">
                        <div className="todo__search search">
                            <div>
                                <input type="text" className="search__input_title" value={task.title}
                                       onChange={obj => onSetValue(obj.target.value, 'title')}
                                       placeholder="Your task?"/>
                                <input type="text" className="search__input_description" value={task.description}
                                       onChange={obj => onSetValue(obj.target.value, 'description')}
                                       placeholder="Your description?"/>
                            </div>
                            <button className="search__button" onClick={addTask}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="todo__card">
                    <div className="todo__card_status">
                        <span>Planned</span>
                        <List todos={plannedTasks} onChangeItem={onChangeItem} onToggleItem={onToggleItem}
                              deleteTask={deleteTask}/>
                    </div>
                    <div className="todo__card_status">
                        <span>Active</span>
                        <List todos={activeTasks} onChangeItem={onChangeItem} onToggleItem={onToggleItem}
                              deleteTask={deleteTask}/>
                    </div>
                    <div className="todo__card_status">
                        <span>Completed</span>
                        <List todos={completedTasks} onChangeItem={onChangeItem} onToggleItem={onToggleItem}
                              deleteTask={deleteTask}/>
                    </div>
                </div>
            </div>
        )
            ;
    }
;

export default TodoCard