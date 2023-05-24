import React from "react";
import { Button, Typography } from "@mui/material";

function CoursesCard({ course, deleteCourse }) {
  

  return (
    <li>
      <Typography variant="h4">{course.name}</Typography>
      <p>{course.description}</p>
      <Button variant="contained" color="secondary" onClick={() => deleteCourse(course.id)} >Eliminar</Button>
    </li>
  );
}

export default CoursesCard;
