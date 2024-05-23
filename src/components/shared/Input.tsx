import { ChangeEvent, FC } from "react";

interface InputProps {
    type: "text" | "number" | "email" | "password" | "date" | "button";
    label?: string;
    value: string | number;
    name?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    className,
    onChange,
}) => {
    const buttonStyle = type === "button" ? "cursor-pointer" : "";

    return (
        <div className="flex flex-col">
            {label && (
                <label className="block mb-2 text-lg font-semibold text-[#344054]" htmlFor={label}>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                className={`min-w-64 px-3 py-2 text-base text-[#344054] bg-white border border-[#d0d5dd] shadow-sm rounded-lg placeholder-[#667085] ${buttonStyle} ${className}`}
            />
            {error && (
                <p className="mt-1 ml-3 text-sm font-normal text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
