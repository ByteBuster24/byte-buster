import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import fullLogo from "@/public/assets/logo/logo-full.webp";
import linkedInIcon from "@/public/assets/logo/linkedin.svg";
import instagramIcon from "@/public/assets/logo/instagram.svg";
import facebookIcon from "@/public/assets/logo/facebook.svg";
import youtubeIcon from "@/public/assets/logo/youtube.svg";

const Footer = () => {
  return (
    <section className="w-full text-white tracking-normal">
      <div className="container mx-auto rounded-t-[20%] flex flex-col gap-16 py-12 bg-neutral-800/80 sm:rounded-t-[148px] overflow-hidden text-wrap">
        <div>
          <Image
            src={fullLogo}
            alt="Byte Buster Logo"
            width={390}
            className="mx-auto w-[80%] sm:w-[390px]"
          />
        </div>
        <div className="flex flex-col px-2 gap-16 lg:flex-row lg:justify-around sm:px-20">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li className="text-white hover:text-white/60">
              <Link href="/" className="flex gap-3 items-center">
                <MdArrowForwardIos /> <p>Home</p>
              </Link>
            </li>
            <li className="text-white hover:text-white/60">
              <Link href="/about-us" className="flex gap-3 items-center">
                <MdArrowForwardIos /> <p>About Us</p>
              </Link>
            </li>
            <li className="text-white hover:text-white/60">
              <Link href="/#courses" className="flex gap-3 items-center">
                <MdArrowForwardIos /> <p>Services</p>
              </Link>
            </li>
            <li className="text-white hover:text-white/60">
              <Link href="/" className="flex gap-3 items-center">
                <MdArrowForwardIos /> <p>Projects</p>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-6 lg:w-3/12">
            <div>
              <h2 className="font-bold">Address:</h2>
              <p className="font-semibold">
                Office number 118, First floor Shagun Tower plot no. 7 PU 4 AB
                Road, Vijaynagar, Indore
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                <h2 className="font-bold">Phone:</h2>
                <p className="font-semibold">+919131555202</p>
              </div>
              <div className="flex gap-1">
                <h2 className="font-bold">Email:</h2>
                <p className="font-semibold">bytebuster23@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 lg:flex-col">
            <Link href="/">
              <Image src={linkedInIcon} alt="LinkedIn Icon" width={38} />
            </Link>
            <Link href="/">
              <Image
                src={instagramIcon}
                alt="LinkedIn Icon"
                width={38}
                className="-translate-x-1"
              />
            </Link>
            <Link href="/">
              <Image
                src={facebookIcon}
                alt="LinkedIn Icon"
                width={38}
                className="-translate-x-1"
              />
            </Link>
            <Link href="/">
              <Image src={youtubeIcon} alt="LinkedIn Icon" width={38} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
