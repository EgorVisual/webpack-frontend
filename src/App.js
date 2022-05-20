import React, {useEffect, useState} from 'react'
import TodoList from "./components/Todo/todo-list/TodoList";
import {Route, BrowserRouter as Router, Link, Routes, NavLink} from "react-router-dom";
import Main from "./Pages/Main";
import Configuration from "./Pages/Configuration";
import TodoMenu from "./components/Todo/todo-menu/TodoMenu";
import TodoCard from "./components/Todo/todo-card/TodoCard";
import TodoMain from "./components/Todo/todo-main/TodoMain";
import ConfigurationMain from "./components/Configuration/config-main/ConfigurationMain";

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: "Сходить за хлебом!", isActive: true},
        {id: 2, title: "Buy some milk!", isActive: true},
        {id: 3, title: "Call my father!", isActive: true}
    ])

    // const todos = [
    //     {id: 1, title: "Сходить за хлебом!", isActive: false},
    //     {id: 2, title: "Buy some milk!", isActive: true},
    //     {id: 3, title: "Call my father!", isActive: true}
    // ]

    function onToggleItem(id) {
        console.log(id + '- was clicked!')
        console.log(todos)
        setTodos(todos.map(todo => {
            if (todo.id === id)
                todo.isActive = !todo.isActive;
            return todo;
        }))
    }



    function getAuthorizationPage() {
        window.location.href = '../../../webpack-frontend/dist/auth.html'
    }
    return (
        <>
            <div className="todo__app">
                <Router>
                    <div>
                        <span><button className="todo__app__exit" onClick={getAuthorizationPage}>Exit</button></span>
                        <span><Link className="todo__app__exit" to="/main">Main</Link></span>
                        <span><Link className="todo__app__exit" to="/config">Configuration</Link></span>
                    </div>
                    <Routes>
                        <Route exact path="/main" element={<TodoMain/>}/>
                        <Route exact path="/config" element={<ConfigurationMain/>}/>
                    </Routes>
                </Router>
                <TodoList todos={todos}
                          onToggleItem={onToggleItem}/>
            </div>
        </>
    );
};