import "./sass/main.css";

// Context
import useTheme from "./context/useTheme";

// Components
import TodoMainComponent from "./components/TodoMainComponent";

function App() {
  const { theme, mainBackgroundColor } = useTheme();

  return (
    <div className="main-container">
      <div className={theme ? "background-dark" : "background-light"}></div>
      <div
        className="body"
        style={{ backgroundColor: mainBackgroundColor }}
      ></div>
      <TodoMainComponent />
    </div>
  );
}

export default App;
