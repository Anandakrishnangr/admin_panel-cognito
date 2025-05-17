import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline";
}

export const Button = memo(({
    variant = "primary",
    className = "",
    ...rest
}: ButtonProps) => {
    const baseStyles = "px-4 py-2 rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-500"
    };

    return (
        <button
            {...rest}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        />
    );
})