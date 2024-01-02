import axios from "axios";

const getTaskById = async (taskId) => {
    try {
        const response = await axios.get(`/api/tasks/${taskId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420",
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch task by ID");
    }
};

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

export default {
    getTaskById,
    updateTaskStatus,
};
