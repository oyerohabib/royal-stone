import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-16 px-24 flex flex-col md:flex-row justify-between w-full bg-secondary-green text-light-black text-sm">
      <div className="flex flex-col w-3/5">
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
        <p className="flex gap-2 items-center">
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
      <div className="flex w-2/5 justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-black">COMPANY</h3>
          <ul className="space-y-5">
            <li>
              <a href="#about" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
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
          <h3 className="font-semibold text-black">POLICIES</h3>
          <ul className="space-y-5">
            <li>
              <a href="#about" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
