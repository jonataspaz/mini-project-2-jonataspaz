import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-col text-black-100 mt-5 
    border-t border-gray-100"
    >
      <div
        className="flex max-md:flex-col flex-wrap 
      justify-between gap-5 sm:px-16 px-6 py-10"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/e-vroom-logo-white.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            E-Vroom 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          <Link href="/about">About</Link>
          <Link href="/company">Company</Link>
          <Link href="/socials">Socials</Link>
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap mt-10
        border-t border-gray-100 sm:px-16 px-6 py-10"
      >
        <p>@2023 E-Vroom Rentals. All Rights Reserved</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/terms" className="text-base text-gray-500">
            Terms & Conditions
          </Link>
          <Link href="/terms" className="text-base text-gray-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
