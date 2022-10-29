import React from "react";
import { FormGroup, Grid } from '@mui/material'
import ToDoItem from "../ToDoItem";
const list = [
    { name: 'Geneu sasa  saasasas   asasa' },
    { name: 'General' },
    { name: 'General' },
];

const ToDoList = () => {
    return <div>

        <Grid container>
            <Grid xs={12} item>
                <FormGroup  >
                    {list.map(item => {
                        return <ToDoItem checked={true} name={item.name} />
                    })
                    }
                </FormGroup>
            </Grid>
        </Grid>

    </div>
}
export default ToDoList