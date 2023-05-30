import { createContext, useState, useEffect } from "react";
import { courses as data } from "../courses";

export const CourseContext = createContext();

export function CourseContextProvider(props) {
  const [courses, setCourses] = useState([]);

  function createCourse(course) {
    setCourses((previousCourses) => [
      ...previousCourses,
      {
        id: previousCourses.length + 1,
        name: course.courseName,
        description: course.description,
        state: course.stateCourse,
      },
    ]);
  }

  function deleteCourse(courseId) {
    setCourses(courses.filter((course) => course.id !== courseId));
  }

  useEffect(() => {
    setCourses(data);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        createCourse,
        deleteCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
}
