import UserService from "./userService";

const changeTask = {
    updateTaskInfo(userId, taskInfo, callback) {
        const service = new UserService();
        (async () => {
            await service.updateTaskInfo(userId, taskInfo);
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default changeTask;