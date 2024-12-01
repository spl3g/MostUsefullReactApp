import { ServicesListData, type Service } from "../../types/Services";
import { useEffect, useState } from "react";
import { getServicesListAction } from "../../store/api-actions";
import { Loader } from "@consta/uikit/Loader";

const ServicePage = function () {
    const [services, setServices] = useState<Service[] | null>();
    useEffect(() => {
        async function fetchServices() {
            setServices(await getServicesListAction());
        }
        fetchServices();
    }, []);

    return (
        <div
            style={{
                maxWidth: "60rem",
                margin: "0 auto",
                marginBottom: "1rem",

                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
            }}
        >
            {services ? (
                services.map((services) => (
                    <ServicesListData
                        key={services.name}
                        name={services.name}
                        description={services.description}
                        image={services.image}
                        createdAt={new Date(services.createdAt).toDateString()}
                    />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ServicePage;
