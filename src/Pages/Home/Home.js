import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';


const Home = () => {
    return (
        <div className='mt-[64px] sm:w-10/12 mx-auto'>
            <Banner></Banner>
            <div className='flex justify-evenly my-10'>
                <Info
                    img={clock}
                    title={"Opening Hours"}
                    description={"Lorem Ipsum is simply dummy text of the pri"}
                    bg={"bg-gradient-to-r from-secondary to-primary"}
                ></Info>
                <Info
                    img={marker}
                    title={"Visit our location"}
                    description={"Brooklyn, NY 10036, United States"}
                    bg={"bg-gray-700"}
                ></Info>
                <Info
                    img={phone}
                    title={"Contact us now"}
                    description={"+000 123 456789"}
                    bg={"bg-gradient-to-r from-secondary to-primary"}
                ></Info>
            </div>
        </div>
    );
};

export default Home;