import React, { useState } from "react";
import { Tabs } from "@consta/uikit/Tabs";
import "./Header.css";
import { useNavigate } from "react-router-dom";

type Item = {
    label: string;
    link: string;
};

const items: Item[] = [
    { label: "Главная страница", link: "/" },
    { label: "Услуги компании", link: "/services" },
];

const Header = () => {
    const [value, setValue] = useState<Item | null>(items[0]);
    const navigate = useNavigate();
    return (
        <header className="header">
            <Tabs
                value={value}
                onChange={(item) => {
                    setValue(item);
                    navigate(item.link);
                }}
                items={items}
                view="clear"
            />
        </header>
    );
};

export default Header;
