import { MdPlayArrow } from "react-icons/md";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import ActionButton from "@/components/ActionButton/ActionButton";

const HeroSection = () => {
  return (
    <section className="w-full py-32 flex justify-center items-center dark:text-white text-black lg:min-h-screen pb-40 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-45% lg:to-55% to-white dark:to-black backdrop-blur-xl">
      <div className="container mx-auto flex flex-col gap-12 items-center justify-around lg:flex-row lg:items-start">
        <div className="flex flex-col gap-16 items-center justify-center my-auto lg:gap-32 lg:items-start">
          <div className="lg:w-[555px] flex flex-col gap-6 text-center lg:text-left">
            <h1 className="dark:text-white text-4xl sm:text-5xl font-bold leading-tight lg:leading-[93px] lg:text-7xl">
              <span className="text-primary">Unlocking </span>Potential in
              <br className="sm:block hidden" /> Every
              <span className="text-primary"> Byte</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-8 lg:gap-4 lg:flex-row">
            <ActionButton text="Explore our courses" />
            <PrimaryButton
              isLink
              href="/"
              text="Join Byte Busters Now"
              icon={<MdPlayArrow />}
            />
          </div>
        </div>
        <div className="w-9/12 md:w-8/12 lg:w-[40%]">
          <video loop autoPlay muted className="dark:hidden">
            <source src="/assets/home/heroGlobe.mp4" type="video/mp4" />
          </video>
          <video loop autoPlay muted className="hidden dark:block">
            <source src="/assets/home/heroGlobeDark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
