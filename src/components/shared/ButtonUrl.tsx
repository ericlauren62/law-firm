import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  url: string;
  btntext: string;
  dark?: boolean;
}
export default function ButtonLink({ url, btntext, dark }: ButtonLinkProps) {
  return (
    <Link
      href={url}
      className={`${
        dark ? "bg-primary text-white" : "bg-transparent border shadow-sm"
      } rounded-full inline-flex items-center justify-center h-[50px] px-8`}
    >
      {btntext}
    </Link>
  );
}
