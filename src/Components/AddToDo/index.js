import React from "react";
import './index.scss'
import { TextField, Button, Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const AddToDo = () => {
    return <div className="AddToDo">
        <Grid sx={{ my: '3rem' }} container
            spacing={4}
            justifyItems="center"
            alignItems='flex-end'
        >
            <Grid xs={8} item>
                <TextField  size="small" fullWidth id="standard-basic" label="Add ToDo" variant="standard" />
            </Grid>
            <Grid alignSelf='flex-end' xs={4}  item>
                <Button size="small" variant="contained">Add ToDo</Button>
            </Grid>
        </Grid>
    </div>
}
export default AddToDo