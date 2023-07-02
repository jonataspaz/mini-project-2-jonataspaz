import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/e-vroom-logo.png"
            alt="E-Vroom Logo"
            width={118}
            height={18}
            className="Object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-white rounded-full bg-black min-w-[130px] "
        />
      </nav>
    </header>
  );
};

export default Navbar;
