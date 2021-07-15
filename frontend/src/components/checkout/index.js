import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { Typography, Grid, Button, Card, CardContent, FormControlLabel, FormGroup, Checkbox, Switch } from '@material-ui/core';
import axios from 'axios'

function Checkout() {
    const classes = useStyles()
    const [initialamount, setInitial] = useState(59.4);
    const [fundAmount, setFund] = useState(0);
    const [delivery, setDelivery] = useState(20.59)
    const [state, setState] = useState({
        checked: false,
    });
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/getOffset/', {
            distance: 10.00,
            mode: "bike",
        })
            .then(response => {
                setFund(response.data.amount)
            })
            .catch(error => {
                console.log(error);
            })
    })
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });

    };
    return (
        <>
            <Grid container direction="column" className={classes.container} >
                <Grid item>
                    <Grid container >
                        <Typography variant="h4">Checkout</Typography>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container justifyContent="flex-start" className={classes.mt} >
                        <Grid item xs={8}>
                            <Grid container justifyContent="flex-start">
                                <Typography variant="h6" className={classes.heading}> PAYMENT METHODS</Typography>

                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container justifyContent="flex-start"  >
                                <Typography variant="h6" className={classes.heading}>SUMMARY</Typography>
                                <Grid container direction="column" justifyContent="flex-start" className={classes.mt}>
                                    <Card className={classes.greycard}>
                                        <CardContent>
                                            <Grid container direction="column" alignItems="flex-start">
                                                <Typography gutterBottom>Ordered from</Typography>
                                                <Typography variant="h5" gutterBottom>Hogsmeade Cafe</Typography>
                                                <Typography className={classes.heading} gutterBottom>Hogwarts</Typography>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Grid container direction="row" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography gutterBottom>Your total savings:</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography gutterBottom>₹ 39.60</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography gutterBottom>Subtotal: </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography gutterBottom>₹ {initialamount}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography gutterBottom>Delivery Charge</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography gutterBottom>₹ {delivery}</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container alignItems="center" className={classes.mt}>
                                                <FormGroup >
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={state.checked}
                                                                onChange={handleChange}
                                                                name="checked"
                                                                color="primary"
                                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                            />
                                                        }
                                                    />
                                                </FormGroup>
                                                <Typography> Make my order carbon neutral &nbsp; </Typography>
                                                {state.checked
                                                    ?
                                                    <Typography>₹{ (fundAmount).toFixed(2)}</Typography>
                                                    :
                                                    <></>
                                                }
                                            </Grid>


                                            <Grid container direction="row" justifyContent="space-between" >
                                                <Grid item>
                                                    <Typography gutterBottom>Grand Total:</Typography>
                                                </Grid>
                                                <Grid item>
                                                    {state.checked
                                                        ?
                                                        <Typography gutterBottom>₹
                                                            {(initialamount + fundAmount + delivery).toFixed(2)}

                                                        </Typography>
                                                        :
                                                        <Typography gutterBottom>₹
                                                            {initialamount + delivery}
                                                        </Typography>
                                                    }
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}
export default Checkout;