import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


const Services = () => {
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-error font-bold mb-5  text-2xl">Service</h3>
                <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
                <p className=" text-gray-500 mb-20">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mb-5">
                {
                    Services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)

                }

            </div>
            <div className=" text-center m-8">
                <Link to=''><button className="btn btn-outline btn-error">More Services</button></Link>
            </div>
        </div>
    );
};

export default Services;