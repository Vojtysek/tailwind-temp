import React from 'react'

interface INav {
  isActive: boolean;
  title: string;
  link: string;
}

function Nav(props: INav) {
  return (
    <li className={`p-4 text-lg transition-all duration-150 hover:scale-105 ${!props.isActive ? "text-gray-300" : "text-lgreen"} `}>
      <a href={props.link}>{props.title}</a>
    </li>
  );
}

export default Nav;
