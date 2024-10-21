import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between shadow-md px-4 md:px-12 xl:px-24 py-6 bg-secondary-green">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={130}
          height={25}
          className="w-48"
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
        <li>
          <Link href="/" className="text-primary-blue font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="hidden lg:block">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms-of-service" className="hidden lg:block">
            Terms Of Service
          </Link>
        </li>
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
