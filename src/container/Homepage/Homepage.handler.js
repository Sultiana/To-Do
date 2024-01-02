import axios from "axios";

const fetchTask = async (page) => {
  try {
    return await axios.get(`/api/tasks?page=${page}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch tasks");
  }
};

export default {
  fetchTask,
};
