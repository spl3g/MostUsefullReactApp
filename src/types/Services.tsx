import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Avatar } from "@consta/uikit/Avatar";
import { useNavigate } from "react-router-dom";

export type Service = {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: string;
};

export const ServicesListData: React.FC<Service> = function ({
    name,
    description,
    image,
    createdAt,
}) {
    return (
        <Card verticalSpace="m" horizontalSpace="m">
            <Text weight="semibold">{name}</Text>
            <hr />
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <Avatar
                    url={image}
                    name="service-image"
                    size="l"
                    style={{ flexShrink: 0 }}
                />
                <Text>{description}</Text>
            </div>
            <Text size="xs" align="right" view="ghost">
                {createdAt}
            </Text>
        </Card>
    );
};
