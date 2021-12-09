// React Router
import { Routes, Route, NavLink } from "react-router-dom";

// Context
import useTheme from "../../context/useTheme";

// Components
import SingleTodo from "./SingleTodo";
import SingleTodo2 from "./SingleTodo2";

const Todos = ({ tasksArray, setTasksArray }) => {
  const { backgroundColor, textColor, optionsClass } = useTheme();
  const tasksLeft = tasksArray.filter(
    (item) => item.isCompleted === false
  ).length;

  const allTasks = tasksArray?.map((item, index) => (
    <SingleTodo
      key={index}
      title={item.title}
      isCompleted={item.isCompleted}
      index={index}
      tasksArray={tasksArray}
      setTasksArray={setTasksArray}
    />
  ));

  const incompleteTasks = tasksArray
    ?.filter((item) => item.isCompleted === false)
    .map((item, index) => <SingleTodo2 key={index} title={item.title} />);

  const completedTasks = tasksArray
    ?.filter((item) => item.isCompleted === true)
    .map((item, index) => <SingleTodo2 key={index} title={item.title} />);

  const handleClearCompletedTasks = () => {
    setTasksArray(tasksArray.filter((item) => item.isCompleted !== true));
  };

  return (
    <div className="todos" style={{ backgroundColor: backgroundColor }}>
      <div className="tasks-container">
        {tasksArray.length > 0 ? (
          <Routes>
            <Route path="/" element={allTasks} />
            <Route path="/incomplete" element={incompleteTasks} />
            <Route path="/completed" element={completedTasks} />
          </Routes>
        ) : (
          <div className="message-container" style={{ color: textColor }}>
            <p>So empty. Use the input above to add some tasks.</p>
          </div>
        )}
      </div>
      <div className={optionsClass}>
        <p className="incomplete-tasks">{tasksLeft} Items left</p>
        <div className="filter">
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "activeLink" : "link")}
          >
            <p>All</p>
          </NavLink>
          <NavLink
            to="/incomplete"
            className={(navData) => (navData.isActive ? "activeLink" : "link")}
          >
            <p>Active</p>
          </NavLink>
          <NavLink
            to="/completed"
            className={(navData) => (navData.isActive ? "activeLink" : "link")}
          >
            <p>Completed</p>
          </NavLink>
        </div>
        <p className="clear-completed" onClick={handleClearCompletedTasks}>
          Clear completed
        </p>
      </div>
    </div>
  );
};

export default Todos;
