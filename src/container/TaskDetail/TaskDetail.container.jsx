import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./TaskDetail.module.css";
import handlers from "./TaskDetail.handler";
import toast, { Toaster } from "react-hot-toast";

const { getTaskById, updateTaskStatus } = handlers;

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getTaskById(taskId);
        setTask(taskData);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch task");
      }
    };

    fetchTask();
  }, [taskId]);

  if (!task) {
    return <p>Loading...</p>;
  }

  const handleTaskStatus = async (status) => {
    try {
      await updateTaskStatus(taskId, status, task);
      const updatedTask = await getTaskById(taskId);
      setTask(updatedTask);
      toast.success(`Task ${status ? "finished" : "unfinished"}`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update task status");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className={styles.detail}>
        {task ? (
          <>
            <h2>{task.title}</h2>
            <div className={styles.imageAndDesc}>
              <div>
                <p>{task.description}</p>
              </div>
            </div>

            <p>Priority: {task.priority ? "High" : "Low"}</p>
            <button
              onClick={() => handleTaskStatus(!task.isDone)}
              onChange={() => {}}
            >
              {task.isDone ? "Unfinish" : "Finish"}
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default TaskDetail;
