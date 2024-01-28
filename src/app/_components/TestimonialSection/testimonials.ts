import { StaticImageData } from "next/image";
import deepakPrakashImg from "@/public/assets/home/testimonials/deepak_prakash.webp";
import saniaPingleImg from "@/public/assets/home/testimonials/sania_pingle.webp";
import shikhaMandreImg from "@/public/assets/home/testimonials/shikha_mandre.webp";
import ishwaShahImg from "@/public/assets/home/testimonials/ishwa_shah.webp";
import prashantImg from "@/public/assets/home/testimonials/prashant.webp";
import bhaveshBahadImg from "@/public/assets/home/testimonials/bhavesh_bahad.webp";
import ramSharmaImg from "@/public/assets/home/testimonials/ram_sharma.webp";
import bhaveshGodwaniImg from "@/public/assets/home/testimonials/bhavesh_godwani.webp";
import ayanImg from "@/public/assets/home/testimonials/ayan.webp";
import aasthaJainImg from "@/public/assets/home/testimonials/aastha_jain.webp";

export interface TestimonialType {
  name: string;
  message: string;
  img: StaticImageData;
  occupation: string;
  rating: number;
}

const testimonials: TestimonialType[][] = [
  [
    {
      name: "Deepak Prakash",
      message:
        "ByteBuster has been a game-changer for me! The programming concepts were explained in such a simple and effective manner that even a beginner like me could grasp them easily. Thanks to ByteBuster, coding is now my second language!",
      img: deepakPrakashImg,
      occupation: "IIT Patna",
      rating: 5,
    },
    {
      name: "Sania Pingle",
      message:
        "ByteBuster is not just a coaching institute; it's a learning family. The instructors are approachable, and the interactive sessions made the complex coding world seem like a breeze. I'm proud to be a ByteBuster alumni!",

      img: saniaPingleImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Shikha Mandre",
      message:
        "I can't thank ByteBuster enough for the wonderful learning experience. The supportive teachers and hands-on approach to programming made the classes enjoyable. I feel confident in my coding skills, all thanks to ByteBuster!",
      img: shikhaMandreImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Ishwa Shah",
      message:
        "The programming journey with ByteBuster was amazing. The step-by-step guidance and practical examples helped me build a strong foundation in coding. ByteBuster made coding fun and accessible to everyone.",
      img: ishwaShahImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Prashant",
      message:
        "ByteBuster has truly simplified the coding process for me. The well-structured curriculum and constant support from the faculty have made learning programming an enjoyable experience. I highly recommend ByteBuster to anyone interested in coding.",
      img: prashantImg,
      occupation: "",
      rating: 4,
    },
    {
      name: "Bhavesh Bahad",
      message:
        "ByteBuster turned my fear of coding into a passion. The teaching methods are so simple and effective that even the most complex algorithms felt manageable. I owe my programming success to ByteBuster!",
      img: bhaveshBahadImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Ram Sharma",
      message:
        "ByteBuster is the place to be for aspiring programmers. The clear explanations, real-world examples, and supportive environment create the perfect learning atmosphere. ByteBuster has set me on the path to a successful programming career.",
      img: ramSharmaImg,
      occupation: "",
      rating: 4,
    },
    {
      name: "Bhavesh Godwani",
      message:
        "I am grateful for the solid programming foundation ByteBuster provided. The interactive classes, regular assessments, and personalized attention from the instructors ensured that I was well-prepared for real-world coding challenges. Thank you, ByteBuster!",
      img: bhaveshGodwaniImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Ayan",
      message:
        "ByteBuster exceeded my expectations in every way. The coaching institute simplified programming concepts, making them easy to understand. The mentors are not just teachers; they are guides who genuinely care about your success in the coding world.",
      img: ayanImg,
      occupation: "",
      rating: 5,
    },
    {
      name: "Aastha Jain",
      message:
        "Choosing ByteBuster was the best decision I made for my programming journey. The well-structured courses, hands-on projects, and supportive faculty made the learning process enjoyable. ByteBuster has played a significant role in shaping my programming skills.",
      img: aasthaJainImg,
      occupation: "",
      rating: 5,
    },
  ],
];

export default testimonials;
