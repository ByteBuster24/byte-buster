import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import ActionButton from "@/components/ActionButton/ActionButton";
import Marquee from "@/components/Marquee/Marquee";
import InstructorCard from "./InstructorsCard";
import lightningDarkIcon from "@/public/assets/icons/lightning-dark.svg";
import gradientBall from "@/public/assets/home/instructors_gradient_ball.png";
import instructors from "./instructors";
import { whatsappLink, whatsappMsg } from "@/constants/constants";

const InstructorsSection = () => {
  return (
    <section className="w-full text-black dark:text-white overflow-hidden mb-40 relative pb-20">
      <div className="container mx-auto flex flex-col gap-16 relative z-[1]">
        <header className="flex flex-col gap-16 items-center text-center font-bold">
          <div className="flex flex-col gap-10 md:gap-6">
            <h1 className="text-5xl md:text-6xl">
              Our <span className="text-primary">instructors</span> set us apart
            </h1>
            <h2 className="text-lg">
              People who&apos;ve been there and done it, now helping you do it
              as well.
            </h2>
          </div>
          <ActionButton
            icon={<MdPlayArrow />}
            isLink
            href={`${whatsappLink}?text=${whatsappMsg}`}
            target="_blank"
          >
            Join Byte Buster Now
          </ActionButton>
        </header>
        <main className="secondary-pane px-0 flex flex-col justify-evenly lg:rounded-[60px] lg:px-16 lg:flex-row">
          <div className="flex flex-col gap-12 px-5 py-14 lg:gap-16 lg:py-20 sm:px-8 lg:px-0">
            <h2 className="px-6 py-3.5 border border-black dark:border-white font-medium text-lg w-fit mx-auto lg:mx-0">
              Mentors
            </h2>
            <h3 className="font-bold text-3xl md:text-4xl lg:w-[500px]">
              We have picked the best for you...
            </h3>
            <ul className="flex flex-col gap-8 pr-8 w-full font-medium tracking-tight text-sm leading-6 sm:text-base md:text-lg md:w-[600px]">
              <li className="flex items-center gap-4">
                <Image src={lightningDarkIcon} alt="list icon" width={35} />
                <p>
                  People who&apos;ve cracked dream companies like Google,
                  Directi, Amazon, CodeNation, Goldman Sachs etc.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Image src={lightningDarkIcon} alt="list icon" width={35} />
                <p>People rated highly on various online coding platforms.</p>
              </li>
              <li className="flex items-center gap-4">
                <Image src={lightningDarkIcon} alt="list icon" width={35} />
                <p>People with prior teaching experience.</p>
              </li>
              <li className="flex items-center gap-4">
                <Image src={lightningDarkIcon} alt="list icon" width={35} />
                <p>
                  More people who are IIT alumni, have been ICPC World Finalists
                  joining soon..
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full mb-20 h-80 lg:mb-0 lg:w-80 lg:h-[714px]">
            <Marquee
              animationDuration={25000}
              slides={{ perView: "auto", spacing: 20 }}
              breakpoints={{
                "(min-width: 1024px)": {
                  loop: true,
                  vertical: true,
                  slides: { perView: 2 },
                },
              }}
              pauseOnHover
              containerStyles="cursor-grab h-80 lg:h-full"
            >
              {instructors.map((data, index) => (
                <InstructorCard {...data} key={index} />
              ))}
            </Marquee>
          </div>
        </main>
      </div>

      {/* Background */}
      <div className="absolute top-[15%] -left-80 lg:top-0">
        <Image
          src={gradientBall}
          alt="Byte Buster asset"
          className="w-[600px] lg:w-[850px]"
        />
      </div>
      <div className="absolute -bottom-[10%] -right-56 lg:-bottom-1/4">
        <Image
          src={gradientBall}
          alt="Byte Buster asset"
          className="w-[600px] lg:w-[850px]"
        />
      </div>
    </section>
  );
};

export default InstructorsSection;
