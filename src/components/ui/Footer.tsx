import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about-us" },
  { id: 3, title: "Contact Us", path: "/contact-us" },
  { id: 3, title: "FAQs", path: "/faqs" },
];

const PoliciesLinks = [
  { id: 1, title: "Privacy Policy", path: "/privacy-policy" },
  { id: 2, title: "Terms Of Service", path: "/terms-of-service" },
];

export const Footer = () => {
  return (
    <footer className="pb-16 px-4 md:px-12 xl:px-24 flex flex-col md:flex-row gap-5 md:gap-0 justify-between w-full bg-secondary-green text-light-black text-sm">
      <div className="flex flex-col w-full md:w-3/5">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="w-48 mb-3"
        />
        <h3 className="font-semibold leading-6 max-w-sm mb-5 pr-4">
          Purus eget arcu faucibus mi velit. Massa placerat sed in malesuada cum
          ornare.
        </h3>
        <p className="hidden md:flex gap-2 items-center">
          <Image
            src={"/images/copyright.svg"}
            alt="copyright"
            width={20}
            height={20}
            className=""
          />{" "}
          Copyright Royal Stone 2024
        </p>
      </div>
      <div className="flex w-full md:w-2/5 justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-black">COMPANY</h3>
          <ul className="space-y-5">
            {companyLinks.map((pageObj) => {
              return (
                <li key={pageObj.id}>
                  <Link href={pageObj.path} className="hover:underline">
                    {pageObj.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden xxs:flex flex-col gap-4">
          <h3 className="font-semibold text-black">SOCIAL</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href={"#"}>
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                width={20}
                height={20}
                className=""
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/images/instagram.svg"}
                alt="facebook"
                width={20}
                height={20}
                className=""
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/images/x.svg"}
                alt="facebook"
                width={20}
                height={20}
                className=""
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/images/linkedin.svg"}
                alt="facebook"
                width={20}
                height={20}
                className=""
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-black">POLICIES</h3>
            <ul className="space-y-5">
              {PoliciesLinks.map((pageObj) => {
                return (
                  <li key={pageObj.id}>
                    <Link href={pageObj.path} className="hover:underline">
                      {pageObj.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="xxs:hidden flex flex-col gap-4">
            <h3 className="font-semibold text-black">SOCIAL</h3>
            <div className="grid grid-cols-4 gap-2">
              <Link href={"#"}>
                <Image
                  src={"/images/facebook.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className=""
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/images/instagram.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className=""
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/images/x.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className=""
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/images/linkedin.svg"}
                  alt="facebook"
                  width={20}
                  height={20}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex border w-full border-[#D6EFD4]"></div>
      <p className="md:hidden flex gap-2 items-center">
        <Image
          src={"/images/copyright.svg"}
          alt="copyright"
          width={20}
          height={20}
          className=""
        />{" "}
        Copyright Royal Stone 2024
      </p>
    </footer>
  );
};
