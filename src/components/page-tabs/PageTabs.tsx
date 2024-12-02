import { useEffect, useState } from "react";
import { Tabs } from "@consta/uikit/Tabs";
import { useLocation, useNavigate } from "react-router-dom";

type Item = {
    label: string;
    link: string;
};

const items: Item[] = [
    { label: "Главная страница", link: "/" },
    { label: "Услуги компании", link: "/services" },
];

const PageTabs = ({ linePosition }: { linePosition: "top" | "bottom" }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const findItem = () =>
        items.find((i) => i.link === location.pathname) || null;

    const [value, setValue] = useState<Item | null>(findItem);

    useEffect(() => {
        setValue(findItem);
    }, [location.pathname]);
    return (
        <Tabs
            value={value}
            onChange={(item) => {
                setValue(item);
                navigate(item.link);
            }}
            items={items}
            linePosition={linePosition}
            view="clear"
        />
    );
};

export default PageTabs;
