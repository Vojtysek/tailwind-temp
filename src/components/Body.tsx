import animatePic from "../images/animate.png";
import Heading from "./Heading";
import FourBox from "./Box";
import Hero from "./Hero";

function Body() {
  return (
    <>
      <div className="flex flex-col items-center ml-24 mr-24">
        <div className="flex flex-col m-12 items-center w-full">
          <Hero />
          <img
            src={animatePic}
            alt="animate"
            className="w-full m-10 rounded-xl"
          />
          <Heading
            upperTitle="Whats the function"
            title="Meet the feature of products"
          />
        </div>
        <FourBox />
      </div>
    </>
  );
}

export default Body;