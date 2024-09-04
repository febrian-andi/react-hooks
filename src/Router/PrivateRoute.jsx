import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
