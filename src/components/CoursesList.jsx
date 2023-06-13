import CoursesCard from "./CoursesCard";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CoursesTable from "./CoursesTable";


function CoursesList({ handleDeleteCourse }) {

  const { courses } = useContext(CourseContext);
  return (
    <>
       
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} handleDeleteCourse={handleDeleteCourse} />
        )
        )}
    </>
  );
}
export default CoursesList;
