import { ChangeEvent, FC, MouseEvent } from "react";
import { InputType } from "../../types/Input";

interface InputProps {
    type: InputType | "button";
    label?: string;
    value?: string | number;
    name?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    className = "",
    onChange,
    onClick,
}) => {
    const buttonStyle =
        type === "button"
            ? "cursor-pointer hover:bg-gray-200 disabled:opacity-60 disabled:bg-transparent disabled:cursor-not-allowed"
            : "";

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
                onClick={onClick}
                disabled={disabled}
                className={`px-3 py-2 text-base text-[#344054] bg-white border border-[#d0d5dd] shadow-sm rounded-lg placeholder-[#667085] ${buttonStyle} ${className}`}
            />
            <p className={`mt-1 ml-3 text-sm font-normal text-red-500`}>{error || "\u00A0"}</p>
        </div>
    );
};

export default Input;
