import React from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useContext } from "use-context-selector";
import { AppContext } from "../contexts/app-context";

const Login = () => {
  const { setUsername, username } = useContext(AppContext);
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-teal-50 flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            {formatMessage({ id: "login" })}
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (username) {
                navigate("/chat");
              }
            }}
          >
            <div className="w-full mt-4">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Username"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
