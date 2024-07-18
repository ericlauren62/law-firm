import { AccordionItem } from "@/types/AccordionItem";
import Accordion from "@/utils/Accordion";

export default function ServicesFirstSection() {
  const accordionData: AccordionItem[] = [
    {
      id: "1",
      title: "Large and Small Firm Service",
      content:
        "Some of the largest firms have repeatable processes that they bring to bear on every case, but unless you are a Fortune 500 company, they probably won’t give you the time of day.  We bring those same proven processes for winning cases to bear even for our smallest clients.",
    },
    {
      id: "2",
      title: "Courtroom Experience Is Critical",
      content:
        "Some attorneys have little to no experience in an actual courtroom.  We have been there many times, and we’ve got the battle scars to prove it. That experience is invaluable, and it can’t be taught or read about in a book — it must be earned in the trenches. We aren’t afraid to fight for you in event of a trial.",
    },
    {
      id: "3",
      title: "Lawyers who care deeply",
      content:
        "We promise to treat you with respect and care. We pride ourselves on helping our clients understand all the aspects of the case and our approach, to help alleviate their worries.  It’s the kind of personal attention you don’t often find from big firms.",
    },
    {
      id: "4",
      title: "Recognized Among The Best",
      content:
        "In addition to the numerous awards we have received, our process is featured in the book “Rules of the Road: A Plaintiff Lawyer’s Guide to Proving Liability” (2nd edition), by Rick Friedman & Patrick Malone.",
    },
  ];
  return (
    <section className="container py-16 grid gap-y-20 lg:gap-y-0  lg:gap-x-32 lg:grid-cols-2">
      <div>
        <h2 className="font-medium text-2xl mb-8">We will help you navigate through the difficulties of your case</h2>
        <p className="mb-4">
          We understand that legal difficulties can bring a high level of anxiety, so we work to ensure you fully
          understand our approach from the beginning. In developing that approach, we combine the processes and
          strategies used by the largest firms with tried and tested courtroom experience to give you the best chance of
          success. It’s an ethos that has won praise from both our clients and our colleagues.
        </p>
        <ul className="grid gap-y-1 list-disc list-inside">
          <li>Our process is so successful, it is studied by other attorneys</li>
          <li>We work not only to help you win your case, but to alleviate your anxiety</li>
          <li>You will be working with honest, experienced, skilled and aggressive attorneys</li>
        </ul>
      </div>
      <div>
        <Accordion accordionData={accordionData} />
      </div>
    </section>
  );
}
