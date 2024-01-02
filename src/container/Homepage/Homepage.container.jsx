import { useEffect, useState } from "react";
import TaskItem from "../../components/TaskItem/TaskItem.component";

import handlers from "./Homepage.handler";

const { fetchTask } = handlers;

import style from "./Homepage.module.css";

const Homepage = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fecthData, setFetchData] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getTask = async (page) => {
    const respone = await fetchTask(page);
    setTasks(respone.data.content);
    setTotalPage(respone.data.totalPages);
    setPage(respone.data.number + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    getTask(page);
  }, [fecthData, page]);

  if (isLoading) {
    return (
      <div className={style.taskWrapper}>
        <h1>Loading....</h1>
      </div>
    );
  }

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === "all") {
      return true;
    } else if (statusFilter === "finished") {
      return task.isDone === true;
    } else if (statusFilter === "unfinished") {
      return task.isDone === false;
    }
    return true;
  });

  const handlePrevious = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const handleNext = () => {
    if (page === totalPage) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div className={style.taskWrapper}>
      <div className={style.filtering}>
        <label htmlFor="statusFilter">
          Filter by Status:
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="finished">Finished</option>
            <option value="unfinished">Unfinished</option>
          </select>
        </label>
      </div>
      {filteredTasks.length ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} data={task} setFetchData={setFetchData} />
        ))
      ) : (
        <h1>No tasks available based on selected filter</h1>
      )}

      <div className={style.paginate}>
        <button onClick={() => handlePrevious()} disabled={page === 1}>
          Prev
        </button>
        <p>{page}</p>
        <button onClick={() => handleNext()} disabled={page === totalPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
