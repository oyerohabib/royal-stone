"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const pageLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Contact Us", path: "/contact-us" },
  { id: 4, title: "Privacy Policy", path: "/privacy-policy" },
  { id: 5, title: "Terms Of Service", path: "/terms-of-service" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-12 xl:px-24 py-6 bg-secondary-green fixed top-0 w-full z-50">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={130}
              height={25}
              className="w-44 md:w-40 md-custom:w-44"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="block md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <Image
            src={"/images/menu.svg"}
            alt="menu"
            width={40}
            height={40}
            className="size-7"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 xl:space-x-6 items-center text-light-black">
          {pageLinks.map((pageObj) => {
            return (
              <li key={pageObj.id}>
                <Link
                  href={pageObj.path}
                  className={`${
                    pathname === pageObj.path
                      ? "text-primary-blue font-bold"
                      : ""
                  } 
                ${
                  pageObj.path === "/terms-of-service" ||
                  pageObj.path === "/privacy-policy"
                    ? "hidden lg:block"
                    : ""
                }`}
                >
                  {pageObj.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-[10px]">
          <button className="text-primary-green px-5 py-2 rounded-lg bg-white shadow-sm font-semibold">
            Log In
          </button>
          <button className="bg-primary-green text-white px-5 py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-secondary-green z-50 flex flex-col justify-start items-center py-6 transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center w-full px-4">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={130}
                height={25}
                className="w-44 md:w-40 md-custom:w-44"
              />
            </Link>

            {/* Close Icon */}
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              <Image
                src={"/images/menu-close.svg"}
                alt="close"
                width={40}
                height={40}
                className="size-6"
              />
            </div>
          </div>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col space-y-4 text-center mt-8 text-light-black">
            {pageLinks.map((pageObj) => (
              <li key={pageObj.id}>
                <Link
                  href={pageObj.path}
                  onClick={toggleMobileMenu}
                  className={`${
                    pathname === pageObj.path
                      ? "text-primary-blue font-bold"
                      : ""
                  }`}
                >
                  {pageObj.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col space-y-4 mt-8 w-full px-4">
            <button className="text-primary-green px-5 py-2 rounded-lg bg-white shadow-sm font-semibold w-full">
              Log In
            </button>
            <button className="bg-primary-green text-white px-5 py-2 rounded-lg font-semibold w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};
