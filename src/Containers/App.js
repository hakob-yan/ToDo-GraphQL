import './App.scss';
import AddToDo from '../Components/AddToDo'
import ToDoList from '../Components/ToDoList'
import { Grid, Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { GET_TO_DOS } from '../apollo/query'
import { useQuery } from '@apollo/client';

function App() {
  const { data, error, loading } = useQuery(GET_TO_DOS);
  if (loading) return <div className='Loading'><CircularProgress size={120} /></div>
  console.log(data);
  return (
    <div className="App">

      <Grid container>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            spacing={0}
            direction='column'
          >
            <Grid item>
              <Grid item xs={12}>
                <h1>ToDo List </h1>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item xs={12}>
                <AddToDo />
              </Grid>
            </Grid>
            <Grid item  >
              <Grid item xs={12} >
                <ToDoList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>

      </Grid>


    </div>
  );
}

export default App;
