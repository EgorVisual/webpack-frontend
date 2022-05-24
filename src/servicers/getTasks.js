import UserService from "./userService";

const getTasks = {
    getUsersTasks(setTasks, userId, callback) {
        const service = new UserService();
        (async () => {
            const tasks = await service.getList(userId);
            if (tasks) {
                setTasks(tasks)
            }
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default getTasks;