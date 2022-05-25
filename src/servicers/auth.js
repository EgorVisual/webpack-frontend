import UserService from "./userService";

const authorization = {
    isAuthenticated: false,
    signIn(setUser, setTasks, userLogin, userPassword, callback) {
        const service = new UserService();
        (async () => {
            const user = await service.checkUserInfo(userLogin, userPassword);
            console.log(user)
            if (user) {
                setUser(user)
                const tasks = await service.getList(user.id);
                setTasks(tasks)
                console.log(tasks)
                authorization.isAuthenticated = true;
            }
        })()
        setTimeout(callback, 100); // fake async
    },
    signOut(callback) {
        console.log(callback)
        authorization.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};
export default authorization;