import React from "react";
import {
  CardContent,
  IconButton,
  Dialog,
  Typography,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid } from "@mui/material";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";




function EmptyCard() {
  const [open, setOpen] = React.useState(false);
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const { createCourse } = useContext(CourseContext);
  const [stateCourse, setStateCourse] = useState("En Proceso");

  const handleChangeToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({ courseName, description, stateCourse });
    setCourseName("");
    setDescription("");
    setStateCourse("En Proceso");
    setOpen(false);
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
          ":hover": {
            boxShadow: 20,
          },
        }}
      >
        <CardContent>
        <Typography variant="body1" color="gray" fontWeight="bold">
          Nuevo curso
        </Typography>
          <IconButton aria-label="add" onClick={handleClickOpen}>
            <AddCircleIcon
              sx={{
                fontSize: 80,
              }}
            />
          </IconButton>
        </CardContent>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ fontWeight: "bold" }}>
            Crea tu nuevo curso para Bloque 10
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                fontStyle: "italic",
              }}
            >
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
              helperText="Maximo 80 caracteres"
              inputProps={{
                maxLength: 80
              }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            {/* <InputLabel id="state-course-label">Estado del curso</InputLabel>
            <Select
              labelId="state-course-label"
              id="state-course"
              value={stateCourse}
              label="Estado del curso"
              onChange={(e) => setStateCourse(e.target.value)}
            >
              <MenuItem  value="Sin Empezar">Sin Empezar</MenuItem>
              <MenuItem value="En Proceso">En Proceso</MenuItem>
              <MenuItem value="Para Revisión">Para Revisión</MenuItem>
              <MenuItem value="Terminado">Terminado</MenuItem>

            </Select> */}
            <Box my={1} >
            <Typography variant="standard" color="gray"  >
              Estado del curso:
    </Typography>
    </Box>
    <br/>
            <ToggleButtonGroup size="small"
      label="Estado del curso"
      fontSize="small"
      value={stateCourse}
      exclusive
      onChange={(e) => setStateCourse(e.target.value)}
      aria-label="Platform"
    >

      <ToggleButton value="Sin Empezar" sx={{
        ":hover":{
                backgroundColor: "#FF484229",
                color: "#B72136",
        },
        '&.Mui-selected, &.Mui-selected:hover':{
                fontWeight: "700",
                backgroundColor: "#FF484229",
                color: "#B72136",
        }
      }}>Sin Empezar</ToggleButton>
      <ToggleButton value="En Proceso" sx={{
        ":hover":{
                backgroundColor: "#ffd70085",
                color: "#998200",
        },
        '&.Mui-selected, &.Mui-selected:hover':{
                fontWeight: "700",
                backgroundColor: "#ffd70085",
                color: "#998200",
        }
      }}>En Proceso</ToggleButton>
      <ToggleButton value="Para Revisión" sx={{
        ":hover":{
                backgroundColor: "#e71be150",
                color: "#9c0098",
        },
        '&.Mui-selected, &.Mui-selected:hover':{
                fontWeight: "700",
                backgroundColor: "#e71be150",
                color: "#9c0098",
        }
      }}>Para Revisión</ToggleButton>
      <ToggleButton value="Terminado" sx={{
        ":hover":{
                fontWeight: "700",
                backgroundColor: "#54D62C29",
                color: "#229A16",
            
        },
        '&.Mui-selected, &.Mui-selected:hover':{
                fontWeight: "700",
                backgroundColor: "#54D62C29",
                color: "#229A16",
           
        }
      }}>Terminado</ToggleButton>
    </ToggleButtonGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Crear
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Grid>
  );
}

export default EmptyCard;
