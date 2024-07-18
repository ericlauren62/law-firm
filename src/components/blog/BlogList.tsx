import BlogCard from "../shared/BlogCard";
import realestate from "/public/images/realestate.jpg";
import injury from "/public/images/injury.jpg";
import childcustody from "/public/images/childcustody.jpg";
import business from "/public/images/featuredimg1.jpg";
import estateplanning from "/public/images/featuredimg2.jpg";
import navigatingdivorce from "/public/images/featuredimg3.jpg";

export default function BlogList() {
  return (
    <section className="container grid lg:grid-cols-3 lg:gap-x-5 gap-y-10 py-20">
      <BlogCard
        title="Securing your family's future"
        image={realestate}
        description="We debunk myths surrounding visas, providing accurate information to help you make informed decisions."
        url=""
      />
      <BlogCard
        title="Navigating child custody disputes"
        image={childcustody}
        description="We debunk myths surrounding visas, providing accurate information to help you make informed decisions."
        url=""
      />
      <BlogCard
        title="The basics of personal injury claims"
        image={injury}
        description="We debunk myths surrounding visas, providing accurate information to help you make informed decisions."
        url=""
      />
      <BlogCard
        title="The legal side of starting business"
        image={business}
        description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
        url=""
      />
      <BlogCard
        title="The importance of estate planning"
        image={estateplanning}
        description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
        url=""
      />
      <BlogCard
        title="Navigating divorce: step-by-step guide"
        image={navigatingdivorce}
        description="With a solid strategy, our team will work diligently to execute the plan and advocate for your rights."
        url=""
      />
    </section>
  );
}
