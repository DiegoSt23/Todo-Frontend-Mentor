import { useState } from "react";

// React Router
import { BrowserRouter as Router, NavLink } from "react-router-dom";

// Context
import useTheme from "../context/useTheme";

// Components
import Todos from "./todos/Todos";

// Icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";

const ToDoMainComponent = () => {
  const {
    theme,
    changeTheme,
    backgroundColor,
    textColor,
    navBarResponsiveClass,
  } = useTheme();
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const handleChangeTheme = () => changeTheme();

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (task) {
      setTasksArray([{ title: task, isCompleted: false }, ...tasksArray]);
      setTask("");
    }
  };

  return (
    <div className="todo-main-container">
      <section className="header">
        <h1>TODO</h1>
        {theme ? (
          <BsFillSunFill
            onClick={handleChangeTheme}
            className="change-theme-icon"
          />
        ) : (
          <BsFillMoonFill
            onClick={handleChangeTheme}
            className="change-theme-icon"
          />
        )}
      </section>
      <form
        style={{ backgroundColor: backgroundColor }}
        onSubmit={handleCreateTask}
      >
        <input
          value={task}
          type="text"
          placeholder="Create a new todo..."
          style={{ color: textColor }}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <IoAddOutline
          className="add-icon"
          style={{ color: textColor }}
          onClick={handleCreateTask}
        />
      </form>
      <Router>
        <Todos tasksArray={tasksArray} setTasksArray={setTasksArray} />
        <div
          className={navBarResponsiveClass}
          style={{ backgroundColor: backgroundColor }}
        >
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
      </Router>
    </div>
  );
};

export default ToDoMainComponent;
