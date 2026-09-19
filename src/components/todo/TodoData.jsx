const TodoData = (props) => {
  //props la bien object
  const { name } = props;
  console.log("check props = ", props);
  return (
    <div className="todo-data">
      <div> My name is {name} </div>
      <div> Learning React </div>
    </div>
  );
};
export default TodoData;
