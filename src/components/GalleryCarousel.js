import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import image1 from "../media/carousel/Rectangle 28.png";
import image2 from "../media/carousel/Rectangle 29.png";
import image3 from "../media/carousel/Rectangle 30.png";
import image4 from "../media/carousel/Rectangle 38.png";
import rightArrow from "../media/carousel/Icon ionic-ios-arrow-forward.svg"

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 10,
    showNavigation: false,
    enableSwipe: true,
    config: config.slow
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={image1} alt="Image 1" />
    },
    {
      key: uuidv4(),
      content: <img src={image2} alt="Image 2" />
    },
    {
      key: uuidv4(),
      content: <img src={image3} alt="Image 3" />
    },
    {
      key: uuidv4(),
      content: <img src={image4} alt="Image 4" />
    },
    {
      key: uuidv4(),
      content: <img src={image1} alt="Image 5" />
    },
    {
      key: uuidv4(),
      content: <img src={image2} alt="Image 6" />
    },
    {
      key: uuidv4(),
      content: <img src={image3} alt="Image 7" />
    },
    {
      key: uuidv4(),
      content: <img src={image4} alt="Image 8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });


  render() {
    return (
    <>  
        <h1 className="text-center text-white text-4xl">Tour Gallery</h1>
        <h1 className="text-center text-primary text-[13px]">Photos from recent trips</h1>
        <div className="flex container justify-center items-center">
            <button onClick={() => this.setState({ goToSlide: this.state.goToSlide - 1 })}>
                <svg className="fill-[#4d4d4d] hover:fill-white transitionCs -mt-16" xmlns="http://www.w3.org/2000/svg" width="61" height="90" viewBox="0 0 61 106">
                    <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M29.635,59.177,70.007,19.1a7.509,7.509,0,0,0,0-10.7,7.724,7.724,0,0,0-10.8,0L13.467,53.811a7.526,7.526,0,0,0-.222,10.446l45.931,45.73a7.7,7.7,0,0,0,10.8,0,7.509,7.509,0,0,0,0-10.7Z" transform="translate(-11.246 -6.196)" />
                </svg>
            </button>
            <div className="w-[70%] h-[350px] ml-10 mb-[100px]">
                <Carousel
                slides={this.slides}
                goToSlide={this.state.goToSlide}
                offsetRadius={this.state.offsetRadius}
                showNavigation={this.state.showNavigation}
                animationConfig={this.state.config}
                />
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px"
                }}
                >
                </div>
            </div>
            <button onClick={() => this.setState({ goToSlide: this.state.goToSlide + 1 })}>
            <svg className="fill-[#4d4d4d] hover:fill-white transitionCs rotate-180 -ml-10 -mt-16" xmlns="http://www.w3.org/2000/svg" width="61" height="90" viewBox="0 0 61 106">
                <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M29.635,59.177,70.007,19.1a7.509,7.509,0,0,0,0-10.7,7.724,7.724,0,0,0-10.8,0L13.467,53.811a7.526,7.526,0,0,0-.222,10.446l45.931,45.73a7.7,7.7,0,0,0,10.8,0,7.509,7.509,0,0,0,0-10.7Z" transform="translate(-11.246 -6.196)" />
            </svg>
            </button>
        </div>
    </>
    );
  }
  
}
