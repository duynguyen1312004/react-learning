import "./components/todo/todo.css";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Outlet /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
