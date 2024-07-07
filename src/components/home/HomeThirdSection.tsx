import ButtonLink from "../shared/ButtonUrl";

export default function HomeThirdSection() {
  return (
    <section className="py-32 container lg:flex lg:justify-between lg:items-center lg:gap-x-32">
      <div className="lg:w-[40%]">
        <Card />
        <Card dark />
        <Card />
      </div>
      <div className="lg:w-[50%]">
        <h2 className="lg:text-5xl font-medium mb-8">Your rights matter, we are here to defend them</h2>
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

interface CardProps {
  dark?: boolean;
}

const Card = ({ dark }: CardProps) => {
  return (
    <div className={`mb-8 p-6 ${dark ? "bg-black text-white relative left-10" : "bg-secondary"}`}>
      <div className="flex justify-between items-center mb-5">
        <h3 className="lg:text-2xl font-medium">Initial consultation</h3>
        <div>01</div>
      </div>
      <p>Our comprehensive expertise allows us to handle a wide range of legal matters effectively.</p>
    </div>
  );
};
