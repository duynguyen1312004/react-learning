import { useState } from "react";
const TodoNew = (props) => {
  //useState hook (getter/setter)
  const [valueInput, setValueInput] = useState("Duy");
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)} //lấy giá trị ô input
        value={valueInput}
      ></input>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div> My computer = {valueInput}</div>
    </div>
  );
};
export default TodoNew;
