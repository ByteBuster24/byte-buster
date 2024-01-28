import { StaticImageData } from "next/image";
import iainWhiteImg from "@/public/assets/home/mentors/iain_white.webp";
import christianMwilaImg from "@/public/assets/home/mentors/christian_mwila.webp";
import rituMaheshwariImg from "@/public/assets/home/mentors/ritu_maheshwari.webp";
import garvitRajputImg from "@/public/assets/home/mentors/garvit_rajput.webp";
import instructorImg from "@/public/assets/home/mentors/instructor.webp";

interface InstructorType {
  name: string;
  img: StaticImageData;
  occupation: string;
}

const instructors: InstructorType[] = [
  { name: "Iain White", img: iainWhiteImg, occupation: "CTO @ White Internet" },
  {
    name: "Christian Mwila",
    img: christianMwilaImg,
    occupation: "Executive Director & Return on Investment Head",
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
    name: "More amazing Instructors Joining Soon...",
    img: instructorImg,
    occupation: "",
  },
];

export default instructors;
export type { InstructorType };
