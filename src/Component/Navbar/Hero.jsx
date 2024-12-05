import React from 'react';
import Image1 from "../../assets/Image/Image1.jpg";
import Image2 from "../../assets/Image/Image2.jpg";
import Image3 from "../../assets/Image/Image3.jpg"; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const img = [
    {
        id: 1,
        Img: Image1,
        title: "T-shirt and Shirt Sale"
    },
    {
        id: 2,
        Img: Image2,
        title: "T-shirt and Shirt Sale"
    },
    {
        id: 3,
        Img: Image3,
        title: "T-shirt and Shirt Sale"
    },
];

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className='h-[200px]  bg-slate-700'>
                <Slider {...settings}>
                    {
                        img.map((data) => (
                            <div key={data.id} className='h-[200px] w-[200px] flex flex-col items-center justify-center bg-red-600'>
                                <img 
                                    src={data.Img} 
                                    alt={data.title} 
                                    className='h-[200px] w-full' 
                                />
                               
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
