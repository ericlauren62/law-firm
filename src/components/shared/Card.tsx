interface CardProps {
  dark?: boolean;
  title: string;
  number: string;
  description: string;
}
export default function Card({ dark, title, number, description }: CardProps) {
  return (
    <div className={`mb-8 p-6 ${dark ? "bg-black text-white lg:relative lg:left-10" : "bg-secondary"}`}>
      <div className="flex justify-between items-center mb-5">
        <h3 className="lg:text-2xl font-medium">{title}</h3>
        <div>{number}</div>
      </div>
      <p>{description}</p>
    </div>
  );
}
