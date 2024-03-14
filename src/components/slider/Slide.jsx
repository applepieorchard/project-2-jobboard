import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.jpg";
import FilterModal from "../UI/Modal/FilterModal";
import { useState } from "react";

export default function Slide() {
  const [filter, setFilter] = useState("");
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="slide-image-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="office" className="office" />
          </div>
          <div>
            <img src={image2} alt="office" className="office" />
          </div>
          <div>
            <img src={image3} alt="office" className="office" />
          </div>
          <div>
            <img src={image4} alt="office" className="office" />
          </div>
          <div>
            <img src={image5} alt="office" className="office" />
          </div>
        </Slider>
      </div>
      <div className="filter-container">
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
            Category
          </button>
          <button
            className="dropdown-toggle"
            onClick={() => {
              setFilter((prevFilter) =>
                prevFilter === "location" ? "" : "location"
              );
            }}
          >
            Any Location
          </button>
          <button className="apply-btn">Apply</button>
        </div>
        {filter && <FilterModal style={filter} />}
      </div>
    </div>
  );
}
