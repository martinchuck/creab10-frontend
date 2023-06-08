import React, { useState, useContext } from "react";
import {
  CardContent,
  IconButton,
  Typography,
  Card,
  Grid,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { CourseContext } from "../context/CourseContext";
import CreateCourseDialog from "./CreateCourseDialog";

function EmptyCard() {
  const [open, setOpen] = useState(false);
  const { createCourse } = useContext(CourseContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (courseData) => {
    createCourse(courseData);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card
        elevation={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "15rem",
          height: "15rem",
          overflow: "hidden",
          borderRadius: 2,
          ml: 1,
          mr: 1,
          mb: 2,
          mt: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            color="gray"
            fontWeight="bold"
            onClick={handleClickOpen}
            sx={{
              ":hover": {
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            Nuevo curso
          </Typography>
          <IconButton aria-label="add" onClick={handleClickOpen}>
            <AddCircleIcon
              sx={{
                fontSize: 80,
                ":hover": {
                  color: "primary.main",
                },
              }}
            />
          </IconButton>
        </CardContent>
        <CreateCourseDialog
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </Card>
    </Grid>
  );
}

export default EmptyCard;
