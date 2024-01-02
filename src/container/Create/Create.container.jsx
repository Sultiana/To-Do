import styles from "./Create.module.css";
import { useForm } from "react-hook-form";
import handlers from "./Create.handler";
import toast, { Toaster } from "react-hot-toast";

const { addTask } = handlers;

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addTask(data);
      reset();
      toast.success("Success");
    } catch (error) {
      console.log(error);
      toast.error("Failed!");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className={styles.form}>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Title</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "*Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}

          <label>Description</label>
          <textarea
            type="text"
            id="description"
            cols={30}
            rows={4}
            {...register("description", {
              required: "*Description is required",
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}

          <label>Priority</label>
          <select
            id="priority"
            defaultValue=""
            {...register("priority", {
              required: "*Priority is required",
            })}
          >
            <option value="" disabled>
              --Choose One--
            </option>
            <option value="0">Low</option>
            <option value="1">High</option>
          </select>
          {errors.priority && <p>{errors.priority.message}</p>}

          <label>Due To</label>
          <input
            type="date"
            id="dueTo"
            {...register("deadline", { required: "*Due To is required" })}
          />
          {errors.dueTo && <p>{errors.dueTo.message}</p>}

          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  );
};

export default Create;
