import UserService from "./userService";

const addTask = {
    addNewTask(userId, taskTitle, callback) {
        const service = new UserService();
        (async () => {
            await service.addTaskRequest(userId, taskTitle);
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default addTask;