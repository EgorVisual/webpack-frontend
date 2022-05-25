import UserService from "./userService";

const deleteTask = {
    deleteUsersTask(setTasks, taskId, userId, callback) {
        const service = new UserService();
        (async () => {
            await service.deleteItem(taskId);
            const tasks = await service.getList(userId);
            if (tasks) {
                setTasks(tasks)
                console.log(tasks)
            }
        })()
        setTimeout(callback, 100); // fake async
    },
};
export default deleteTask;