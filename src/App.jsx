import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning" },
    // { id: 2, name: "watching Youtube" },
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="todo-container">
      <div className="todo-title"> ToDo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      {/* <=> if else */}
      {todoList.length != 0 ? (
        <TodoData todoList={todoList} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo}></img>
        </div>
      )}

      {/* {todoList.length != 0 && <TodoData todoList={todoList} />}
      {todoList.length === 0 && (
        <div className="todo-image">
          <img src={reactLogo}></img>
        </div>
      )} */}
    </div>
  );
};

export default App;
