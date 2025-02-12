import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-[5px] w-full h-auto flex justify-end items-center bg-[#e5a6aa] z-10 fixed bottom-0">
      <Link
        className="btn btn-accent text-white text-base rounded-xl"
        href="https://github.com/BossNattawat"
        target="blank"
      >
        Made with ❤️
      </Link>
    </footer>
  );
}

export default Footer;
