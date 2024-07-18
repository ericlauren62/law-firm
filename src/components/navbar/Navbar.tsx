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
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
}

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      // Disable scrolling on the entire document when the navbar is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the navbar is closed
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:hidden">
      <div>
        <Image src={logo} alt="logo" height={150} width={150} />
      </div>
      <ul
        className={`bg-white text-black fixed top-16 left-0 text-lg grid gap-y-3 w-full z-50 bg-gray px-6 py-6 transition-all duration-300 ${
          isNavOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <li className="hover:text-primary">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/attorneys">Attorneys</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <div onClick={toggleNav} className={`cursor-pointer "bg-transparent" : "bg-white p-2"}`}>
        <Image src={hamburger} alt="hamburger" />
      </div>
    </nav>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center w-full">
      <Link href="/">
        <Image src={logo} alt="logo" height={200} width={200} />
      </Link>
      <ul className="flex gap-x-12 items-center text-lg">
        <li className="hover:text-primary">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/attorneys">Attorneys</Link>
        </li>
        <li className="hover:text-primary">
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
      <div>
        <Link href="/contact" className="bg-primary h-[50px] w-[200px] rounded-full text-white py-3 px-5">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
