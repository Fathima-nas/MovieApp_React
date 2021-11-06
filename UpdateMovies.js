
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'


const UpdateMovies = () => {
var[value,setValue]=useForm({MovieName:"",Actor:"",Actress:"",Director:"",ReleasedYear:0,Camera:"",Producer:"",Language:""})
var[value1,setValue1]=useForm({MovieName:"",Actor:"",Actress:"",Director:"",ReleasedYear:0,Camera:"",Producer:"",Language:""})
var [movieData,changeMovieData]=useState([])
const add=()=>{
    console.log(value)
    axios.post("http://localhost:8050/search",value).then(
        (response)=>{
        console.log(response.data)
        changeMovieData(
             movieData=response.data
        )
    
    })
}
    return (
        <div>          
<Table style={{ marginTop:2, marginLeft:2, marginRight:2 ,padding:10}}>


    <TableRow>
        <TableCell>MovieName</TableCell>
        <TableCell><TextField  onChange={setValue1} value={value1.MovieName} name="MovieName" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Actor</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Actor} name="Actor" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Actress</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Actress} name="Actress" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Director</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Director} onChange="setValue1" name="Director" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>ReleasedYear</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.ReleasedYear} name="ReleasedYear" type="date" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Camera</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Camera} name="Camera" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Producer</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Producer} name="Producer" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <TableRow>
        <TableCell>Language</TableCell>
        <TableCell><TextField onChange={setValue1} value={value1.Language} name="Language" margin="normal" variant="outlined" ></TextField></TableCell>
    </TableRow>

    <Button  variant="contained" fullWidth color="primary">update</Button>
    



</Table>
            
        </div>
    )
}

export default UpdateMovies
