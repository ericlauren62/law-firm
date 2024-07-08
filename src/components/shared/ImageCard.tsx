import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
  image: StaticImageData;
  name: string;
  role: string;
}

export default function ImageCard({ image, name, role }: ImageCardProps) {
  return (
    <div>
      <Image
        src={image}
        alt="our lawyers image"
        height={160}
        width={160}
        objectFit="cover"
        objectPosition="center"
        className="rounded-[100%] mb-2"
      />
      <div className="text-center max-w-[150px]">
        <h3 className="mb-1 font-medium">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
