import ImageCard from "../shared/ImageCard";
import founder from "/public/images/founder.webp";
import lawyer1 from "/public/images/lawyer1.jpg";
import lawyer2 from "/public/images/lawyer2.webp";
import lawyer3 from "/public/images/lawyer3.webp";
import lawyer4 from "/public/images/lawyer4.webp";
import lawyer5 from "/public/images/lawyer5.jpg";
import lawyer6 from "/public/images/lawyer6.jpg";
import lawyer7 from "/public/images/lawyer7.jpg";
import lawyer8 from "/public/images/lawyer8.jpg";

export default function AttorneysList() {
  return (
    <section className="max-w-[1200px] mx-auto container py-20">
      <h2 className="text-3xl lg:text-5xl text-center font-medium max-w-[700px] mx-auto mb-16">
        Accomplished lawyers specializing in diverse areas
      </h2>
      <div className="grid grid-cols-3 place-items-center gap-y-8 py-10">
        <ImageCard image={founder} name="Theresa Webb" role="Founder" />
        <ImageCard image={lawyer1} name="Guy Hawkins" role="Lawyer" />
        <ImageCard image={lawyer2} name="Brook Seims" role="Lawyer" />
        <ImageCard image={lawyer3} name="Arlene McCoy" role="Lawyer" />
        <ImageCard image={lawyer4} name="Traice Dantini" role="Lawyer" />
        <ImageCard image={lawyer5} name="Kira Zayn" role="Lawyer" />
        <ImageCard image={lawyer6} name="Jessica Robinson" role="Lawyer" />
        <ImageCard image={lawyer7} name="Alvaro A. Llosa" role="Lawyer" />
        <ImageCard image={lawyer8} name="Jacob Lawren" role="Lawyer" />
      </div>
    </section>
  );
}
