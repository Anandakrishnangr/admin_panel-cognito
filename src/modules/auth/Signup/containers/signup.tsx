import React from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks";
import { Button, Input } from "../../../../components";

export const Signup: React.FC = () => {
    const { formData, handleChange, handleSubmit } = useSignup();

    const renderInput = (type: string, name: 'phone' | 'email' | 'password' | 'name', placeholder: string) => (
        <div className="mb-4">
            <Input
                autoComplete="on"
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
            />
        </div>
    );

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                    Signup
                </h2>
                {renderInput("text", "name", "Name")}
                {renderInput("number", "phone", "Phone Number")}
                {renderInput("email", "email", "Email Address")}
                {renderInput("password", "password", "Password")}
                <Button type="submit" className="w-100">
                    Signup
                </Button>
                <p className="text-center text-gray-500 mt-4">Already have an account?</p>
                <Link to="/" className="text-blue-500 block mt-1 text-center">Login</Link>
            </form>
        </div>
    );
};
