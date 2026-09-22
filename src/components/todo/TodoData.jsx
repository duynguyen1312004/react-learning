const TodoData = (props) => {
  //props la bien object
  const { todoList } = props;
  console.log("check props = ", todoList);

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("check map", item, index);
        return (
          <div className={`todo-item ${index}`} key={index}>
            <div>{item.name}</div>
            <button style={{ cursor: "pointer" }}>Delete</button>
          </div>
        );
      })}

      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};
export default TodoData;
