

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, email, date, service, price, img, status } = booking;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>

            </td>
            <td>
                {
                    service
                }

            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                { 
                status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-error btn-xs text-white">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;