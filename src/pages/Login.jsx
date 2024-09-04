import { useState } from "react";
import userData from "../constants/user";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };

    if (
      user.username === userData[0].username &&
      user.password === userData[0].password
    ) {
      sessionStorage.setItem("login", "true");
      navigate("/");
      window.location.reload();
    } else {
      alert("Username atau Password salah");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto my-3">
      <h1 className="text-center text-3xl font-bold">Login</h1>
      <div className="flex justify-center mt-3">
        <p
          className="text-center bg-yellow-400 rounded-3xl p-2 font-semibold dark:text-black"
          style={{ width: "32rem" }}
        >
          Silahkan login dengan username : 'abcde' dan password : '12345'
        </p>
      </div>
      <div className="flex justify-center mt-3">
        <div
          className="border border-black p-3 rounded-3xl dark:border-white"
          style={{ width: "22rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="text"
                className="form-input w-full text-gray-500 px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                id="floatingInput"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label
                htmlFor="floatingInput"
                className="absolute text-gray-500 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Username
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                className="form-input w-full text-gray-500 px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
                id="floatingPassword"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="floatingPassword"
                className="absolute text-gray-500 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
              >
                Password
              </label>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="font-bold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
