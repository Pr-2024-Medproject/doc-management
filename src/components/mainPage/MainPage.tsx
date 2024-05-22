import { FC } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = (_props) => {
    return (
        <>
            <h1 className="text-blue-500 text-center text-2xl">Clinic documentation management</h1>
            <Link to="form/dsfsfsd">Test link</Link>
            <Outlet />
        </>
    );
};

export default MainPage;
