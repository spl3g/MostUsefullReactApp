import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Avatar } from "@consta/uikit/Avatar";
import { useEffect } from "react";
import { RootState } from "../../store/store";

const ProfilePage = function () {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);
    if (!user) {
        return null;
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                gap: "4rem",
            }}
        >
            <Avatar
                style={{
                    width: "128px",
                    height: "128px",
                    margin: "auto 0",
                }}
                url={user.image}
            ></Avatar>
            <div>
                <h1>Логин: {user.username}</h1>
                <h3>Имя: {user.firstName}</h3>
                <h3>Фамилия: {user.lastName}</h3>
                <h3>Почта: {user.email}</h3>
            </div>
        </div>
    );
};

export default ProfilePage;
