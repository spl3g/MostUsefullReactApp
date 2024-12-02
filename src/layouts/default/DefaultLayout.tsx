import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const DefaultLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
            }}
        >
            <Header />
            <main>
                <Outlet />
            </main>
            <div style={{ marginTop: "auto" }}>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
