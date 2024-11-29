import { headerLogo, closeIcon } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt=" logo" height={29} width={130} />
        </a>

        <ul className="flex-1 flex justify-center max-lg:hidden gap-16 items-center">
          {navLinks.map((i) => (
            <li key={i.label} className="text-white font-bold text-xl">
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray "
                href={i.href}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            onClick={toggleMenu}
            src={hamburger}
            alt="hamburger icon"
            className="cursor-pointer lg:hidden"
            width={25}
            height={25}
          />
        </div>
      </nav>
      {isOpen && (
        <div className="w-full flex flex-col absolute top-0 right-0 items-end padding-x py-10 bg-slate-100 h-screen">
          <div>
            <img
              onClick={toggleMenu}
              src={closeIcon}
              alt="hamburger icon"
              className="cursor-pointer lg:hidden"
              width={25}
              height={25}
            />
          </div>
          <ul className=" justify-center w-full  items-center">
            {navLinks.map((i) => (
              <li key={i.label} className="text-white mt-10 font-bold text-xl">
                <a
                  className="font-montserrat  leading-normal text-lg text-slate-gray "
                  href={i.href}
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
