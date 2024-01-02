import axios from "axios";

const addTask = async (data) => {
  return await axios.post("/api/tasks", data, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    }
  });
};

export default {
  addTask,
};
