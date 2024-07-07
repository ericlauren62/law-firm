import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="container py-20">
      <div className="flex flex-col text-center lg:text-left lg:flex-row lg:justify-between items-center mb-20">
        <div>
          <h2 className="text-4xl font-medium mb-5 lg:mb-3 lg:text-5xl lg:leading-[57.6px]">Services</h2>
          <p className="mb-4 lg:mb-0">We prioritize our {"client's"} needs, understanding that each case is unique.</p>
        </div>

        <Link
          href="/services"
          className="bg-primary text-white rounded-full flex items-center justify-center h-[50px] w-[150px]"
        >
          Explore All
        </Link>
      </div>
      <div className="grid gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-10">
        <ServiceCard
          img={"/images/injury.jpg"}
          title="Personal Injury"
          description="We are dedicated to providing exceptional legal services with expertise, and a personalized approach."
          link="/services"
        />
        <ServiceCard
          img={"/images/family.jpg"}
          title="Family Law Advocacy"
          link="/services"
          description="We are dedicated to providing exceptional legal services with expertise, and a personalized approach."
        />
        <ServiceCard
          img={"/images/realestate.jpg"}
          title="Real Estate Transactions"
          link="/services"
          description="We are dedicated to providing exceptional legal services with expertise, and a personalized approach."
        />
      </div>
    </section>
  );
}

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}
const ServiceCard = ({ img, title, description, link }: ServiceCardProps) => {
  return (
    <div
      className="relative min-h-[300px] flex items-center text-white bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="relative z-50">
        <h3 className="mb-4 text-2xl font-medium">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href={link} className="border-b border-white hover:border-gray-400">
          Learn More
        </Link>
      </div>
    </div>
  );
};
