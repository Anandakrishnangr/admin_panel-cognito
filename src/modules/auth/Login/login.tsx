import React from "react";
import { useLogin } from "./hooks";
import { Button, Input, Loader } from "../../../components";
import Link from "../../../components/ui/Link/Link";

const Login: React.FC = () => {
  const { handleChange, handleSubmit, formData, isPending } = useLogin();
  return <div className="flex items-center justify-center min-h-screen bg-gray-100">

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h2>

      <div className="mb-4">
        <Input
          autoComplete="on"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <Input
          autoComplete="on"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full "
      >
        Login
      </Button>
      <p>new user? <Link to="/signup">signup</Link></p>
    </form>
    {isPending && <Loader />}
  </div>
};

export default Login;