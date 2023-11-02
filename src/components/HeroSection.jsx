{
  /* IMPORT REACT-ICONS */
}
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

{
  /* IMPORT CAROUSEL ITEMS */
}

import Item1 from "../assets/plan.jpg";
import Item2 from "../assets/meeting.jpg";
import Item3 from "../assets/styling.jpg";
import Item4 from "../assets/whiteboard.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#100123] w-full h-screen">
      {/* Hero Section */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-1xl text-[#6686B0] font-semibold">
          HELLO~ I AM JOHN FROM JOHNDOE INDUSTRIES
        </p>
        <h1
          className="text-5xl font-bold text-[#D5E3EF] sm:text-6xl md:text-7xl lg
        :text-8xl xl:text-6xl 2xl:text-10xl tracking-tight leading-none py-3"
        >
          DESIGNER, ILLUSTRATION <span className="">&amp;</span> DEVELOPER
        </h1>
        <div className="flex flex-row">
          <p className="mt-4 text-lg font-medium text-[#6686B0] max-w-md pb-4">
            I thoughtfuly design digital Interfaces for the web and mobile
            devices.
          </p>
        </div>
        {/* Carousel */}
        <div className="flex justify-center my-5">
          <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
              <img
                src={Item1}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={Item2}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={Item3}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={Item4}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center">
          <a href="/">
            <AiOutlineLinkedin className="text-white" size={35} />
          </a>
          <a href="/">
            <AiOutlineFacebook className="text-white" size={35} />
          </a>
          <a href="/">
            <AiOutlineGithub className="text-white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
