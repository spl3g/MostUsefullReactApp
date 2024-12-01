import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import { Responses404 } from "@consta/uikit/Responses404";
import Header from "../header/Header.tsx";
import React from "react";
import MainPage from "../../pages/main-page/MainPage.tsx";

function App() {
    return (
        <Theme preset={presetGpnDefault}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/">
                        <Route index element={<MainPage />}></Route>
                        {/*<Route path="services" element={<MainPage />}></Route>*/}
                        <Route path="login" element={<MainPage />}></Route>
                    </Route>
                    <Route path="*" element={<Responses404 />}></Route>
                </Routes>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
