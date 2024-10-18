import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="w-12"
        />
        <span className="ml-3 font-semibold text-xl">Royal Stone</span>
      </div>
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <Link href="#about" className="hover:text-green-500">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-green-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-green-500">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="text-green-600">Log In</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Get Started
        </button>
      </div>
    </nav>
  );
};
