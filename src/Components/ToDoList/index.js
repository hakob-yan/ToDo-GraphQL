import React from "react";
import { FormGroup, Grid } from '@mui/material'
import ToDoItem from "../ToDoItem";
import { useQuery } from "@apollo/client";
import { GET_TO_DOS } from "../../apollo/query";

const ToDoList = () => {
    const { data } = useQuery(GET_TO_DOS);
    return <Grid container>
        <Grid xs={12} item>
            <FormGroup  >
                {data && data.allTodos.map(item => {
                    return <ToDoItem key={item.id} checked={item.completed} name={item.title} />
                })
                }
            </FormGroup>
        </Grid>
    </Grid>


}
export default ToDoList