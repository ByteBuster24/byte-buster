import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - BYTE BUSTER: Empowering Minds, Transforming Futures",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
