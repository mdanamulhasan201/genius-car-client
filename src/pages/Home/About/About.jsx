import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl lg:h-[473px]" />
                    <img src={parts} className="w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl lg:h-[332px]" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-error font-bold mb-4 text-2xl'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn btn-error mt-5 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;