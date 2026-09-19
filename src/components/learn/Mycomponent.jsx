import "./style.css";
//componet = html + css + js
const MyComponent = () => {
  const name = {
    name: "Zu Thư",
    age: 20,
    address: "Hà Nội",
  };
  return (
    //JSON.stringify(name)//biến 1 biến object thành string
    <>
      <div> {JSON.stringify(name)} và những người bạn </div>
      <div> {console.log("đây là html")}</div>
      <div className="child" style={{ borderRadius: "5px" }}>
        Zu Thư
      </div>
    </>
  );
};

export { MyComponent };
