import React from "react";
import { Paper, CardActionArea, CardContent, IconButton, Dialog } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid } from "@mui/material";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";

const [courseName, setCourseName] = useState("");
const [description, setDescription] = useState("");
const { createCourse } = useContext(CourseContext);


function EmptyCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({ courseName, description });
    setCourseName("");
    setDescription("");
    setOpen(false);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <CardActionArea>
        <Paper
          elevation={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 260,
            overflow: "hidden",
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
          }}
        >
          <CardContent>
          <IconButton aria-label="add" onClick={handleClickOpen}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
          </CardContent>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: "bold"}}>Crea tu nuevo curso para Bloque 10</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{
            fontStyle: "italic",
          }}>
            Ingresa la información del curso que deseas crear. <br />
            Puedes utilizar emojis o emoticones para que sea más divertido 😎
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="course-name"
            label="Titulo del curso"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}

          />
          <TextField
            margin="dense"
            id="course-description"
            label="Descripción del curso"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit}>Crear</Button>
        </DialogActions>
      </Dialog>
        </Paper>
      </CardActionArea>
    </Grid>
  );
}

export default EmptyCard;
