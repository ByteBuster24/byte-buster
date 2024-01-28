import Marquee from "@/components/Marquee/Marquee";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonials";

const TestimonialSection = () => {
  return (
    <section className="w-full flex flex-col gap-8 text-black dark:text-white overflow-hidden sm:gap-12 lg:gap-16 pb-40">
      <header>
        <h2 className="mx-auto font-bold text-3xl text-center sm:text-4xl lg:w-[800px] lg:text-5xl">
          <span className="text-primary">Testimonials</span>
        </h2>
      </header>
      <div className="flex flex-col gap-8">
        <Marquee
          slides={{ spacing: 32, perView: "auto" }}
          drag
          pauseOnHover
          mode="free"
          animationDuration={100000}
          containerStyles="cursor-grab"
        >
          {testimonials[0].map((data, index) => (
            <TestimonialCard key={index} data={data} isDark={!(index & 1)} />
          ))}
        </Marquee>
        <Marquee
          slides={{ spacing: 32, perView: "auto" }}
          drag
          pauseOnHover
          rtl
          mode="free"
          animationDuration={100000}
          containerStyles="cursor-grab"
        >
          {testimonials[0].reverse().map((data, index) => (
            <TestimonialCard key={index} data={data} isDark={!!(index & 1)} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSection;
