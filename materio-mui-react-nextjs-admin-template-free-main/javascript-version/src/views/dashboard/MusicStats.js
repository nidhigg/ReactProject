import React from "react";
// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

class MusicStats extends React.Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = { count: [] };
  }

  //override componentDidMount function
  componentDidMount() {
    fetch('http://localhost:8080/api/v1/stats/songs')
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
        <Grid item xs={12} sm={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>No. of Songs</Typography>
            <Typography variant='h6'>{count}</Typography>
          </Box>
        </Grid>
      )
  }
}

export default MusicStats