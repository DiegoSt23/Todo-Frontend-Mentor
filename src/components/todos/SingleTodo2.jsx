// Context
import useTheme from "../../context/useTheme";

const SingleTodo2 = ({ title }) => {
  const { singleTaskClass } = useTheme();

  return (
    <div className={singleTaskClass}>
      <div className="title-container">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SingleTodo2;
