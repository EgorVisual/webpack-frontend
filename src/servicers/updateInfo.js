import UserService from "./userService";

const updateUser = {
    updateInfo(userId,setUser, userInfo, callback) {
        const service = new UserService();
        (async () => {
            const user = await service.updateUserInfo(userId, userInfo);
            setUser(user)
            console.log(userInfo)
            console.log(user)
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default updateUser;