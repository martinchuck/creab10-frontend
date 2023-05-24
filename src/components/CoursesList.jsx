import CoursesCard from "./CoursesCard";

function CoursesList({ courses }) {
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
