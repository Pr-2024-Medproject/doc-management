import { ChangeEvent, FC } from "react";

interface DropDownProps {
    values: string[];
    value?: string;
    defaultValue: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    className?: string;

    label?: string;
    name?: string;
    error?: string;
    disabled?: boolean;
}

const DropDown: FC<DropDownProps> = ({
    values,
    value = undefined,
    defaultValue,
    onChange,
    className = "",
    label,
    error,
    name = "Select",
    disabled,
}) => {
    return (
        <div className={`flex flex-col justify-center ${className}`}>
            {label && (
                <label className="block mb-2 text-lg font-semibold text-[#344054]" htmlFor={label}>
                    {label}
                </label>
            )}
            <select
                name={name}
                className={`px-3 py-2 text-base text-[#344054] bg-white border border-[#d0d5dd] shadow-sm rounded-lg placeholder-[#667085]`}
                onChange={onChange}
                disabled={disabled}
                value={value || ""}
            >
                <option disabled value="">
                    {defaultValue}
                </option>
                {values.map((item, i) => (
                    <option key={item + i} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <p className={`mt-1 ml-3 text-sm font-normal text-red-500`}>{error || "\u00A0"}</p>
        </div>
    );
};

export default DropDown;
