import UserService from "./userService";

const createUser = {
    createNewUser(setUser, userLogin, userPassword, userFullname, callback) {
        const service = new UserService();
        (async () => {
            const user = await service.createNewUserRequest(userLogin, userPassword, userFullname);
            if (user) {
                setUser(user)
            }
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default createUser;