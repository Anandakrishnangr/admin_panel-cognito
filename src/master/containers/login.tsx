import React from "react";
import { useLogin } from "../hooks";
import { Link } from "react-router-dom";
import { closeSnackbar } from "../../components";

const Login: React.FC = () => {
  const { handleChange, handleSubmit, formData } = useLogin();
  return <div className="flex items-center justify-center min-h-screen bg-gray-100">
    111
    <button onClick={() => {
      closeSnackbar()
    }} >close</button>
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
      <p>new user? <Link to="/signup">signup</Link></p>
    </form>
  </div>
};

export default Login;