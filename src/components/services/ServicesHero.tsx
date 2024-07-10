export default function ServicesHero() {
  return (
    <section className="relative bg-servicesHeroBg bg-center flex flex-col text-white items-center justify-center bg-cover min-h-[40vh] lg:min-h-[60vh] pt-10">
      <div className="h-full w-full absolute inset-0 bg-black opacity-70"></div>
      <h2 className="text-white font-medium text-5xl lg:text-7xl relative mb-5">Services</h2>
      <p className="max-w-[700px] mx-auto text-center relative">
        Our team of seasoned attorneys is committed to delivering tailored solutions, ensuring you receive the attention
        and representation you deserve.
      </p>
    </section>
  );
}
