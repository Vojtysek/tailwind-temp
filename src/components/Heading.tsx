import React from 'react'

function Heading(props: any) {
  return (
    <div className={`flex flex-col ${!props.onLeft ? "m-10" : "mb-5"}`}>
      <h2
        className={`text-lgreen mb-4 ${!props.onLeft ? "text-center" : "text-left"}`}
      >
        {props.upperTitle.toUpperCase()}
      </h2>
      <h1
        className={`text-4xl font-extrabold  ${
          !props.onLeft ? "text-center" : "text-left"
        }`}
      >
        {props.title}
      </h1>
    </div>
  );
}

export default Heading;