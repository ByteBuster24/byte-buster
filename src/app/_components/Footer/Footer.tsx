import Link from "next/link";
import Image from "next/image";
import fullLogo from "@/public/assets/logo/logo-full.webp";
import linkedInIcon from "@/public/assets/logo/linkedin.svg";
import instagramIcon from "@/public/assets/logo/instagram.svg";
import facebookIcon from "@/public/assets/logo/facebook.svg";
import youtubeIcon from "@/public/assets/logo/youtube.svg";
import { MdMail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-white tracking-normal" id="footer">
      <div className="container mx-auto flex flex-col gap-10 pt-20 pb-10 bg-neutral-800/80 sm:rounded-t-[148px] overflow-hidden text-wrap">
        <div className="flex flex-col flex-wrap gap-14 justify-lround px-[5%] sm:flex-row lg:flex-nowrap">
          <div className="flex flex-col gap-8 sm:w-[45%] lg:w-[25%]">
            <Link href="/">
              <Image src={fullLogo} alt="Byte Buster Logo" width={250} />
            </Link>
            <p>
              BYTE BUSTER, is your gateway to comprehensive and cutting-edge
              education in both IT and non-IT domains. Our mission is to provide
              a dynamic and inclusive learning environment.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:w-[45%] lg:w-[25%] lg:items-center">
            <h1 className="font-semibold text-2xl">Know Us</h1>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li className="text-white hover:text-white/60">
                <Link href="/" className="flex gap-3 items-center">
                  <p>Home</p>
                </Link>
              </li>
              <li className="text-white hover:text-white/60">
                <Link href="/about-us" className="flex gap-3 items-center">
                  <p>About Us</p>
                </Link>
              </li>
              <li className="text-white hover:text-white/60">
                <Link href="/#courses" className="flex gap-3 items-center">
                  <p>Services</p>
                </Link>
              </li>
              <li className="text-white hover:text-white/60">
                <Link href="/" className="flex gap-3 items-center">
                  <p>Projects</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 sm:w-[45%] lg:w-[25%]">
            <h1 className="font-semibold text-2xl">Follow Us</h1>
            <div className="flex flex-col gap-5 font-medium">
              <Link
                href="https://www.linkedin.com/company/byte-buster-it-institute/"
                target="_blank"
                className="flex items-center"
              >
                <Image src={linkedInIcon} alt="LinkedIn Icon" width={38} />
                <p>LinkedIn</p>
              </Link>
              <Link
                href="https://www.instagram.com/byte_buster_institute/"
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram Icon"
                  width={38}
                  className="-translate-x-1"
                />
                <p>Instagram</p>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61554778721548&mibextid=JRoKGi"
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook Icon"
                  width={38}
                  className="-translate-x-1"
                />
                <p>Facebook</p>
              </Link>
              <Link
                href="https://www.youtube.com/@Byte_Buster"
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={youtubeIcon}
                  alt="Youtube Icon"
                  width={38}
                  className="-translate-x-0.5"
                />
                <p>Youtube</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:w-[45%] lg:w-[25%]">
            <h1 className="font-semibold text-2xl">Address</h1>
            <div className="flex flex-col gap-5">
              <div>
                <FaLocationDot className="float-left mr-3 translate-y-1" />
                <p>
                  Office number 118, First floor Shagun Tower plot no. 7 PU 4 AB
                  Road, Vijaynagar, Indore
                </p>
              </div>
              <div>
                <FaPhone className="float-left mr-3 translate-y-1" />
                <p>+919131555202</p>
              </div>
              <div>
                <MdMail className="float-left mr-3 translate-y-1" />
                <p>bytebuster23@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
