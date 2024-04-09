import ajayImg from "@/public/assets/home/team/Ajay.webp";
import babitaImg from "@/public/assets/home/team/Babita.webp";
import dishikaImg from "@/public/assets/home/team/Dishika.webp";
import lokeshImg from "@/public/assets/home/team/Lokesh.webp";
import rehantImg from "@/public/assets/home/team/Rehant.webp";
import sakshiImg from "@/public/assets/home/team/Sakshi.webp";
import sarthakImg from "@/public/assets/home/team/Sarthak.webp";
import harshImg from "@/public/assets/home/team/Harsh.webp";
import { StaticImageData } from "next/image";

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
      instagram: "https://www.instagram.com/sakshijha.ai/",
    },
  },
  {
    name: "Sarthak Punasiya",
    designation: "CMO",
    img: sarthakImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/sarthak-punasiya-59aa6b250/",
      instagram: "https://www.instagram.com/sarthakpunasiya/",
    },
  },
  {
    name: "Lokesh Ojha",
    designation: "CFO",
    img: lokeshImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/lokesh-vishwakarma-ba1aa720a/",
      instagram: "https://www.instagram.com/lokesh_ojha_402/",
    },
  },
  {
    name: "Dishika Yadav",
    designation: "CAO",
    img: dishikaImg,
    socials: {
      linkedIn: "https://www.linkedin.com/in/dishika-yadav-81882b262/",
      instagram: "https://www.instagram.com/_dishikayadav/",
    },
  },
  {
    name: "Rehant Roy",
    designation: "MD",
    img: rehantImg,
    socials: {},
  },
  {
    name: "Harsh Soni",
    designation: "COO",
    img: harshImg,
    socials: {},
  },
];

export default teamMembers;
export type { MemberType };
