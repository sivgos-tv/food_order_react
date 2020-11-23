import React from "react";
import RecentElement from "./RecentElements/RecentElements.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickStyle.css";
import recentOrdersData from "./recentOrdersData.js";

function RecentOrders (props){
  // const recent_elements = recentOrdersData;
  const NumberOfElements = Math.round(window.innerWidth/350);
  var settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    arrow: true,
    speed: 500,
    slidesToShow: NumberOfElements,
    slidesToScroll: 1,
  };
  return (
    <div>
    <Slider {...settings}>
      {recentOrdersData.map((element) => (
       <div>
        <RecentElement
          key={element.key}
          name={element.name}
          img_url={element.photo}
          address={element.address}
        />
        </div>
      ))}
    </Slider>
    </div>
  );
}
export default RecentOrders;
