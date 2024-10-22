"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Contact Us", path: "/contact-us" },
  { id: 4, title: "Privacy Policy", path: "/privacy-policy" },
  { id: 5, title: "Terms Of Service", path: "/terms-of-service" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center shadow-md px-4 md:px-12 xl:px-24 py-6 bg-secondary-green">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={130}
          height={25}
          className="w-44 md:w-40 md-custom:w-44"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={"/images/menu.svg"}
          alt="menu"
          width={40}
          height={40}
          className="size-7"
        />
      </div>
      <ul className="hidden md:flex space-x-4 xl:space-x-6 items-center text-light-black">
        {pageLinks.map((pageObj) => {
          return (
            <li key={pageObj.id}>
              <Link
                href={pageObj.path}
                className={`${
                  pathname === pageObj.path ? "text-primary-blue font-bold" : ""
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
      <div className="hidden md:flex items-center space-x-[10px]">
        <button className="text-primary-green px-5 py-2 rounded-lg bg-white shadow-sm font-semibold">
          Log In
        </button>
        <button className="bg-primary-green text-white px-5 py-2 rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};
