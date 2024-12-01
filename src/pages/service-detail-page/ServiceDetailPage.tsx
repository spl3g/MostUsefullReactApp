import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getServiceAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";
import { Service } from "../../types/Services";
import { Text } from "@consta/uikit/Text";

const ServiceDetailPage = () => {
    const [service, setService] = useState<Service | null>(null);
    let { id } = useParams();

    useEffect(() => {
        getServiceAction(Number(id)).then((service) => {
            setService(service);
        });
    }, []);

    if (service === null) {
        return <Loader />;
    }

    return (
        <>
            <Text weight="semibold">{service.name}</Text>
            <Text>{service.description}</Text>
        </>
    );
};

export default ServiceDetailPage;
