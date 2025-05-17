import { memo } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.RefObject<HTMLInputElement>;
}

export const Input = memo(({
    className = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
    ...rest
}: InputProps) => (
    <input
        {...rest}
        className={className}
    />
))
