import { FC } from "react";
import NavigationItem from "./NavigationItem";

interface NavigationPanelProps {}

const NavigationPanel: FC<NavigationPanelProps> = () => {
    return (
        <nav className="h-full p-4 border-2 border-red-500 flex justify-evenly">
            <NavigationItem formId="1" formLabel="Form A" />
            <NavigationItem formId="2" formLabel="Form B" />
            <NavigationItem formId="3" formLabel="Form C" />
            <NavigationItem formId="4" formLabel="Form D" />
        </nav>
    );
}

export default NavigationPanel;
