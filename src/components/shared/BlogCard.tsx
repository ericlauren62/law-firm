import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  url: string;
}

export default function BlogCard({ title, image, description, url }: BlogCardProps) {
  return (
    <div className="flex flex-col justify-between">
      <div className="mb-5">
        <Image src={image} alt="featured Img" className="h-[260px] w-full object-cover object-center" />
      </div>
      <div>
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="mb-5">{description}</p>
      </div>
      <Link href={url} className="border-b border-black pb-1 w-[108px]">
        Read Full Post
      </Link>
    </div>
  );
}
