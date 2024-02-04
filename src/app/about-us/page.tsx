import ActionButton from "@/components/ActionButton/ActionButton";
import Marquee from "@/components/Marquee/Marquee";
import { MdPlayArrow } from "react-icons/md";
import { slideData, gridData } from "./data";
import {
  EnumTagEvents,
  WHATSAPP_LINK,
  WHATSAPP_MSG,
} from "@/constants/constants";

const AboutUs = () => {
  return (
    <main className="text-black dark:text-white w-full pt-40">
      <section className="container mx-auto flex flex-col gap-20">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {gridData.map(({ title, text }, index) => (
            <div
              className="flex flex-col gap-6 rounded-2xl py-10 px-4 w-full lg:w-[627px] md:px-16"
              key={index}
            >
              <h2 className="text-4xl font-bold text-zinc-300">
                <span className="text-primary">{title}</span>
              </h2>
              <p className="tracking-normal dark:text-white text-lg font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-12 mb-16">
          <h1 className="text-5xl text-center font-bold dark:text-zinc-300 mt-8">
            <span className="text-primary">Why</span> Choose
            <span className="text-primary"> BYTE BUSTER</span>?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 w-full">
            <Marquee
              slides={{ perView: "auto", spacing: 20 }}
              pauseOnHover
              mode="free-snap"
              slideStyles="flex justify-center items-center cursor-grab"
              animationDuration={100000}
            >
              {slideData.map(({ title, text }, index) => (
                <div
                  className="flex flex-col gap-6 rounded-2xl py-10 px-6 w-full lg:w-[627px] bg-black/70 text-white md:px-16"
                  key={index}
                >
                  <h2 className="text-4xl font-bold text-zinc-300">
                    <span className="text-primary">{title}</span>
                  </h2>
                  <p className="tracking-normal dark:text-white text-lg font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 bg-neutral-900 rounded-2xl py-10 px-10 mb-20 md:px-20">
          <h2 className="text-4xl font-bold text-zinc-300">
            Join <span className="text-primary">BYTE BUSTER</span> Today
          </h2>
          <p className="text-white tracking-normal dark:text-white text-lg font-medium">
            Embark on a transformative educational journey with BYTE BUSTER.
            Join us to acquire the skills, knowledge, and confidence needed to
            shape a successful and fulfilling career in the ever-evolving
            landscape of technology and beyond.
          </p>
          <ActionButton
            isLink
            href={`${WHATSAPP_LINK}?text=${WHATSAPP_MSG}`}
            target="_blank"
            icon={<MdPlayArrow />}
            addTagEvent
            tagEventValue={EnumTagEvents["JOIN-BTN"]}
          >
            Join Byte Buster Now
          </ActionButton>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
