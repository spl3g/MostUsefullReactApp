import "./Header.css";
import PageTabs from "../page-tabs/PageTabs";
import { NavLink } from "react-router-dom";
import { Button } from "@consta/uikit/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="page-tabs">
                <PageTabs linePosition="bottom" />
            </div>
            <div className="nav-links">
                <NavLink className="nav-link" to="/profile/">
                    <Button label="FIO"></Button>
                </NavLink>
                <NavLink className="nav-link" to="/login/">
                    <Button label="Вход"></Button>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
