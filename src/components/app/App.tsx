import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import { Responses404 } from "@consta/uikit/Responses404";
import MainPage from "../../pages/main-page/MainPage";
import DefaultLayout from "../../layouts/default/DefaultLayout";

function App() {
    return (
        <Theme preset={presetGpnDefault}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<MainPage />}></Route>
                        <Route path="services" element={<MainPage />}></Route>
                        <Route path="login" element={<MainPage />}></Route>
                    </Route>
                    <Route path="*" element={<Responses404 />}></Route>
                </Routes>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
