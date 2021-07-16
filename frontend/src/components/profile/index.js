import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { Typography, Grid, Button, CardContent, Card } from '@material-ui/core';
import axios from 'axios'


function Profile() {
    const [transactions, setTransactions] = useState([]);
    const [con, setcon] = useState(0);
    const classes = useStyles()
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/transactions/view/', {
            username: "radhika",
        })
            .then(response => {
                setTransactions(response.data)
                calculateCon(response.data)
                // console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    function calculateCon(txns){
        var sum=0.00
        txns.map((item)=>{
            sum+=parseFloat(item.amount)
        })
        setcon(sum)
    }
    return (
        <>
            <Grid container alignItems="center" justifyContent="center" className={classes.header} >
                <Typography variant="h4">Radhika's Carbon Profile</Typography>
            </Grid>
            <div style={{ backgroundColor: "#E8E8E8", height: "1px" }} />
            <Grid container justifyContent="center" alignItems="center" className={classes.mt} spacing={3}>
                <Grid item xs={3}>  
                    <Card>
                        <CardContent>
                            <Typography>Total Carbon Emmited</Typography>
                            <Typography variant="h4">{(con*0.00046281).toFixed(5)} MT</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}> 
                    <Card>
                        <CardContent>
                            <Typography>Total Carbon Offseted</Typography>
                            <Typography variant="h4">{(con*0.00046281).toFixed(5)} MT</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Net Offset</Typography>
                            <Typography variant="h4">0.00</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Total Contribution</Typography>
                            <Typography variant="h4">₹ {con.toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
          
            {console.log(transactions)}
            {transactions.length > 0 ?
                <Grid className={classes.mt}>
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