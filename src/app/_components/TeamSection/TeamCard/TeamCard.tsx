import { FC } from "react";
import Image from "next/image";
import { CardStylesType } from "@/app/_components/TeamSection/TeamSection";
import { MemberType } from "@/app/_components/TeamSection/team";
import instagramLogo from "@/public/assets/logo/instagram.svg";
import linkedInLogo from "@/public/assets/logo/linkedin.svg";

import styles from "./TeamCard.module.scss";
import Link from "next/link";

type TeamCardProps = Partial<CardStylesType> &
  MemberType & {
    isSpecialCard?: boolean;
  };

const TeamCard: FC<TeamCardProps> = ({
  name,
  designation,
  img,
  zIndex = "auto",
  background,
  left = 0,
  bottom = 0,
  rotate = "0deg",
  isSpecialCard = false,
  socials,
}) => {
  return (
    <div
      className={`tracking-normal min-w-[260px] w-[260px] h-[428px] mx-auto flex flex-col pt-2.5 justify-between text-center overflow-hidden duration-300 outline-0 group/alumni ${
        isSpecialCard
          ? "absolute top-auto right-auto rounded-t-2xl"
          : "relative rounded-2xl"
      } ${background} ${styles.cardWrapper}`}
      style={{
        zIndex: zIndex,
        left: left,
        bottom: bottom,
        rotate: rotate,
      }}
    >
      <div className="flex justify-between items-center py-1.5 bg-white/80 pl-4">
        <div className="flex flex-col w-full gap-0.5 text-left">
          <p className="font-bold leading-[100%]">{name}</p>
          <p className="font-medium leading-[125%]">{designation}</p>
        </div>
        <div className="flex justify-end items-center">
          {socials.instagram && (
            <Link
              href={socials.instagram}
              target="_blank"
              className="w-10 h-auto"
            >
              <Image src={instagramLogo} alt="instagram logo icon" />
            </Link>
          )}
          {socials.linkedIn && (
            <Link
              href={socials.linkedIn}
              target="_blank"
              className="w-10 h-auto"
            >
              <Image src={linkedInLogo} alt="linkedIn logo icon" />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-[87%] relative">
        <Image
          src={img}
          loading="lazy"
          alt=""
          className="w-full h-full overflow-hidden object-cover bottom-0 right-0"
        />
      </div>
      {/*
        <div
          className={`opacity-100 group-hover/alumni:opacity-0 z-[6] rounded-t-2xl absolute top-0 right-0 bottom-0 left-0 mix-blend-color group-hover/alumniContainer:hidden ${background}`}
        />
      */}
      <div className="bg-black opacity-50 absolute top-0 right-0 bottom-0 left-0 hidden group-hover/alumni:hidden group-hover/alumniContainer:block" />
    </div>
  );
};

export default TeamCard;
