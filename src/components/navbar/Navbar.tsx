import Link from "next/link";
import logo from "/public/images/Lawfirmlogo.svg";
import hamburger from "/public/images/hamburger.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="container py-4">
      <MobileNav />
      <DesktopNav />
    </header>
  );
}

const MobileNav = () => {
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
      <div>
        <Image src={hamburger} alt="hamburger" />
      </div>
    </nav>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center">
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
