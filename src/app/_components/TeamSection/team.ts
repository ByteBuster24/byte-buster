import { StaticImageData } from "next/image";
import ajayImg from "@/public/assets/home/team/Ajay.webp";
import babitaImg from "@/public/assets/home/team/Babita.webp";
import sakshiImg from "@/public/assets/home/team/Sakshi.webp";
import sarthakImg from "@/public/assets/home/team/Sarthak.webp";
import lokeshImg from "@/public/assets/home/team/Lokesh.webp";
import dishikaImg from "@/public/assets/home/team/Dishika.webp";
import aryanImg from "@/public/assets/home/team/Aryan.webp";

interface MemberType {
  name: string;
  designation: string;
  img: StaticImageData;
  socials: {
    linkedIn?: string;
    instagram?: string;
  };
}

const teamMembers: MemberType[] = [
  {
    name: "Ajay Jha",
    designation: "Chairman",
    img: ajayImg,
    socials: {},
  },
  {
    name: "Babita Jha",
    designation: "Chairman",
    img: babitaImg,
    socials: {},
  },
  {
    name: "Sakshi Jha",
    designation: "Founder, CEO",
    img: sakshiImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/sakshi-sonam-jha-98519b223/",
    },
  },
  {
    name: "Sarthak Punasiya",
    designation: "COO, CMO",
    img: sarthakImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/sarthak-punasiya-59aa6b250/",
    },
  },
  {
    name: "Lokesh Ojha",
    designation: "CFO, MD",
    img: lokeshImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/lokesh-vishwakarma-ba1aa720a/",
    },
  },
  {
    name: "Dishika Yadav",
    designation: "CAO, MD",
    img: dishikaImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/dishika-yadav-81882b262/",
    },
  },
  {
    name: "Aryan Kumar",
    designation: "CTO",
    img: aryanImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/aryan-kumar-7574b5228/",
    },
  },
];

export default teamMembers;
export type { MemberType };
