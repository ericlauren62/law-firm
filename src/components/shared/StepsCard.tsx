import ButtonLink from "./ButtonUrl";
import Card from "./Card";

export default function StepsCard() {
  return (
    <section className="py-10 lg:py-32 container flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:gap-x-32">
      <div className="lg:w-[40%]">
        <Card
          title="Initial consultation"
          description="Our comprehensive expertise allows us to handle a wide range of legal matters effectively."
          number="01"
        />
        <Card
          dark
          title="Tailored legal strategy"
          description="Our comprehensive expertise allows us to handle a wide range of legal matters effectively."
          number="02"
        />
        <Card
          title="Dedicated representation"
          description="Our comprehensive expertise allows us to handle a wide range of legal matters effectively."
          number="03"
        />
      </div>
      <div className="text-center mb-20 lg:mb-0 lg:text-left lg:w-[50%]">
        <h2 className="text-3xl lg:text-5xl font-medium mb-8">Your rights matter, we are here to defend them</h2>
        <p className="mb-8">
          We prioritize our {"client's"} needs, understanding that each case is unique. Our team of seasoned attorneys
          is committed to delivering tailored solutions, ensuring you receive the attention and representation you
          deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
        </p>
        <ButtonLink url="/contact" btntext="Get A Free Consulation" dark />
      </div>
    </section>
  );
}
