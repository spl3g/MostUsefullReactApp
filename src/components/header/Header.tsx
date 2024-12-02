import "./Header.css";
import PageTabs from "../page-tabs/PageTabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@consta/uikit/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/user-slice";
import { User } from "@consta/uikit/User";
import { RootState } from "../../store/store";

const Header = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let authButton = null;
    if (user === null) {
        authButton = <Button label="Вход" onClick={() => navigate("/login")} />;
    } else {
        let exit = () => {
            dispatch(clearUser());
            navigate("/login");
        };
        authButton = (
            <div style={{ display: "flex", gap: "0.5rem" }}>
                <User
                    style={{ cursor: "pointer" }}
                    name={user.firstName + " " + user.lastName}
                    avatarUrl={user.image}
                    onClick={() => navigate("/user")}
                />
                <Button
                    label="Выход"
                    view="secondary"
                    size="s"
                    onClick={exit}
                />
            </div>
        );
    }

    return (
        <header className="header">
            <div className="page-tabs">
                <PageTabs linePosition="bottom" />
            </div>
            <div className="nav-links">{authButton}</div>
        </header>
    );
};

export default Header;
