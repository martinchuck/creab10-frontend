import React from "react";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <li>
      <Typography variant="h4">{course.name}</Typography>
      <p>{course.description}</p>
      <Button variant="contained" color="secondary" onClick={() => deleteCourse(course.id)} >Eliminar</Button>
    </li>
  );
}

export default CoursesCard;
