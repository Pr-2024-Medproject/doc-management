import { FC } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface NavigationItemProps {
    formId: string;
    formLabel: string;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
    const { formId } = useParams();

    const border = formId === props.formId ? "border-8" : "border-2";

    return (
        <Link
            className={`p-2 ${border} border-emerald-800`}
            to={`/doc-management/form/${props.formId}`}
        >
            {props.formLabel}
        </Link>
    );
};

export default NavigationItem;
