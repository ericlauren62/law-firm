import Image from "next/image";
import img from "/public/images/aboutImg2.webp";

export default function ContactFirstSection() {
  return (
    <section className="container grid lg:grid-cols-2 items-center py-10 lg:py-20">
      <div className="mb-10 lg:mb-0 lg:w-[92%] ">
        <h2 className="text-3xl lg:text-5xl mb-8 font-medium">Your rights matter, we are here to defend them.</h2>
        <p className="mb-8">
          We prioritize our {"clients'"} needs, understanding that each case is unique. Our team of seasoned attorneys
          is committed to delivering tailored solutions, ensuring you receive the attention and representation you
          deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
        </p>
        <div className="grid gap-y-8 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-8">
          <div className="bg-secondary py-8 px-6">
            <h3 className="font-medium text-3xl">15+</h3>
            <div>Years of Experience</div>
          </div>
          <div className="bg-secondary py-8 px-6">
            <h3 className="font-medium text-3xl">84k</h3>
            <div>Clients worldwide</div>
          </div>
        </div>
      </div>
      <div>
        <Image src={img} alt="law book and a lawyer" />
      </div>
    </section>
  );
}
