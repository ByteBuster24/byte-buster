import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import checkDarkIcon from "@/public/assets/icons/check-dark.svg";
import ActionButton from "@/components/ActionButton/ActionButton";
import { whatsappLink, whatsappMsg } from "@/constants/constants";

const ImpossibleSection = () => {
  return (
    <section className="w-full mb-40">
      <div className="container mx-auto flex flex-col items-center gap-10 px-3 text-black dark:text-white sm:px-14 lg:px-20 lg:items-start">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-12 sm:gap-16 lg:w-[525px] lg:gap-28">
            <header>
              <h2 className="font-semibold text-2xl md:text-3xl tracking-[3.2px]">
                Finding it impossible to stand out to recruiters for top remote
                jobs?
              </h2>
            </header>
            <div className="flex flex-col gap-7 tracking-[2.4px]">
              <h3 className="font-medium text-xl sm:text-2xl">
                What if a platform could get you:
              </h3>
              <ul className="flex flex-col gap-7 text-start font-normal text-base sm:text-lg md:text-xl">
                <li className="flex items-center gap-4">
                  <Image src={checkDarkIcon} alt="list check icon" width={35} />
                  <p>Global opportunities, excellent pay</p>
                </li>
                <li className="flex items-center gap-4">
                  <Image src={checkDarkIcon} alt="list check icon" width={35} />
                  <p>The flexibility of remote work</p>
                </li>
                <li className="flex items-center gap-4">
                  <Image src={checkDarkIcon} alt="list check icon" width={35} />
                  <p>
                    Exciting problems to work on,
                    <br /> with interesting people.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>

        <ActionButton
          icon={<MdPlayArrow />}
          isLink
          href={`${whatsappLink}?text=${whatsappMsg}`}
          target="_blank"
        >
          Join Byte Buster now
        </ActionButton>
      </div>
    </section>
  );
};

export default ImpossibleSection;
