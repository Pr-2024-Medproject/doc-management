import { FC } from "react";
import { Outlet } from "react-router-dom";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (_props) => {
    return (
        <>
            <h1 className="text-blue-500 text-center text-2xl">Clinic documentation management</h1>
            <Outlet />
        </>
    );
}

export default MainPage;