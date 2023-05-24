import React from "react";
import { Typography } from "@mui/material";

function CoursesCard({ course }) {
  return (
    <li>
      <Typography variant="h4">{course.name}</Typography>
      <p>{course.description}</p>
    </li>
  );
}

export default CoursesCard;
