import BlogCard from "../shared/BlogCard";
import ButtonLink from "../shared/ButtonUrl";
import featuredImg1 from "/public/images/featuredImg1.jpg";
import featuredImg2 from "/public/images/featuredImg2.jpg";
import featuredImg3 from "/public/images/featuredImg3.jpg";

export default function FeaturedNews() {
  return (
    <section className="container py-20">
      <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between mb-20">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl leading-[1.2em] font-medium mb-3">Latest news</h2>
          <p>We prioritize our {"client's"} needs, understanding that each case is unique.</p>
        </div>
        <ButtonLink btntext="Explore All" dark url="/blog" />
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-x-10">
        <BlogCard
          title="The legal side of starting business"
          image={featuredImg1}
          description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
          url="/blog"
        />
        <BlogCard
          title="The importance of estate planning"
          image={featuredImg2}
          description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
          url="/blog"
        />
        <BlogCard
          title="Navigating divorce: step-by-step guide"
          image={featuredImg3}
          description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
          url="/blog"
        />
      </div>
    </section>
  );
}
