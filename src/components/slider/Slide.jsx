import Slider from "react-slick";
import "./Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.jpg";
import FilterModal from "../UI/Modal/FilterModal";
import { useState } from "react";
import slider from "react-slick/lib/slider";
// import "../../pages/jobboard.css";

export default function Slide() {
  const [filter, setFilter] = useState("");
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="slide-image-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src={image1} alt="office" className="office" />
          </div>
          <div className="slide">
            <img src={image2} alt="office" className="office" />
          </div>
          <div className="slide">
            <img src={image3} alt="office" className="office" />
          </div>
          <div className="slide">
            <img src={image4} alt="office" className="office" />
          </div>
          <div className="slide">
            <img src={image5} alt="office" className="office" />
          </div>
        </Slider>
      </div>
      <div className="filter-container ">
        <p>Filter by:</p>
        <div className="experience-level">
          <button
            className="dropdown-toggle"
            onClick={() =>
              setFilter((prevFilter) =>
                prevFilter === "experience" ? "" : "experience"
              )
            }
          >
            Job Title
          </button>
          <button
            className="dropdown-toggle"
            onClick={() => {
              setFilter((prevFilter) =>
                prevFilter === "location" ? "" : "location"
              );
            }}
          >
            Location
          </button>
          {/* <button className="apply-btn">Apply</button> */}
        </div>
        {filter && <FilterModal style={filter} setFilter={setFilter} />}
      </div>
    </div>
  );
}
