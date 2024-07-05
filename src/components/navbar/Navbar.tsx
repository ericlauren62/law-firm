"use client";

import Link from "next/link";
import logo from "/public/images/Lawfirmlogo.svg";
import hamburger from "/public/images/hamburger.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`py-4 fixed left-0 right-0  z-[1000] w-[100vw] ${
        scrolled ? "bg-white w-full" : "bg-transparent text-white"
      }`}
    >
      <div className="container">
        <MobileNav scrolled={scrolled} />
        <DesktopNav />
      </div>
    </header>
  );
}

const MobileNav = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <nav className="flex justify-between items-center lg:hidden">
      <div>
        <Image src={logo} alt="logo" height={150} width={150} />
      </div>
      <ul className="hidden">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/attorneys">Attorneys</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={`cursor-pointer ${scrolled ? "bg-transparent" : "bg-white p-2"}`}>
        <Image src={hamburger} alt="hamburger" className="text-white" />
      </div>
    </nav>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center w-full">
      <div>
        <Image src={logo} alt="logo" height={200} width={200} />
      </div>
      <ul className="flex gap-x-12 items-center text-lg">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/attorneys">Attorneys</Link>
        </li>
      </ul>
      <div>
        <Link href="/contact" className="bg-primary h-[45px] w-[200px] rounded-full text-white py-3 px-5">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
