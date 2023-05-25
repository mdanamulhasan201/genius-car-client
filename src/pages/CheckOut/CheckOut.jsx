import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";


const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price

        }

        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                    'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('Service book successfully')
                }
            })
    }

    return (
        <div>
            <h3 className="text-center text-3xl font-bold my-6"> Book Service: {title}</h3>

            <form onSubmit={handleBookService}>
                <div className="">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.DisplayName} placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" required/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6 mb-48">
                        <input className="btn btn-error btn-block" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>



    );
};

export default CheckOut;