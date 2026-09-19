import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg";

const App = () => {
  const duyNguyen = "Duy Nguyen";
  const age = 25;
  const data = {
    address: "Viet Nam",
    City: "Ho Chi Minh",
  };
  return (
    <div className="todo-container">
      <div className="todo-title"> ToDo list</div>
      <TodoNew />
      <TodoData name={duyNguyen} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo}></img>
      </div>
    </div>
  );
};

export default App;
