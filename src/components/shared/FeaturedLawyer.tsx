import ButtonLink from "../shared/ButtonUrl";
import ImageCard from "../shared/ImageCard";
import founder from "/public/images/founder.webp";
import lawyer1 from "/public/images/lawyer1.jpg";
import lawyer2 from "/public/images/lawyer2.webp";
import lawyer3 from "/public/images/lawyer3.webp";
import lawyer4 from "/public/images/lawyer4.webp";
import lawyer5 from "/public/images/lawyer5.jpg";

export default function FeaturedLawyer() {
  return (
    <section className="container lg:grid lg:grid-cols-2  py-20 lg:py-32 gap-x-20">
      <div className="mb-20 lg:mb-0">
        <h2 className="text-3xl font-medium mb-10 lg:text-5xl">Lawyers specializing in diverse areas</h2>
        <p className="mb-10">
          We prioritize our {"clients'"} needs, understanding that each case is unique. Our team of seasoned attorneys
          is committed to delivering tailored solutions, ensuring you receive the attention and representation you
          deserve. Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
        </p>

        <div className="pl-10 border-l border-black mb-10">
          <strong className="mb-3 block">
            {'"Our attorneys are accessible, responsive, and will keep you updated on the progress of your case"'}
          </strong>
          <p>Theresa Webb, founder of the Thommessen & Paul</p>
        </div>

        <ButtonLink btntext="Show All Members" url="/attorneys" dark />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        <ImageCard image={founder} role="Founder" name="Theresa Webb" />
        <ImageCard image={lawyer1} role="Lawyer" name="Guy Hawkins" />
        <ImageCard image={lawyer2} role="Lawyer" name="Brook Seims" />
        <ImageCard image={lawyer3} role="Lawyer" name="Arlene McCoy" />
        <ImageCard image={lawyer4} role="Lawyer" name="Traice Dantini" />
        <ImageCard image={lawyer5} role="Lawyer" name="Kira Zayn" />
      </div>
    </section>
  );
}
