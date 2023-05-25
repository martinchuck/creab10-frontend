import React from "react";
import { Button, CardActions, CardHeader, IconButton, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <Grid item md={2} >
         <Paper elevation={8} sx={{ 
         maxWidth: 250,
         minHeight: 250,
         maxHeight: 250,
         borderRadius: 2,
          }}>
    <CardActionArea>
    <CardHeader title={
              <Typography gutterBottom variant="h5" component="h2">
        {course.name}
        </Typography>
    }
    subheader={
      <Typography variant="body2" color="#757575" component="p" >
        {course.description}
        </Typography>
    }
    action={
      <IconButton aria-label="delete" onClick={() => deleteCourse(course.id)}>
          <DeleteIcon />
        </IconButton> 
    }>
    </CardHeader>
    </CardActionArea>
    </Paper>
    </Grid>
  );
}

export default CoursesCard;
