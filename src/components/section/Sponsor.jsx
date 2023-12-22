import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Asus from '../assets/images/asus.png';
import Cmaster from '../assets/images/cmaster.png';
import Glorious from '../assets/images/glorious.png';
import JBL from '../assets/images/jbl.png';
import Tier1 from '../assets/images/Tier1.png';
import Ikea from '../assets/images/ikea.png';

const Sponsor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 2000, // Time between each slide change in milliseconds
  };

  const sponsors = [
    Asus,
    Cmaster,
    JBL,
    Tier1,
    Ikea,
  ];

  return (
    <>
        <div className="text-center py-20">
        <h1 className="mb-4 text-4xl font-BrunoSC text-green drop-shadow-lg">Our Partners</h1>
        <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
                <div className="flex items-center p-6">
                    <img src={sponsor} alt={`Sponsor ${index + 1}`} className="mx-auto w-50 h-40 flex items-center" />
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </>
  );
};

export default Sponsor;
