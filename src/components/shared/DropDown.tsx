import { ChangeEvent, FC } from "react";

interface DropDownProps {
    values: string[];
    onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}

const DropDown: FC<DropDownProps> = ({ values, onSelect, className = "" }) => {
    return (
        <select
            className={`text-base text-[#344054] bg-white border border-[#d0d5dd] shadow-sm rounded-lg placeholder-[#667085] ${className}`}
            onChange={onSelect}
        >
            {values.map((item, i) => (
                <option key={item + i} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default DropDown;
