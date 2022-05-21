import api from "../api/index";

export default class UserService {

    async getUserInfo() {
        const id = 1;
        const user = (await api.get('/api/user/')).data.filter(user => user.id === id)[0];
        this.checkUserInfo(user,'username','password')
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

    checkUserInfo(users, username, password) {
        let innerText;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                if (users[i].password == password) {
                    innerText = "Успешно.";
                    return users[i].id;
                } else {
                    innerText = "Вы ввели некорректный пароль пользователя.";
                    return 0;
                }
            } else {
                innerText = "Вы ввели некорректный логин пользователя.";
                return 0;
            }
        }
        return 0
    }

}