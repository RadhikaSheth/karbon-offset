import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { Typography, Grid, Button, CardContent, Card } from '@material-ui/core';
import axios from 'axios'


function Profile() {
    const [transactions, setTransactions] = useState([]);
    const classes = useStyles()
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/transactions/view/', {
            username: "radhika",
        })
            .then(response => {
                setTransactions(response.data)
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <>
            <Grid container alignItems="center" justifyContent="center" className={classes.header} >
                <Typography variant="h4">Radhika's Carbon Profile</Typography>
            </Grid>
            <div style={{ backgroundColor: "#E8E8E8", height: "1px" }} />
            {console.log(transactions)}
            {transactions.length > 0 ?
                <Grid >
                    <Grid container justifyContent="center" >
                        <Grid item>
                            <Typography>Amount</Typography> &nbsp;
                        </Grid>
                        <Grid item xs={2}>
                            <Typography className={classes.grid}>TIme-Stamp</Typography>
                        </Grid>

                    </Grid>
                    {transactions.map((item) => {
                        return (
                            <div className={classes.card}>
                                <Grid container justifyContent="center" >
                                    <Typography>₹ {parseFloat(item.amount).toFixed(2)}</Typography> &nbsp;
                                    <Typography className={classes.grid}>{item.date}</Typography>
                                </Grid>
                                <br />
                            </div>

                        )

                    })}
                </Grid>

                :
                <div></div>
            }

        </>
    )
}
export default Profile;