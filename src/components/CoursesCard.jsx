import React from "react";
import { Button, CardActions, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <Grid container spacing={4} >
          <Grid item >
         <Card sx={{ 
          minWidth: 275,
         m: 1, }}>
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
        </Grid>


    
  );
}

export default CoursesCard;
