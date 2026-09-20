import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg";

const App = () => {
  const name = "Duy Nguyen";
  const age = 25;
  const data = {
    address: "Viet Nam",
    City: "Ho Chi Minh",
  };

  const addNewTodo = (name) => {
    alert(`call me for ${name}`);
  };
  return (
    <div className="todo-container">
      <div className="todo-title"> ToDo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo}></img>
      </div>
    </div>
  );
};

export default App;
