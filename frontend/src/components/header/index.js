import React from 'react'
import { useStyles } from './styles'
import { Typography, Grid, Button } from '@material-ui/core';

function Header() {
    const classes = useStyles()
    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between" className={classes.header} >
                <Button className={classes.button}>Back to Restaurant</Button>
                <Typography variant="h4">Food Delivery</Typography>
                <Typography variant="h6">Radhika</Typography>
            </Grid>
            <div style={{backgroundColor:"#E8E8E8", height:"1px"}}/>
        </>
    )
}
export default Header;