import React from "react";
import { Paper,  CardContent, IconButton, Dialog, Typography, InputLabel, Select, MenuItem } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid } from "@mui/material";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import styled from "styled-components";





function EmptyCard() {
  const [open, setOpen] = React.useState(false);
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [stateCourse, setStateCourse] = useState("");
  const { createCourse } = useContext(CourseContext);

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
    <Grid item   xs={12}
    sm={6}
    md={4}
    lg={3} xl={2}>
  
        <Paper
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
            ":hover": {
            boxShadow: 20,
            
          },
            
          }}
        >

          <CardContent >
          <IconButton aria-label="add" onClick={handleClickOpen} >
            <AddCircleIcon sx={
              {
                fontSize: 80,
              }
            } />
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
            placeholder="Ingresa aquí el nombre del curso"
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
          <InputLabel id="course-status" htmlFor="course-status">Estado del curso</InputLabel>
          <Select labelId="course-status" id="course-status-select" label="Estado del curso">
            <MenuItem value="en progreso">En progreso</MenuItem>
            <MenuItem value="terminado">Terminado</MenuItem>
          </Select>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit}>Crear</Button>
        </DialogActions>
      </Dialog>
     
        </Paper>
    </Grid>
  );
        
}

export default EmptyCard;
