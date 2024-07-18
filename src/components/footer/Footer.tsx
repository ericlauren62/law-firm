import Image from "next/image";
import logo from "/public/images/Lawfirmlogo.svg";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container grid lg:grid-cols-2 mb-10">
        <div className="grid gap-y-5 lg:gap-y-[3px] mb-10 lg:mb-0">
          <div className="mb-5">
            <Image src={logo} alt="logo" height={200} width={200} />
          </div>
          <p className="font-medium text-lg">{"America's"} Best Law Firm</p>
          <div className="flex items-center gap-x-3">
            <div>
              <IoLocationSharp />
            </div>
            165 Fleet Street, London, United Kingdom
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <FaPhoneAlt />
            </div>
            +442077782025
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <MdOutlineEmail />
            </div>
            info@thommessenpaulllp.com
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-5">Quick Links</h3>
          <ul className="grid gap-y-4">
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
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="container font-medium">© 2024 Thommessen&paul All rights reserved.</p>
    </footer>
  );
}
