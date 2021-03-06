import React from 'react';
import Testimonial from './Testimonial';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    const testimonials = [
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&usqp=CAU",
            userName: "Winson Herry",
            userLocation: "California"
        },
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovb86cKzgTC1IxdqkGSkp2iw7uao99t7Fbg&usqp=CAU",
            userName: "Wollern Worker",
            userLocation: "New work"
        },
        {
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch6CDHA9hqbe3GbIo6O0T-EWeIL7JJ8_cpQ&usqp=CAU",
            userName: "Jessy Hallen",
            userLocation: "London"
        },
    ]
    return (
        <div className='myContainer pt-7 relative'>
            <div className='flex justify-between items-center'>
                <div>
                    <h5 className="font-bold text-base sm:text-lg text-secondary">Testimonial</h5>
                    <h3 className="text-3xl sm:text-4xl">What Our Patients Says</h3>
                </div>
                <img className='w-24 sm:w-40' src={quote} alt="" />
            </div>
            <div className='flex flex-wrap justify-evenly my-10 sm:my-24'>
                {
                    testimonials.map((testimonial, i) => <Testimonial
                        key={i}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>

        </div>
    );
};

export default Testimonials;