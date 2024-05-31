import { ChangeEvent, FC } from "react";
import DropDown from "./DropDown";
import Input from "./Input";

interface EditableDropDownProps {
    name: string;
    value: string;
    placeholder: string;
    defaultOption: string;
    options: string[];
    error: string;
    className?: string;
    setValue: (value: string) => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditableDropDown: FC<EditableDropDownProps> = (props) => {
    const dropDownHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const current = event.target.value;
        props.setValue(!props.value ? current : props.value + ", " + current);
    };

    return (
        <div>
            <DropDown
                label={props.placeholder}
                values={props.options}
                defaultValue={props.defaultOption}
                onChange={dropDownHandler}
            />
            <Input
                type="text"
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                error={props.error}
                className={props.className}
                onChange={props.onChange}
            />
        </div>
    );
};

export default EditableDropDown;
