"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Contact Us", path: "/contact-us" },
  { id: 4, title: "Privacy Policy", path: "/privacy-policy" },
  { id: 5, title: "Terms Of Service", path: "/terms-of-service" },
];

export const NavLinks = () => {
  const pathname = usePathname();
  return (
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
  );
};
