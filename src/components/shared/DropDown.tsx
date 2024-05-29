import { ChangeEvent, FC } from "react";

interface DropDownProps {
    values: string[];
    onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: FC<DropDownProps> = ({ values, onSelect }) => {
    return (
        <select onChange={onSelect}>
            {values.map((item, i) => (
                <option key={item + i} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};

export default DropDown;
