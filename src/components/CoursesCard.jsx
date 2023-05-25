import React from "react";
import { Button, CardActions, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <Grid item md={2} >
         <Card sx={{ 
         maxWidth: 250,
          }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {course.name}
        </Typography>
        <Typography variant="body2" color="#757575" component="p" overflow="hidden">
        {course.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="delete" onClick={() => deleteCourse(course.id)}>
          <DeleteIcon />
        </IconButton> 
      </CardActions>
    </Card>
    </Grid>
  );
}

export default CoursesCard;
