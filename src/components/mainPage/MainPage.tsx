import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import NavigationPanel from "./navigationPanel/NavigationPanel";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (_props) => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <Sidebar />
            <div className="border-2 border-red-500 h-full w-full overflow-hidden">
                <div className="h-[10%]">
                    <NavigationPanel />
                </div>
                <div className="h-[90%]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
