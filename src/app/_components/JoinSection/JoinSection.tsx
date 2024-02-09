import { MdPlayArrow } from "react-icons/md";
import ActionButton from "@/components/ActionButton/ActionButton";
import {
  EnumTagEvents,
  WHATSAPP_LINK,
  WHATSAPP_MSG,
} from "@/constants/constants";

const JoinSection = () => {
  return (
    <section className="w-full text-black dark:text-white overflow-hidden py-32 mb-40">
      <div className="container mx-auto text-center flex gap-10 flex-col justify-around tracking-tight lg:flex-row lg:gap-0">
        <header className="font-bold text-3xl sm:text-4xl">
          <h2 className="mx-auto lg:w-[500px]">
            Join the most sought-out
            <span className="text-primary"> developer collective</span>
          </h2>
        </header>
        <div className="flex flex-col font-semibold items-center gap-10">
          <p className="mx-auto lg:w-[425px]">
            We’ll take care of the boring hiring bits, so you can enjoy the
            flexibility and freedom you deserve as a topdeveloper.
          </p>
          <div className="hidden lg:block">
            <ActionButton
              icon={<MdPlayArrow />}
              isLink
              href={`${WHATSAPP_LINK}?text=${WHATSAPP_MSG}`}
              target="_blank"
              addTagEvent
              tagEventValue={EnumTagEvents["JOIN-BTN"]}
            >
              Join Byte Buster Now
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
