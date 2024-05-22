import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import FormSection from "./components/form-section/FormSection";

const App = () => {
    return (
        <Routes>
            <Route path="/doc-management" element={<MainPage />}>
                <Route index element={<h1>lololo</h1>} />
                <Route path="form/:formId" element={<FormSection />} />
            </Route>
            <Route path="*" element={<h1>something</h1>} />
        </Routes>
    );
};

export default App;
