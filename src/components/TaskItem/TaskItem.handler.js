import axios from "axios";

const updateTaskStatus = async (taskId, isDone, data) => {
    try {
        await axios.put(`/api/tasks/${taskId}`, { ...data, isDone }, {
            headers: {
                "ngrok-skip-browser-warning": "69420",
            }
        });
    } catch (error) {
        throw new Error("Failed to update task status");
    }
};

const deleteTask = async (taskId) => {
    try {
        await axios.delete(`/api/tasks/${taskId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420",
            }
        });
    } catch (error) {
        throw new Error("Failed to delete task");
    }
};

export default {
    updateTaskStatus,
    deleteTask
};
