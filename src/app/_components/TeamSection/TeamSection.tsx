import TeamCard from "@/components/TeamCard/TeamCard";
import Carousel from "@/components/Carousel/Carousel";
import teamMembers from "./team";

const TeamSection = () => {
  return (
    <section className="w-full py-20 mb-40 bg-gradient-to-b from-transparent to-primary/50 lg:pb-0 overflow-hidden">
      <div className="container mx-auto flex flex-col gap-12 lg:gap-16">
        <header>
          <h2 className="text-black dark:text-white text-center font-bold text-4xl md:text-5xl">
            Check out our <span className="text-primary">Team</span>
          </h2>
        </header>
        <main>
          <div className="hidden lg:block h-[500px] relative w-full max-w-[1440px] mx-auto group/alumniContainer">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                isSpecialCard={true}
                {...member}
                {...cardStyles[index]}
              />
            ))}
          </div>
          <Carousel
            className="lg:hidden"
            autoplay={{ delay: 5000 }}
            loop
            showArrows
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            centeredSlides
            effect="coverflow"
            coverflowEffect={{ slideShadows: false }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            activeSlideClasses=""
            inactiveSlideClasses="scale-[.85]"
          >
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                background={cardStyles[index].background}
                {...member}
              />
            ))}
          </Carousel>
        </main>
      </div>
    </section>
  );
};

export type CardStylesType = {
  zIndex: number;
  background: string;
  bottom: string;
  left: string;
  rotate: string;
};

const cardStyles: CardStylesType[] = [
  // Ajay Jha
  {
    zIndex: 9,
    background: "bg-pink-400",
    bottom: "-7%",
    left: "13%",
    rotate: "-3deg",
  },
  // Babita Jha
  {
    zIndex: 7,
    background: "bg-violet-500",
    bottom: "-11%",
    left: "45%",
    rotate: "-2.77deg",
  },
  // Sakshi Jha
  {
    zIndex: 8,
    background: "bg-amber-400",
    bottom: "-14%",
    left: "29%",
    rotate: "8.4deg",
  },
  // Sarthak Punasiya
  {
    zIndex: 8,
    background: "bg-violet-500",
    bottom: "-18%",
    left: "-2%",
    rotate: "-9.8deg",
  },
  // Lokesh Ojha
  {
    zIndex: 7,
    background: "bg-pink-400",
    bottom: "-21%",
    left: "71%",
    rotate: "12.52deg",
  },
  // Dishika Yadav
  {
    zIndex: 6,
    background: "bg-amber-400",
    bottom: "-3%",
    left: "59%",
    rotate: "10deg",
  },
  // Aryan Kumar
  {
    zIndex: 4,
    background: "bg-violet-500",
    bottom: "-14%",
    left: "85%",
    rotate: "-9.8deg",
  },
];

export default TeamSection;
