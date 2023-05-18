import React from "react";
import  Paper  from "@mui/material/Paper";
import { Grid } from "@mui/material";

const Card = () => {
    return (
    <Grid item xs={3}>
    <Paper sx={
        {
            height: 180,
        }
    }>Hola</Paper>
    </Grid>
    );
};

export default Card;