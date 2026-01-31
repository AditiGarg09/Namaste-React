import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="m-4 p-4">
      <h2>Oopssss!!!!!</h2>
      <h2>Something went Wrong!!!!</h2>
      <h1>
        {error.status} : {error.statusText}
      </h1>
    </div>
  );
};

export default Error;
