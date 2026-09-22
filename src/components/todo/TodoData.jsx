const TodoData = (props) => {
  //props la bien object
  const { todoList, deleteTodo } = props;

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item ${index}`} key={item.id}>
            <div>{item.name}</div>
            <button
              onClick={() => deleteTodo(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}

      {/* <div>{JSON.stringify(props.todoList)}</div> */}
    </div>
  );
};
export default TodoData;
