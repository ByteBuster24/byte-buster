import ActionButton from "@/components/ActionButton/ActionButton";
import { Metadata } from "next";
import Marquee from "@/components/Marquee/Marquee";
import { MdPlayArrow } from "react-icons/md";

export const metadata: Metadata = {
  title: "About Us - BYTE BUSTER: Empowering Minds, Transforming Futures",
};

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
          <ActionButton text="Join Byte Buster Now" icon={<MdPlayArrow />} />
        </div>
      </section>
    </main>
  );
};

const gridData = [
  {
    title: "Introduction",
    text: "Welcome to BYTE BUSTER, your gateway to comprehensive and cutting-edge education in both IT and non-IT domains. We are committed to nurturing aspiring minds, fostering innovation, and empowering students to excel in a rapidly evolving digital landscape.",
  },
  {
    title: "Our Mission",
    text: "At BYTE BUSTER, our mission is to provide a dynamic and inclusive learning environment that equips students with the skills and knowledge needed to thrive in diverse industries. We are dedicated to shaping the future leaders of tomorrow.",
  },
  {
    title: "Diverse Course Offering",
    text: "Explore a rich tapestry of courses covering a spectrum of technologies and skills. Our diverse offerings include in-demand courses such as Machine Learning, Data Science, Python, Artificial Intelligence, Digital Marketing, and many more.",
  },
  {
    title: "Expert Faculty",
    text: "Learn from the best in the industry with our team of experienced and dedicated instructors. Our faculty members are not just educators; they are industry experts, ensuring that you receive practical insights and real-world applications.",
  },
];

const slideData = [
  {
    title: "Rigorous Curriculum",
    text: "Our courses are designed to meet industry standards and stay ahead of technological advancements.",
  },
  {
    title: "Hands-on Learning",
    text: "Gain practical experience through projects, case studies, and industry-relevant assignments.",
  },
  {
    title: "Industry Connect",
    text: "Benefit from our strong network of industry partnerships, opening doors to internships and job opportunities.",
  },
  {
    title: "Personalized Guidance",
    text: "Our student-centric approach ensures individual attention, fostering a conducive learning environment.",
  },
  {
    title: "Technological Mastery",
    text: "Whether you are delving into the realms of web development, mobile app design, or data analytics, BYTE BUSTER has you covered. Master technologies such as React Native, MERN, MEAN, and much more under one roof.",
  },
  {
    title: "Versatility in Design",
    text: "Explore your creative side with courses in Graphic Designing, Photoshop, Corel Draw, and Web Designing. Unleash your artistic potential and develop the skills needed for a career in design.",
  },
  {
    title: "IT Infrastructure and Networking",
    text: "From the fundamentals of C and C++ to advanced topics like CCNA, Linux, and Cloud Computing, we provide a holistic understanding of both software and hardware components.",
  },
  {
    title: "Professional Development",
    text: "Elevate your career with courses in Tally, GST, Excel, MS Word, and PowerPoint. Hone your soft skills with Spoken English, Personality Development, Interview Skills, and Resume Building sessions.",
  },
  {
    title: "Cutting-edge Technologies",
    text: "Stay ahead of the curve by diving into emerging technologies such as Blockchain, IoT, and Cybersecurity. Our courses cover the latest advancements to prepare you for the challenges of the future.",
  },
  {
    title: "Global Certification Assistance",
    text: "Prepare for success with our assistance in obtaining globally recognized certifications. Showcase your skills and enhance your employability on a global scale.",
  },
  {
    title: "Flexibility in Learning",
    text: "Whether you prefer classroom-based learning or online courses, BYTE BUSTER offers flexible options to cater to diverse learning preferences.",
  },
  {
    title: "Community Engagement",
    text: "Join a vibrant community of learners, where knowledge sharing, collaboration, and networking opportunities abound. Engage in forums, events, and workshops to enhance your learning journey.",
  },
  {
    title: "Byte Buster Advantage",
    text: "Experience the Byte Buster Advantage – a holistic approach to education that not only imparts knowledge but also instills critical thinking, problem-solving, and a passion for continuous learning.",
  },
];

export default AboutUs;
