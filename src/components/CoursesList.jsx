import CoursesCard from "./CoursesCard";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";


function CoursesList() {

  const { courses } = useContext(CourseContext);
  return (
    <>
      <ul>
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </ul>
    </>
  );
}
export default CoursesList;
