import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thommessen and Paul Law Firm",
  description:
    "Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My Awesome Website</title>
        <meta name="description" content="Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases." />
        <meta name="keywords" content="thommessenandpaul thommessen&paul lawfirm law legal lawyer" />
        <meta property="og:title" content="Thommessen and Paul Law Firm" />
        <meta property="og:description" content="Experienced, award-winning attorneys Concentrating in commercial litation, complex business litigation, personal injury and committed to helping clients solve their most complex cases." />
        <meta property="og:image" content="/images/favicon-16X16.png" />
        <meta property="og:url" content="https://www.thommessenpaullegal.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.thommessenpaullegal.com" />
      </Head>
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
