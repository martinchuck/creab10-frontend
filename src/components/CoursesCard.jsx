import React from "react";
import { Button, CardActions, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <Grid item md={2} >
         <Card sx={{ 
         m: 1,
         maxWidth: 250,
          }}>
      <CardContent>
        <Typography variant="h4" component="div">
        {course.name}
        </Typography>
        <Typography variant="body2">
        {course.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button  size="small" variant="contained" color="secondary" onClick={() => deleteCourse(course.id)} >Eliminar</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default CoursesCard;
