import { FC } from "react";
import { Link } from "react-router-dom";
import { FormInfo } from "../../../types/Forms";
import useFormInfo from "../../../hooks/useFormInfo";

interface NavigationItemProps {
    formInfo: FormInfo;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
    const current = useFormInfo();
    const border = current.id === props.formInfo.id ? "border-8" : "border-2";

    return (
        <Link
            className={`p-2 ${border} border-emerald-800`}
            to={`/doc-management/form/${props.formInfo.id}`}
        >
            {props.formInfo.name}
        </Link>
    );
};

export default NavigationItem;
