import animatePic from "../images/animate.png";
import AI from "../images/AI.png";
import Heading from "./Heading";
import { FourBox, TwoBox, TwoByTwo } from "./Box";
import Hero from "./Hero";

function Body() {
  return (
    <>
      <div className="flex flex-col items-center ml-24 mr-24">
        <div className="flex flex-col m-12 items-center w-full">
          <Hero />
          <img src={animatePic} alt="animate" className="m-10 rounded-xl w-full" />
          <Heading upperTitle="Whats the function" title="Meet the feature of products" />
        </div>
        <FourBox />
        <div className="flex flex-row m-12 items-center w-full">
          <div className="flex w-1/2 mr-8">
            <img src={AI} alt="animate" className="rounded-xl w-full" />
          </div>
          <div className="flex flex-col ml-8 w-1/2">
            <Heading onLeft={true} upperTitle="Our services" title="Bussiness Goals Achived with Design" />
            <TwoBox />
          </div>
        </div>
        <Heading upperTitle="Quality features" title="Amazing useful features" />
        <TwoByTwo />
      </div>
    </>
  );
}

export default Body;