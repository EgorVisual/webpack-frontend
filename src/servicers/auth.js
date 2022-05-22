import UserService from "./userService";

const authorization = {
    isAuthenticated: false,
    signIn(setUser, userLogin, userPassword, callback) {
        const service = new UserService();
        (async () => {
            const user = await service.checkUserInfo(userLogin, userPassword);
            console.log(user)
            if (user) {
                setUser(user)
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