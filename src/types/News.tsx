import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import React from "react";

export type News = {
    name: string;
    description: string;
    createdAt: string;
};

export const NewsListData: React.FC<News> = function ({
    name,
    description,
    createdAt,
}) {
    return (
        <Card
            verticalSpace="m"
            horizontalSpace="m"
            style={{
                maxWidth: "50rem",
                marginBottom: "1rem",
            }}
        >
            <Text weight="semibold">{name}</Text>
            <hr />
            <Text>{description}</Text>
            <Text size="xs" align="right" view="ghost">
                {createdAt}
            </Text>
        </Card>
    );
};
