import { TableContainer,Paper, Table, TableHead, TableBody, TableRow, TableCell, Chip } from '@mui/material'
import React from 'react'

function CoursesTable() {
  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Estado</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 {tableData.map((row) => (
                    <TableRow key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>
                        {row.state === "Sin Empezar" && (
            <Chip
              label={row.state}
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
          {row.state === "En Proceso" && (
            <Chip
              label={row.state}
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
          
          
          {row.state === "Para Revisión" && (
            <Chip
              label={row.state}
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

          {row.state === "Terminado" && (
            <Chip
              label={row.state}
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
const tableData = [
    {
        id: 1,
        name: '📷Curso de fotografia',
        state: 'Sin Empezar',
    },
    {
        id: 2,
        name: 'Curso de Cocina',
        state: 'En Proceso',
    },
    {
        id: 3,
        name: 'Curso de React',
        state: 'Para Revisión',
    }, {
        id: 4,
        name: 'Curso de JS',
        state: 'Terminado',

    },


]

export default CoursesTable