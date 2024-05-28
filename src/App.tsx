import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import FormSection from "./components/formSection/FormSection";
import PatientsTable from "./components/mainPage/PatientsTable/PatientsTable";
import { useStore } from "./store";

const App = () => {
    const { patients } = useStore();
    return (
        <Routes>
            <Route path="/doc-management/" element={<MainPage />}>
                <Route index element={<PatientsTable patients={patients} />} />
                <Route path="form/:formId" element={<FormSection />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default App;
