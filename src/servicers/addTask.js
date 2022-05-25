import UserService from "./userService";

const addTask = {
    addNewTask(setTasks, userId, taskTitle, callback) {
        const service = new UserService();
        (async () => {
            await service.addTaskRequest(userId, taskTitle);
            const tasks = await service.getList(userId);
            if (tasks) {
                setTasks(tasks)
            }
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default addTask;