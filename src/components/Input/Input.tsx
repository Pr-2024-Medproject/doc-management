import { ChangeEvent, FC } from "react";

interface InputProps {
    type: "text" | "number" | "email" | "password" | "date";
    label?: string;
    value: string | number;
    name: string;
    placeholder: string;
    error?: boolean;
    disabled?: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
    return (
        <div className="input-wrapper">
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
                className={`min-w-64 px-3 py-2 text-base font-normal text-[#344054] bg-white border border-[#d0d5dd] shadow-sm rounded-lg placeholder-[#667085] ${className}`}
            />
            {error && (
                <p className="mt-1 ml-3 text-sm font-normal text-red-500">
                    Input filed thow an error!
                </p>
            )}
        </div>
    );
};

export default Input;
