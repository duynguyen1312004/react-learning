const TodoNew = (props) => {
  console.log("check props =", props);
  const { addNewTodo } = props;
  addNewTodo("Duy Nguyen");
  return (
    <div className="todo-new">
      <input type="text"></input>
      <button>Add</button>
    </div>
  );
};
export default TodoNew;
