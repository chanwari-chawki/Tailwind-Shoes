import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";

const ROTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact"
]

export function Nav() {
  const [isMobileMenuShow, setIsMobileMenuShow]=useState(false)
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="">
      <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button onClick={() => setIsMobileMenuShow(!isMobileMenuShow)} className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25}/>
        </button>
        {/* Menu List */}
        <div className={`${
          isMobileMenuShow === false && "hidden"
        } hidden w-full lg:w-auto lg:block`}>
          <ul className="lg:space-x-8 lg:bg-transparent lg:border-none flex flex-col lg:flex-row rounded-lg border  border-gray-100 bg-gray-50 text-lg p-4">
             {ROTES.map((route, i) => {
              return (<li className={`lg:hover:text-blue-500 lg:hover:bg-transparent cursor-pointer rounded px-3 py-2 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}${(i===3 || i===4 && "lg:text-white")}`} key={route}>{route}</li>)
             })}
          </ul>
        </div>
        {/* Cart button */}
        <div className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="flex-center cursor-pointer rounded-full bg-white shadow-md h-12 w-12">
        <TbShoppingBag />
        </div>
        </div>
    </nav>
  )
}