import React from "react";
import { Button, CardActions, CardHeader, IconButton, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Card, CardContent, CardActionArea, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function CoursesCard({ course }) {
  const { deleteCourse } = useContext(CourseContext);

  return (
    <Grid item
    xs={12}
    sm={6}
    md={4}

     >
         <Paper elevation={8} sx={{ 
         maxWidth: 260,
         overflow: 'hidden',
         minHeight: 250,
         maxHeight: 250,
         borderRadius: 2,
         ml: 3,
         mr: 3,
          mb: 2,
          mt: 2,
          ":hover": {
            boxShadow: 20,
            cursor: "pointer",
          },
          }}>
    <CardActionArea>
    <CardHeader  title={
              <Typography gutterBottom variant="h5" component="h2">
        {course.name}
        </Typography>
    }
    subheader={
      <Typography variant="body2" color="#757575" component="p"  >
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
