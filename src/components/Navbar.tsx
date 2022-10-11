import Nav from "./Nav";
import Button from "./Button";
import IconLogo from "../images/logo.svg";
import React from 'react'


function Logo() {
  return (
    <div onClick={() => (window.location.href = "/")} className="flex flex-row items-center w-64 transition-all hover:scale-105">
      <img src={IconLogo} alt="logo" className="w-11 h-11" />
      <h1 className="text-2xl font-extrabold ml-2">Startup Landing</h1>
    </div>
  );
}

function MiddleNav() {
  return (
      <ul className="flex flex-row">
        {routes.map((route) => {
          const replaceSyntax = route.replace("/", "");
          return (
            <Nav
              key={route}
              link={route}
              title={
                route === "/"
                  ? "Home"
                  : replaceSyntax.charAt(0).toUpperCase() + replaceSyntax.slice(1)
              }
              isActive={window.location.pathname === route ? true : false}
            />
          );
        })}
      </ul>
  );
}

const routes = ["/", "/features", "/pricing", "/testimonial"];

function Navbar() {
  return (
    <div className="flex flex-row w-screen mt-5 items-center justify-around">
      <Logo />
      <MiddleNav />
      <Button title="Get Started" isNav={true} />
    </div>
  );
}

export default Navbar;
