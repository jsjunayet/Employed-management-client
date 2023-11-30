import { useEffect, useState } from "react";


const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setservices(data)
            })
    }, [])
    console.log(services);

    return (
        <div>
            <p className="text-center text-3xl font-semibold text-inherit mt-5">A Symphony of Innovative Services</p>
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 object-cover object-center"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <ul className="list-disc pl-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Services;
