import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import style from "./TaskItem.module.css";
import handlers from "./TaskItem.handler";

const { deleteTask, updateTaskStatus } = handlers;

const TaskItem = ({ data, setFetchData }) => {
  const handleStatusChange = async (event) => {
    await toast.promise(updateTaskStatus(data.id, event.target.checked, data), {
      loading: "Update Status...",
      success: (
        <b>Task {data.title + (data.isDone ? " unfinished" : " finished")}</b>
      ),
      error: <b>Cant change status.</b>,
    });
    await setFetchData(Math.random() * 999999);
  };

  const handleDeteleButton = async () => {
    let result = confirm("Are you sure to delete this task");
    if (result) {
      await toast.promise(deleteTask(data.id), {
        loading: "Delete Task...",
        success: <b>Task {data.title} Deleted</b>,
        error: <b>Cant delete task.</b>,
      });
      await setFetchData(Math.random() * 999999);
    }
  };

  return (
    <div className={style.taskWrapper}>
      <Toaster />
      <div className={style.taskDetail}>
        <div className={style.todoItemBox}>
          <input
            type="checkbox"
            name="progress"
            checked={data.isDone}
            id="proggress"
            onClick={(e) => handleStatusChange(e)}
            onChange={() => {}}
          />
        </div>
        <div className={style.todoItemText}>
          <Link
            to={`/tasks/${data.id}`}
            style={data.isDone ? { textDecoration: "line-through" } : {}}
          >
            {data.title}
          </Link>
          <p>{data.deadline}</p>
        </div>
      </div>
      <div className={style.todoAction}>
        <button
          className={style.todoActionItem}
          onClick={() => handleDeteleButton()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
