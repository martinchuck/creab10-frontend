import { TableContainer,Paper, Table, TableHead, TableBody, TableRow, TableCell, Chip } from '@mui/material'
import React, { useContext} from 'react'
import { CourseContext } from "../context/CourseContext";

function CoursesTable() {
    const { courses } = useContext(CourseContext);

  return (
    <TableContainer component={Paper}
    sx={{
        borderRadius: 2,
        maxWidth: "97%",
    }}
    >
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Estado</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {courses.map((course) => (
        <TableRow key={course.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{course.id}</TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell>
                        {course.state === "Sin Empezar" && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: "700",
                fontSize: "0.775rem",
                backgroundColor: "#FF484229",
                color: "#B72136",
                padding: "0.35rem 0.6rem",
                borderRadius: "6px",
              }}
            />
          )}
          {course.state === "En Proceso" && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: "700",
                fontSize: "0.775rem",
                backgroundColor: "#ffd70085",
                color: "#998200",
                padding: "0.35rem 0.6rem",
                borderRadius: "6px",
              }}
            />
          )}
          
          
          {course.state === "Para Revisión" && (
            <Chip
              label={course.state}
              sx={{
                fontWeight: "700",
                fontSize: "0.775rem",
                backgroundColor: "#e71be150",
                color: "#9c0098",
                padding: "0.35rem 0.6rem",
                borderRadius: "6px",
              }}
            />
          )}

          {course.state === "Terminado" && (
            <Chip
              label={course.state}
              sx={{      
                fontWeight: "700",
                fontSize: "0.775rem",
                backgroundColor: "#54D62C29",
                color: "#229A16",
                padding: "0.35rem 0.6rem",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            />
          )}
                        </TableCell>
                    </TableRow>
                 ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}


export default CoursesTable