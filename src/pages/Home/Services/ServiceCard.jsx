import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id, title, img, price, } = service
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className="rounded-lg p-5 lg:h-[288px]" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>

                <div className="flex items-center">
                    <p className="font-bold text-orange-500 text-xl">Price: {price}</p>
                    <Link to={`checkout/${_id}`}><FaArrowRight className="text-orange-500"></FaArrowRight></Link>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;