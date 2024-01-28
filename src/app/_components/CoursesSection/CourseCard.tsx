import { FC } from "react";

interface CourseCardProps {
  course: string;
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="primary-pane rounded-[40px] min-w-72 h-28 px-8 text-3xl font-bold text-gray-600 dark:text-gray-100 text-center flex justify-center items-center">
      <p>{course}</p>
    </div>
  );
};

export default CourseCard;
