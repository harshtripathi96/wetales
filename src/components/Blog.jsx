import React, { useRef } from "react";
import Slider from "react-slick";
import "./Blog.css";

import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpg";
import blog4 from "../assets/blog/blog4.jpg";
import { FaArrowRight } from "react-icons/fa";

const blogData = [
  {
    image: blog1,
    description: "Behind the scenes of a magical wedding shoot with our creative team.",
  },
  {
    image: blog2,
    description: "Creative editing tips to elevate your videos with color and storytelling.",
  },
  {
    image: blog3,
    description: "Explore trending digital wedding invitations for the modern couple.",
  },
  {
    image: blog4,
    description: "Top editing tricks used in high-end pre-wedding films.",
  },
];

const Blog = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="blog">
     <section className="blog-section">
       <div className="blog-wrapper">
         <h2 className="section-heading">
           BLOG <span className="underline"></span>
         </h2>

         <Slider ref={sliderRef} {...settings}>
           {blogData.map((blog, index) => (
             <div className="blog-card" key={index}>
               <img src={blog.image} alt={`blog-${index}`} className="blog-img" />
               <p className="blog-desc">{blog.description}</p>
               <button className="read-more-btn">Read More</button>
             </div>
           ))}
         </Slider>

         <div className="blog-more" onClick={() => sliderRef.current.slickNext()}>
           <span>
             View More <FaArrowRight className="arrow-icon" />
           </span>
         </div>
       </div>
     </section>
    </section>
  );
};

export default Blog;
