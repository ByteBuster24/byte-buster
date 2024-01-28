import { FC } from "react";
import Image from "next/image";
import { InstructorType } from "./instructors";

type InstructorCardProps = InstructorType & {};

const InstructorCard: FC<InstructorCardProps> = ({ name, img, occupation }) => {
  return (
    <div className="w-80 h-80 overflow-hidden relative tracking-normal">
      <Image
        src={img}
        alt={`${name}'s image Byte Buster'`}
        className="min-h-full"
      />
      <div className="absolute bottom-1.5 w-full">
        <div className="w-9/12 mx-auto bg-white flex flex-col text-black text-center py-1">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs font-medium">{occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
