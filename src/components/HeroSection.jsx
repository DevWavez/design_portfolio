{
  /* IMPORT REACT-ICONS */
}
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

import company from "../assets/plan.jpg";

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

        <div className="flex justify-center items-center my-1 w-[500px] h-[500px]">
          <img src={company} alt="" />
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
