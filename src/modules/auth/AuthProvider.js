import React from 'react';
import {useState} from 'react'
import authorization from "../../servicers/auth";
import {AuthContext} from "../../context";
import updateUser from "../../servicers/updateInfo";
import createUser from "../../servicers/createUser";
import getTasks from "../../servicers/getTasks";
import deleteTask from "../../servicers/deleteTask";
import addTask from "../../servicers/addTask";
import changeTask from "../../servicers/changeTask";

export default function AuthProvider({children}) {
    let [user, setUser] = useState(null);
    let [tasks, setTasks] = useState(null);

    let signIn = (userLogin, userPassword, callback) => {
        return authorization.signIn(setUser, setTasks, userLogin, userPassword, () => {
            callback();
        });
    };

    let signOut = (callback) => {
        return authorization.signOut(() => {
            setUser(null);
            callback();
        });
    };

    let updateInfo = (userInfo, callback) => {
        return updateUser.updateInfo(user.id, setUser, userInfo, () => {
            callback();
        });
    };

    let createNewUser = (userLogin, userPassword, userFullname, callback) => {
        return createUser.createNewUser(setUser, userLogin,
            userPassword, userFullname, () => {
                callback();
            });
    };

    let getUsersTasks = (callback) => {
        return getTasks.getUsersTasks(setTasks, user.id, () => {
            callback();
        });
    };

    let deleteUsersTask = (taskId, callback) => {
        return deleteTask.deleteUsersTask(setTasks, taskId, user.id, () => {
            callback();
        });
    };

    let addNewTask = (taskTitle, callback) => {
        return addTask.addNewTask(setTasks, user.id, taskTitle, () => {
            callback();
        });
    };

    let updateTaskInfo = (taskInfo, callback) => {
        return changeTask.updateTaskInfo(user.id, taskInfo, () => {
            callback();
        });
    };

    let value = {
        user,
        tasks,
        signIn,
        signOut,
        updateInfo,
        createNewUser,
        updateTaskInfo,
        addNewTask,
        deleteUsersTask,
        getUsersTasks

    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}