import CaseStudyCard from "@/components/CaseStudyCard/CaseStudyCard";
import Carousel from "@/components/Carousel/Carousel";

const CaseStudySection = () => {
  return (
    <section className="relative z-[11] bg-white pt-20">
      <div className="w-11/12 max-w-[1280px] mx-auto">
        <Carousel
          className="w-full h-full"
          autoplay
          loop
          slidesPerView={1}
          keyboard={{ enabled: true, onlyInViewport: true }}
          inactiveSlideClasses="opacity-0"
        >
          <CaseStudyCard />
          <CaseStudyCard />
          <CaseStudyCard />
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudySection;
