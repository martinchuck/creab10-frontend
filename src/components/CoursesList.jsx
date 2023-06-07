import CoursesCard from "./CoursesCard";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CoursesTable from "./CoursesTable";


function CoursesList() {

  const { courses } = useContext(CourseContext);
  return (
    <>
       
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} />
        )
        )}
    </>
  );
}
export default CoursesList;
