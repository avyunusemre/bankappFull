import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../images/carousel/1.jpg";
import Banner2 from "../images/carousel/2.jpg";
import Banner3 from "../images/carousel/3.jpg";
import "./Banner.css";

const images = [
  {
    image: Banner1,
    btnLabel: "Find out more",
    description: "Internet banking for banking transactions wherever you are",
    interval: 10000,
  },
  {
    image: Banner2,
    btnLabel: "Find out more",
    description: "To add value for your money",
    interval: 5000,
  },
  {
    image: Banner3,
    btnLabel: "Find out more",
    description: "Summer is here vacation loan to see new places",
    interval: 15000,
  },
];

const Banner = () => {
  return (
    <div>
      <Carousel nextLabel="" prevLabel="">
        {images.map((item) => {
          const { image, btnLabel, description, interval } = item;
          return (
            <Carousel.Item interval={interval}>
              <img className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption>
                <div className="w-50 text-center ms-5">
                  <button className="btn btn-danger ">{btnLabel}</button>
                  <p className="text-dark carousel-desc-text mt-3">
                    {description}
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
