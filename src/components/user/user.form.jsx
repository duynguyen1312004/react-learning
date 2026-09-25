import { Input, Button } from "antd";
import "./user.form.css";
import { useState } from "react";
import Password from "antd/es/input/Password";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleClickButton = () => {
    console.log("check state: ", { fullName, email, Password, phoneNumber });
  };
  return (
    <div className="user-form">
      <div>
        <span>FullName</span>
        <Input
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          value={fullName}
        />
      </div>
      <div>
        <span>Email</span>
        <Input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </div>
      <div>
        <span>PassWord</span>
        <Input.Password
          onChange={(event) => {
            setPassWord(event.target.value);
          }}
          value={passWord}
        />
      </div>
      <div>
        <span>PhoneNumber</span>
        <Input
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          value={phoneNumber}
        />
      </div>
      <Button type="primary" onClick={handleClickButton}>
        {" "}
        Create User
      </Button>
    </div>
  );
};
export default UserForm;
