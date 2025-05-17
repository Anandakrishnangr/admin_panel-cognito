import React from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks";

export const Signup: React.FC = () => {
    const { formData, handleChange, handleSubmit } = useSignup();
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
        >
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                Signup
            </h2>
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

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
            <p className="text-center text-gray-500 mt-4">Already have an account?</p>
            <Link to="/login" className="text-blue-500 block mt-1 text-center">Login</Link>
        </form>
    </div>
};

