import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};

export default function page() {
  return (
    <main>
      <BlogHero />
      <BlogList />
    </main>
  );
}
