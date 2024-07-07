import Link from "next/link";
import ButtonLink from "../shared/ButtonUrl";

export default function HomeHero() {
  return (
    <section className="relative bg-heroBg min-h-[90vh] bg-center bg-cover text-white text-center py-20 lg:text-left">
      <div className="bg-black opacity-50 absolute inset-0 z-0"></div>
      <div className="container lg:h-[65vh] lg:flex items-center mt-10">
        <div className="z-20 relative">
          <h1 className="text-white text-[2.75rem] font-medium leading-[52.8px] mb-5 max-w-[720px] lg:leading-[74.4px] lg:text-6xl">
            We tailor our approach to meet individual needs
          </h1>
          <p className="lg:w-[55%]">
            Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the
            attention and representation you deserve. Our comprehensive expertise allows us to handle a wide range of
            legal matters effectively.
          </p>
          <div className="flex flex-col justify-center items-center gap-y-3 mt-10 lg:gap-x-8 lg:justify-start lg:flex-row ">
            <ButtonLink dark btntext="Book Consulation" url="/contact" />
            <ButtonLink btntext="Explore More" url="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
