import { StaticImageData } from "next/image";
import iainWhiteImg from "@/public/assets/home/mentors/iain_white.webp";
import christianMwilaImg from "@/public/assets/home/mentors/christian_mwila.webp";
import rituMaheshwariImg from "@/public/assets/home/mentors/ritu_maheshwari.webp";
import garvitRajputImg from "@/public/assets/home/mentors/garvit_rajput.webp";
import deepakPrakashImg from "@/public/assets/home/mentors/deepak_prakash.webp";
import shivamSinghImg from "@/public/assets/home/mentors/shivam_singh.webp";

interface InstructorType {
  name: string;
  img: StaticImageData;
  occupation: string;
}

const instructors: InstructorType[] = [
  {
    name: "Iain White",
    img: iainWhiteImg,
    occupation: "CTO at MER Solutions Asia Pacific | Australia",
  },
  {
    name: "Christian Mwila",
    img: christianMwilaImg,
    occupation:
      "Executive Director, Senior Consultant at ZESCO | Washington US",
  },
  {
    name: "Dr. Ritu Maheshwari",
    img: rituMaheshwariImg,
    occupation: "IIM, Indore",
  },
  {
    name: "Garvit Rajput",
    img: garvitRajputImg,
    occupation: "Amazon, SDE in Moengage",
  },
  {
    name: "Deepak Prakash",
    img: deepakPrakashImg,
    occupation: "IIT, Patna",
  },
  {
    name: "Shivam Singh",
    img: shivamSinghImg,
    occupation:
      "Crypto professional trader & android developer | youtuber | Influencer",
  },
];

export default instructors;
export type { InstructorType };
