import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'

const AddMovies = () => {
    var[value,setValue]=useForm({MovieName:"",Actor:"",Actress:"",Director:"",ReleasedYear:0,Camera:"",Producer:"",Language:""})
    
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
            <TextField value={value.MovieName} onChange={setValue} variant="outlined" label="Enter the movie name" color="primary" margin="normal" fullWidth name="MovieName"></TextField>
            <TextField value={value.Actor} onChange={setValue} variant="outlined" label="Enter the Actor name" color="primary" margin="normal" fullWidth name="Actor"></TextField>
            <TextField value={value.Actress} onChange={setValue} variant="outlined" label="Enter the Actress name" color="primary" margin="normal" fullWidth name="Actress"></TextField>
            <TextField value={value.Director} onChange={setValue} variant="outlined" label="Enter the Director name" color="primary" margin="normal" fullWidth name="Director"></TextField>
            <TextField value={value.ReleasedYear} onChange={setValue} variant="outlined" label="Enter the ReleasedYear" type="date" color="primary" margin="normal" fullWidth name="ReleasedYear"></TextField>
            <TextField value={value.Camera} onChange={setValue} variant="outlined" label="Enter the Camera" color="primary" margin="normal" fullWidth name="Camera"></TextField>
            <TextField value={value.Producer} onChange={setValue} variant="outlined" label="Enter the Producer name" color="primary" margin="normal" fullWidth name="Producer"></TextField>
            <TextField value={value.Language} onChange={setValue} variant="outlined" label="Enter the Language" color="primary" margin="normal" fullWidth name="Language"></TextField>
             <Button onClick={add} variant="contained"  color="primary">submit</Button>

            <Table style={{ marginTop:2}}>
                <TableHead>
                    <TableRow>
                        <TableCell>MovieName</TableCell>
                        <TableCell>Actor</TableCell>
                        <TableCell>Actress</TableCell>
                        <TableCell>Director</TableCell>
                        <TableCell>ReleasedYear</TableCell>
                        <TableCell>Camera</TableCell>
                        <TableCell>Producer</TableCell>
                        <TableCell>Language</TableCell>
                        
                        

                    </TableRow>
                </TableHead>

                <TableBody>
                {movieData.map((value,index)=>{

return <TableRow>
<TableCell> {value.MovieName} </TableCell>
<TableCell> {value.Actor} </TableCell>
<TableCell> {value.Actress} </TableCell>
<TableCell> {value.Director} </TableCell>
<TableCell> {value.ReleasedYear} </TableCell>
<TableCell> {value.Camera} </TableCell>
<TableCell> {value.Producer} </TableCell>
<TableCell> {value.Language} </TableCell>


<TableCell><Button variant="contained" color="primary" >Delete</Button></TableCell>

</TableRow>

}    )}          
                    
    </TableBody>
</Table>
        </div>
    )
}

export default AddMovies

