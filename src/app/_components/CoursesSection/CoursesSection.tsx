import Image from "next/image";
import Marquee from "@/components/Marquee/Marquee";
import coursesIcon from "@/public/assets/home/courses-icon.webp";
import courses from "./courses";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <section
      className="w-full py-20 mb-40 bg-gradient-courses dark:bg-gradient-courses-dark backdrop-blur-xl"
      id="courses"
    >
      <div className="container mx-auto flex flex-col items-center gap-8 lg:flex-row">
        <div className="primary-pane backdrop-blur-2xl w-full rounded-[60px] px-8 py-4 flex flex-row gap-6 items-center lg:justify-center lg:flex-col lg:w-[35%] lg:self-stretch">
          <div className="w-1/2 lg:w-fit">
            <Image
              src={coursesIcon}
              alt="Byte Buster courses icon"
              width={315}
            />
          </div>
          <div className="w-1/2 lg:w-fit">
            <h2 className="text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
              Courses We Offer
            </h2>
          </div>
        </div>
        <div className="rounded-[60px] py-3 border border-black dark:border-white w-full overflow-hidden lg:w-[65%] lg:py-0">
          <div className="w-[105%] relative -left-2 flex flex-col gap-3 lg:py-2.5">
            <Marquee
              slides={{ spacing: 20, perView: "auto" }}
              drag
              animationDuration={17 * 1000}
              pauseOnHover
              containerStyles="cursor-grab"
            >
              {courses[0].map((course) => (
                <CourseCard course={course} key={course} />
              ))}
            </Marquee>
            <div className="w-full h-px bg-black dark:bg-white" />
            <Marquee
              slides={{ spacing: 20, perView: "auto" }}
              drag
              animationDuration={70 * 1000}
              pauseOnHover
              containerStyles="cursor-grab"
              rtl
            >
              {courses[1].map((course) => (
                <CourseCard course={course} key={course} />
              ))}
            </Marquee>
            <div className="w-full h-px bg-black dark:bg-white" />
            <Marquee
              slides={{ spacing: 20, perView: "auto" }}
              drag
              animationDuration={70 * 1000}
              pauseOnHover
              containerStyles="cursor-grab"
            >
              {courses[2].map((course) => (
                <CourseCard course={course} key={course} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
