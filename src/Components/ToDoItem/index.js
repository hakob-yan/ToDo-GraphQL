import React from "react";
import { Grid, Checkbox, FormControlLabel, Container } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoItem = ({ name,checked }) => {
    return (

        <Grid container
            spacing={10}
        >
            <Grid xs={8} item>
                <FormControlLabel control={<Checkbox checked={checked} />} label={name} />
            </Grid>
            <Grid xs={4} item>
                <IconButton aria-label="delete" size="medium">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Grid>
        </Grid>

    )

}
export default ToDoItem