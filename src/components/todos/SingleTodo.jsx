// Context
import useTheme from "../../context/useTheme";

// Icons
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const SingleTodo = ({
  title,
  isCompleted,
  index,
  tasksArray,
  setTasksArray,
}) => {
  const { singleTaskClass } = useTheme();

  const handleUpdateTask = () => {
    const updatedTasks = [...tasksArray];
    updatedTasks[index].isCompleted = !isCompleted;
    setTasksArray(updatedTasks);
  };

  const handleDeleteTask = () => {
    setTasksArray(tasksArray.filter((item) => item.title !== title));
  };

  return (
    <div className={singleTaskClass}>
      <div className="completed-container">
        {isCompleted ? (
          <div className="complete">
            <AiOutlineCheck onClick={handleUpdateTask} />
          </div>
        ) : (
          <div className="incomplete" onClick={handleUpdateTask}></div>
        )}
      </div>
      <div className="title-container">
        <p>{title}</p>
      </div>
      <div className="remove-container">
        <AiOutlineClose onClick={handleDeleteTask} />
      </div>
    </div>
  );
};

export default SingleTodo;
