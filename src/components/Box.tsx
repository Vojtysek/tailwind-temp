import { useState } from "react";

function Box(props: any) {
  return (
    <div className="flex flex-col mb-5 transition-all hover:scale-110">
      <img
        className="w-16 absolute blur-sm rounded-full"
        src={props.link}
        alt="box"
      />
      <img
        className="w-14 relative z-10 top-1 left-1 rounded-full"
        alt=""
        src={props.link}
      />
      <div className="mt-6 mr-5">
        <h1 className="text-white font-bold pt-2 pb-2">{props.title}</h1>
        <p className="text-gray-400">{props.content}</p>
      </div>
    </div>
  );
}

/*
function WideBox(props: any) {
  return (
    <div className="flex flex-row items-start">
      <img className="w-14" src={props.link} />
      <div className="w-1/5 pl-3 text-left">
        <h1 className="text-white pb-3 font-bold">{props.title}</h1>
        <p className="text-gray-400">{props.content}</p>
      </div>
    </div>
  );
}
*/

function TwoBox(props: any) {
  return (
    <div className="flex flex-col content-between">
      <Box
        link="https://picsum.photos/600"
        title="Fast Performance"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
      <Box
        link="https://picsum.photos/700"
        title="Partnership deal"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
    </div>
  );
}

function FourBox(props: any) {
  return (
    <div className="flex flex-row content-between">
      <Box
        link="https://picsum.photos/200"
        title="Fast Performance"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
      <Box
        link="https://picsum.photos/300"
        title="Partnership deal"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
      <Box
        link="https://picsum.photos/400"
        title="Pro Subscription"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
      <Box
        link="https://picsum.photos/500"
        title="Customer Support"
        content="Get your blood tests delivered at home collect a sample from the your blood tests."
      />
    </div>
  );
}

function TwoByTwo(props: any) {
  return (
    <div>
      <div className="flex flex-row content-between">
        <Box
          link="https://picsum.photos/200"
          title="Fast Performance"
          content="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <Box
          link="https://picsum.photos/300"
          title="Partnership deal"
          content="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
      </div>
      <div className="flex flex-row content-between">
        <Box
          link="https://picsum.photos/200"
          title="Fast Performance"
          content="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <Box
          link="https://picsum.photos/300"
          title="Partnership deal"
          content="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
      </div>
    </div>
  );
}

export { FourBox, TwoBox, TwoByTwo };
