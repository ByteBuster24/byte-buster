import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackgroundWrapper from "@/components/BackgroundWrapper/ThemeWrapper";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Buster: Empowering Minds, Transforming Futures",
  description:
    "BYTE BUSTER, is your gateway to comprehensive and cutting-edge education in both IT and non-IT domains. Our mission is to provide a dynamic and inclusive learning environment. Our diverse offerings include in-demand courses such as Machine Learning, Data Science, Python, Artificial Intelligence, Digital Marketing, and many more. Learn from the best in the industry with our team of experienced and dedicated instructors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-black dark:text-white tracking-widest overflow-x-hidden dark bg-slate-950`}
      >
        <ThemeProvider>
          <BackgroundWrapper>
            <Header />
            {children}
            <Footer />
          </BackgroundWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
