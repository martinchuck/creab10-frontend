import { TableContainer,Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'

function CoursesTable() {
  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
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
                        <TableCell>{row.state}</TableCell>
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
        name: 'Curso de fotografia',
        state: 'Sin empezar',
    },
    {
        id: 2,
        name: 'Curso de Cocina',
        state: 'En proceso',
    },
    {
        id: 3,
        name: 'Curso de React',
        state: 'Para revisión',
    }, {
        id: 4,
        name: 'Curso de JS',
        state: 'Terminado',

    },


]

export default CoursesTable