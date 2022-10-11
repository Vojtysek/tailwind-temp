import React from 'react'

function Button(props: any) {

  return (
    <div className={`${props.isNav ? "w-64" : ""}`}>
      <button
        className={`font-extrabold py-2 px-4 rounded-full ${
          props.isNav
            ? "border-solid border-lgreen border transition-all hover:scale-105"
            : "text-bgcolor bg-lgreen transition-all duration-150 hover:scale-105"
        }`}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
