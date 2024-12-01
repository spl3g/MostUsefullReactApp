import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import { Responses404 } from "@consta/uikit/Responses404";
import MainPage from "../../pages/main-page/MainPage";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import ServicePage from "../../pages/service-page/ServicePage";
import ServiceDetailPage from "../../pages/service-detail-page/ServiceDetailPage";

function App() {
    return (
        <Theme preset={presetGpnDefault}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<MainPage />}></Route>
                        <Route
                            path="services"
                            element={<ServicePage />}
                        ></Route>
                        <Route
                            path="services/:id"
                            element={<ServiceDetailPage />}
                        ></Route>
                        <Route path="login" element={<MainPage />}></Route>
                    </Route>
                    <Route path="*" element={<Responses404 />}></Route>
                </Routes>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
