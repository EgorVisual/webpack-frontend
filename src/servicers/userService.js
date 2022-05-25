import api from "../api/index";
import authorization from "./auth";

export default class UserService {

    async checkUserInfo(username, password) {
        const user = (await api.get('/api/user/')).data.filter(
            user => ((user.username === username) && (user.password === password)))[0];
        return user
    }

    async updateUserInfo(userId, userInfo) {
        const res = (await api.put('/api/user/' + userId + '/', {
            username: userInfo.username,
            password: userInfo.password,
            fullname: userInfo.fullname,
            role: userInfo.role,
            group: 'none'
        }));
        return res.data
    }

    async createNewUserRequest(userLogin, userPassword, userFullname) {
        const user = (await api.get('/api/user/')).data.filter(user => ((user.username === userLogin) || (user.password === userPassword)))[0];
        if (user) {
            return null
        }
        const res = (await api.post('/api/user/', {
            username: userLogin,
            password: userPassword,
            fullname: userFullname,
            role: 'none',
            group: 'none'
        }));
        return res.data
    }

    async getList(userId) {
        const tasks = (await api.get('/api/task/?id=' + userId));
        console.log('GetList')
        console.log(userId + ' User id')
        console.log(tasks)
        console.log('/GetList')
        return tasks.data

    }

    async deleteItem(taskId) {
        const tasks = (await api.delete('/api/task/' + taskId + '/'));
    }

    async addTaskRequest(userId, taskTitle) {
        const res = (await api.post('/api/task/', {
            title: taskTitle,
            description: 'empty',
            is_active: true,
            user: userId
        }))
        console.log('addTaskRequest')
        console.log(userId)
        console.log(res)
        console.log('/addTaskRequest')
        return
    }

    async updateTaskInfo(userId, taskInfo) {
        console.log('updateTaskInfo')
        console.log(userId)
        console.log(taskInfo)
        console.log('/updateTaskInfo')
        const res = (await api.put('/api/task/' + taskInfo.id + '/', {
            title: taskInfo.title,
            description: taskInfo.description,
            is_active: taskInfo.is_active,
            user: userId
        }));
        return
    }

    // async getUsersTasks(username) {
    //     const tasks = (await api.get('/api/task/'));
    //     return tasks.data
    // }

    async getUserInfo() {
        const id = 1;
        const user = (await api.get('/api/user/')).data.filter(user => user.id === id)[0];
        return user
        // const host = "http://localhost:8000";
        // let activeUserId = 0;
        // $.ajax({
        //     url: host + '/api/user/',
        //     method: 'GET',
        //     data: {},
        //     success: function (users) {
        //         activeUserId = checkUserInfo(users, username, password)
        //         localStorage.setItem('UserId', activeUserId)
        //         if (activeUserId !== 0) {
        //
        //             window.location.href = '../../webpack-frontend/dist/main.html';
        //         }
        //     },
        //     error: function (response, status) {
        //         console.log(response);
        //         console.log(status);
        //     }
        // });
    }

    // checkUserInfo(users, username, password) {
    //     let innerText;
    //     for (let i = 0; i < users.length; i++) {
    //         if (users[i].username == username) {
    //             if (users[i].password == password) {
    //                 innerText = "Успешно.";
    //                 return users[i].id;
    //             } else {
    //                 innerText = "Вы ввели некорректный пароль пользователя.";
    //                 return 0;
    //             }
    //         } else {
    //             innerText = "Вы ввели некорректный логин пользователя.";
    //             return 0;
    //         }
    //     }
    //     return 0
    // }

}