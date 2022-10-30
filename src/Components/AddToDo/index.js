import React, { useState } from "react";
import './index.scss'
import { TextField, Button, Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useMutation } from "@apollo/client";
import { ADD_TO_DO } from "../../apollo/mutation";
import { GET_TO_DOS } from "../../apollo/query";

const AddToDo = () => {
    const [text, setText] = useState('');
    const [adToDo, { data, error, loading }] = useMutation(ADD_TO_DO, {
        update(cache, data) {
            const { createTodo } = data.data;
            console.log(createTodo);
            const { allTodos: todos } = cache.readQuery({ query: GET_TO_DOS })
            cache.writeQuery({
                query: GET_TO_DOS,
                data: {
                    allTodos: [...todos, createTodo]
                }
            })
        }
    })
    const handleInput = (e) => {
        setText(e.target.value);
    }
    const handleSubbmit = (e) => {
        if (e.key === 'Enter' && text.trim().length) {
            adToDo({
                variables: {
                    title: text,
                    user_id: 12,
                    completed: false

                }
            })
            setText('')
        }
    }
    const handleClick = () => {
        adToDo({
            variables: {
                title: text,
                user_id: 12,
                completed: false

            }
        })
        setText('')

    }
    if (loading) return <div className='Loading'><CircularProgress size={120} /></div>
    if (error) return <div className='Loading'><Alert severity="error">An error occurred while loading data...</Alert></div>
    return <div className="AddToDo">
        <Grid sx={{ my: '3rem' }} container
            spacing={4}
            justifyItems="center"
            alignItems='flex-end'
        >
            <Grid xs={8} item>
                <TextField size="small"
                    onKeyDown={(e) => handleSubbmit(e)}
                    onChange={handleInput}
                    value={text}
                    fullWidth id="standard-basic" label="Add ToDo" variant="standard" />
            </Grid>
            <Grid alignSelf='flex-end' xs={4} item>
                <Button onClick={handleClick} size="small" variant="contained">Add ToDo</Button>
            </Grid>
        </Grid>
    </div>
}
export default AddToDo