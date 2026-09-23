import { useRouteError, NavLink } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <div>
        <nav>
          <NavLink to="/">Back to HomePage</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default ErrorPage;
