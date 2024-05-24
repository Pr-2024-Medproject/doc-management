import { FC } from "react";
import NavigationItem from "./NavigationItem";
import { FORMS } from "../../../constants/Forms";

interface NavigationPanelProps {}

const NavigationPanel: FC<NavigationPanelProps> = () => {
    return (
        <nav className="h-full p-4 flex justify-evenly">
            {FORMS.map((info) => <NavigationItem key={info.key} formInfo={info} />)}
        </nav>
    );
}

export default NavigationPanel;
