import Button from "./Button";
import React from 'react'

function HeadTitle(props: any) {
  return (
    <div className="flex flex-row">
      {props.hl ? <h1 className="text-5xl text-lgreen">{props.hl}</h1> : null}
      <h1 className="text-5xl">{props.title}</h1>
    </div>
  );
}

function Hero() {
  return (
    <>
      <HeadTitle hl="Top&nbsp;" title="Quality Digital" />
      <HeadTitle title="Products To Explore"></HeadTitle>
      <div className="m-5 flex text-center text-lg w-1/3">
        Get your blood tests delivered at home collect a sample from the your
        blood tests.
      </div>
      <Button title="Explore" isNav={false} />
    </>
  );
}

export default Hero;
