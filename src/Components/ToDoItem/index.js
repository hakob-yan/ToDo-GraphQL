import React from "react";
import { Grid, Checkbox, FormControlLabel, Container } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from "@apollo/client";
import { UPDATE_TO_DO, REMOVE_TO_DO } from "../../apollo/mutation";
import { GET_TO_DOS, } from "../../apollo/query";



const ToDoItem = ({ name, checked, id }) => {
    const [updateList, { dataUp, errorUp, loadingUp }] = useMutation(UPDATE_TO_DO)
    const [removeList, { dataRem, errorRem, loadingRem }] = useMutation(REMOVE_TO_DO, {
        update(cache, data) {
            const { removeTodo } = data.data;
            const { allTodos: todos } = cache.readQuery({ query: GET_TO_DOS })
            cache.writeQuery({
                query: GET_TO_DOS,
                data: {
                    get allTodos() {
                        const newToDos = todos.filter(item => item.id != removeTodo.id)
                        return newToDos;
                    }
                }
            })
        }
    })

    const handleCheck = () => {
        updateList({
            variables: {
                id: id,
                completed: !checked,
            }
        })
    }
    const handleRemove = () => {
        removeList({
            variables: {
                id: id,
            }
        })
    }
    return (
        <Grid container
            spacing={10}
        >
            <Grid xs={8} item>
                <FormControlLabel control={<Checkbox onChange={handleCheck} checked={checked} />} label={name} />
            </Grid>
            <Grid xs={4} item>
                <IconButton onClick={handleRemove} aria-label="delete" size="medium">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Grid>
        </Grid>
    )

}
export default ToDoItem