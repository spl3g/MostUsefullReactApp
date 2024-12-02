import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Avatar } from "@consta/uikit/Avatar";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { Text } from "@consta/uikit/Text";

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
                <Text size="2xl" weight="bold">
                    {user.username}
                </Text>
                <Text>Имя: {user.firstName}</Text>
                <Text>Фамилия: {user.lastName}</Text>
                <Text>Почта: {user.email}</Text>
            </div>
        </div>
    );
};

export default ProfilePage;
