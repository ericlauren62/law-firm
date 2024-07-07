import Link from "next/link";
import img from "/public/images/homeImg1.webp";
import Image from "next/image";
import ButtonLink from "../shared/ButtonUrl";

export default function HomeFirstSection() {
  return (
    <section className="container py-14 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:py-32">
      <div className="mb-10">
        <h2 className="text-4xl font-medium mb-6 lg:text-5xl lg:leading-[57.6px]">
          We uphold the highest standards of integrity.
        </h2>
        <p>
          We prioritize our {"client's"} needs, understanding that each case is unique. Our team of seasoned attorneys
          is committed to delivering tailored solutions, ensuring you receive the attention and representation you
          deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
        </p>
        <div className="flex flex-col justify-center items-center gap-y-3 mt-10 lg:gap-x-8 lg:justify-start lg:flex-row ">
          <ButtonLink url="/contact" btntext="Get In Touch" dark />
          <ButtonLink url="/contact" btntext="Explore More" />
        </div>
      </div>
      <div>
        <Image src={img} alt="a lawyer talking to a client" />
      </div>
    </section>
  );
}
