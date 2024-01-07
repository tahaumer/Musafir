import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// media
import image1 from "../media/carousel/Rectangle 28.png";
import image2 from "../media/carousel/Rectangle 29.png";
import image3 from "../media/carousel/Rectangle 30.png";
import image4 from "../media/carousel/Rectangle 38.png";

const CustomDot = ({ onClick, active }) => (
  <li
    className={`rounded-full w-[10px] h-[10px] mx-2 border border-white ${
      active ? "bg-primary" : "bg-gray-600"
    }`}
  >
    <button
      className={`rounded-full w-[10px] h-[10px] mx-2 border border-white ${
        active ? "bg-gray-600" : "bg-primary"
      }`}
      onClick={() => onClick()}
    />
  </li>
);

function Carousels() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const bookings = [
    {
      image: image1,
      title: "Multan",
      time: "3 Days / 4 Nights",
      agency: "Halal Travelers",
      departureTime: "Departure: 14 August",
      price: "Rs27,450",
    },
    {
      image: image2,
      title: "Skardu",
      time: "3 Days / 4 Nights",
      agency: "Halal Travelers",
      departureTime: "Departure: 14 August",
      price: "Rs27,450",
    },
    {
      image: image3,
      title: "Arang Kel",
      time: "3 Days / 4 Nights",
      agency: "Halal Travelers",
      departureTime: "Departure: 14 August",
      price: "Rs27,450",
    },
    {
      image: image4,
      title: "Hunza",
      time: "3 Days / 4 Nights",
      agency: "Halal Travelers",
      departureTime: "Departure: 14 August",
      price: "Rs27,450",
    },
  ];

  return (
    <>
      <div className="container py-20 bg-secondary">
        <div className="flex justify-between items-center px-10  mb-5">
          <h1 className="text-white text-4xl font-semibold">Tour Packages</h1>
          <a
            href="#"
            className="underline text-[#5B9C57] hover:text-white transitionCs text-sm"
          >
            View All
          </a>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          showDots={true}
          customDot={<CustomDot />}
          className="pb-10"
        >
          {bookings.map((bookings, index) => (
            <div key={index} className="px-8">
              <div className="flex flex-col bg-[#CEFFC8] p-2 rounded-xl">
                <img
                  className="w-full object-cover object-center"
                  src={bookings.image}
                  alt=""
                />
                <div className="flex justify-between items-center p-2">
                  <h2 className="font-bold text-2xl">{bookings.title}</h2>
                  <p>{bookings.time}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                  <div>
                    <h2 className="">{bookings.agency}</h2>
                    <p>{bookings.departureTime}</p>
                  </div>
                  <button className="bg-[#6EBB68] px-4 py-2 rounded-xl hover:bg-[#5b9c57] transitionCs">
                    {bookings.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container py-20 bg-secondary">
        <div className="flex justify-between items-center px-10  mb-5">
          <h1 className="text-white text-4xl font-semibold">Hotels</h1>
          <a
            href="#"
            className="underline text-[#5B9C57] hover:text-white transitionCs text-sm"
          >
            View All
          </a>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          showDots={true}
          customDot={<CustomDot />}
          className="pb-10"
        >
          {bookings.map((bookings, index) => (
            <div key={index} className="px-8">
              <div className="flex flex-col bg-[#CEFFC8] p-2 rounded-xl">
                <img
                  className="w-full object-cover object-center"
                  src={bookings.image}
                  alt=""
                />
                <div className="flex justify-between items-center p-2">
                  <h2 className="font-bold text-2xl">{bookings.title}</h2>
                  <p>{bookings.time}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                  <div>
                    <h2 className="">{bookings.agency}</h2>
                    <p>{bookings.departureTime}</p>
                  </div>
                  <button className="bg-[#6EBB68] px-4 py-2 rounded-xl hover:bg-[#5b9c57] transitionCs">
                    {bookings.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container py-20 bg-secondary">
        <div className="flex justify-between items-center px-10  mb-5">
          <h1 className="text-white text-4xl font-semibold">Transport</h1>
          <a
            href="#"
            className="underline text-[#5B9C57] hover:text-white transitionCs text-sm"
          >
            View All
          </a>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={true}
          showDots={true}
          customDot={<CustomDot />}
          className="pb-10"
        >
          {bookings.map((bookings, index) => (
            <div key={index} className="px-8">
              <div className="flex flex-col bg-[#CEFFC8] p-2 rounded-xl">
                <img
                  className="w-full object-cover object-center"
                  src={bookings.image}
                  alt=""
                />
                <div className="flex justify-between items-center p-2">
                  <h2 className="font-bold text-2xl">{bookings.title}</h2>
                  <p>{bookings.time}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                  <div>
                    <h2 className="">{bookings.agency}</h2>
                    <p>{bookings.departureTime}</p>
                  </div>
                  <button className="bg-[#6EBB68] px-4 py-2 rounded-xl hover:bg-[#5b9c57] transitionCs">
                    {bookings.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Carousels;
