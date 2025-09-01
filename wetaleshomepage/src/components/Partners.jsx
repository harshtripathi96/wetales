import React, { useRef } from "react";
import Slider from "react-slick";
import "./Partners.css";

// Image imports (replace these with your actual image files)
import Part1 from "../assets/Part1.jpg";
import Part2 from "../assets/Part2.jpg";
import Part3 from "../assets/Part3.jpg";
import Part4 from "../assets/Part4.jpg";
import Part5 from "../assets/Part5.jpg";

const clientImages = [
  { img: Part1, name: "MR. RAJAT SOGANI,  AHMEDABAD" },
  { img: Part2, name: "MR. ANKUR CHHAJER, AHMEDABAD" },
  { img: Part3, name: "MR. RAJESH RAVANI, AHMEDABAD" },
  { img: Part4, name: "MR. MONIL SHAH, MUMBAI" },
  { img: Part5, name: "MR. VAIBHAV AGARWAL, SURAT" },
];

const Partners = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="Partners-section">
      <div className="Partners-wrapper">
        <div className="Partners-heading">
          OUR PARTNERS
          <span className="pink-underline"></span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {clientImages.map((Partners, index) => (
            <div className="Partners-card" key={index}>
              <img src={Partners.img} alt={`Partners ${index + 1}`} />
              <p className="Partners-name">{Partners.name}</p>
            </div>
          ))}
        </Slider>

        <div
          className="Partners-more"
          onClick={() => sliderRef.current.slickNext()}
        >
          <span>
            View More <span className="arrow-icon">→</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
