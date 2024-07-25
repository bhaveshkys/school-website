import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
    const slides = [
        { id: 1, title: "Annual Sports Day", description: "Celebrating Excellence in Sports", image: "/sportsDay.jpeg",attribute:"object-top" },
        { id: 2, title: "Science Exhibition", description: "Showcasing Student Innovations", image: "/sciExibition.jpeg",attribute:"object-center" },
        { id: 3, title: "Cultural Fest", description: "Embracing Diversity and Creativity", image: "/ethnicDay.jpg",attribute:"object-top" }
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <div className="md:w-full mx-auto overflow-hidden" >
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[400px]">
              <img src={slide.image} alt={slide.title} className={`w-full h-full object-cover  ${slide.attribute}`} />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white px-6 py-4">
                  <h2 className="text-2xl font-bold">{slide.title}</h2>
                  <p className="mt-2 text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  )
}

export default Carousel