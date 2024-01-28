import { FC } from "react";
import Image from "next/image";
import starIcon from "@/public/assets/icons/star.svg";
import { TestimonialType } from "./testimonials";

interface TestimonialCardProps {
  isDark?: boolean;
  data: TestimonialType;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ data, isDark }) => {
  const stars = Array.from({ length: data.rating });

  return (
    <div
      className={`min-w-[560px] max-w-[418px] h-[375px] rounded-2xl px-10 py-12 flex-shrink-0 tracking-normal font-medium text-lg flex flex-col justify-between ${
        isDark ? "bg-[#5B667B] text-white" : "bg-[#FCE8FF] text-black"
      }`}
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-1 text-yellow-500">
          {stars.map((_, index) => (
            <Image src={starIcon} alt="start icon Byte Buster" key={index} />
          ))}
        </div>

        <p>&quot;{data.message}&quot;</p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 overflow-hidden rounded-full">
          <Image
            src={data.img}
            alt={`${data.name}'s picture'`}
            className="min-h-full"
          />
        </div>
        <div className="text-base">
          <p>{data.name}</p>
          <p className="text-sm">{data.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
