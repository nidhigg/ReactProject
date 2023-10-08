import React from "react";
import { useState } from 'react';
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

class SongsList extends React.Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      details : {
        playlistId : ''
      },
      count: [] };
  }

  //override componentDidMount function
  onSubmitButtonClick() {
    fetch('http://localhost:8080/api/v1/playlist/'+this.state.details.playlistId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          count: data
        })
      });
  }

  //Override render function
  render() {
      const {count} = this.state;

      return (
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          
            <Typography variant='caption'>Songs URL in a playlist</Typography>
            <Typography variant='h6'>{count[0]}</Typography>
            <Typography variant='h6'><TextField name="playlistId" value={this.state.playlistId} onChange={(e) => this.setState({ details: {[e.target.name]: e.target.value}})}/>
            <button onClick={()=>this.onSubmitButtonClick()}>Fetch Songs</button></Typography>
          </Box>
          <Card>
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                <TableHead>
                  <TableRow>
                    <TableCell>URLs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {count.map(res => ( 
                    <TableRow hover key={res} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                      <TableCell>{res}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
        </Grid>
      )
  }
}

export default SongsList