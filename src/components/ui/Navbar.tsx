import Image from "next/image";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-12 xl:px-24 py-6 bg-secondary-green fixed top-0 w-full z-50">
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
      <NavLinks />
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
