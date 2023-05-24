import CoursesCard from "./CoursesCard";

function CoursesList({ courses, deleteCourse }) {
  return (
    <>
      <ul>
        {courses.map((course) => (
          <CoursesCard key={course.id} course={course} deleteCourse={deleteCourse}/>
        ))}
      </ul>
    </>
  );
}
export default CoursesList;
