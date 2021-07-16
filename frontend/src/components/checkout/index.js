import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { Typography, Grid, Button, Card, CardContent, FormControlLabel, FormGroup, Switch, Tooltip, IconButton } from '@material-ui/core';
import axios from 'axios'
import InfoIcon from '@material-ui/icons/Info';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
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
    const addTransaction = () => {
        if (state.checked) {
            axios.post('http://127.0.0.1:8000/transactions/create/', {
                username: "radhika",
                amount: fundAmount,
            })
                .then(response => {
                    toast.info('Transaction added!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <>
            <Grid container direction="column" className={classes.container} >
                <Grid item>
                    <Grid container >
                        <Typography variant="h4">Checkout</Typography>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container justifyContent="flex-start" className={classes.card} spacing={3}>
                        <Grid item xs={7}>
                            <Grid container justifyContent="flex-start">
                                <Typography variant="h6" className={classes.heading}> PAYMENT METHODS</Typography>
                                <Grid container direction="column" justifyContent="flex-start" className={classes.card}>

                                    <Card>
                                        <CardContent>
                                            <Grid container direction="column" alignItems="flex-start">
                                                <Button className={classes.payment}>
                                                    <Typography variant="h6"> Wallets</Typography>
                                                </Button>
                                                <Button className={classes.payment, classes.card}>
                                                    <Typography variant="h6"> Credit, Debit & ATM Cards</Typography>
                                                </Button>
                                                <Button className={classes.payment, classes.card}>
                                                    <Typography variant="h6"> Sodexo Meal Pass</Typography>
                                                </Button>
                                                <Button className={classes.payment, classes.card}>
                                                    <Typography variant="h6"> Netbanking</Typography>
                                                </Button>
                                                <Button className={classes.payment, classes.card}>
                                                    <Typography variant="h6"> Pay via UPI</Typography>
                                                </Button>
                                                <Button className={classes.payment, classes.card}>
                                                    <Typography variant="h6"> Cash</Typography>
                                                </Button>
                                            </Grid>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container justifyContent="flex-start"  >
                                <Typography variant="h6" className={classes.heading}>SUMMARY</Typography>
                                <Grid container direction="column" justifyContent="flex-start" className={classes.card}>
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
                                            <Grid container direction="column" alignItems="flex-start">
                                                <Typography variant="h5" gutterBottom>
                                                    Your Order:
                                                </Typography>
                                            </Grid>
                                            <Grid container direction="row" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography gutterBottom>Butter Beer</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography gutterBottom>1 QTY</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" justifyContent="space-between" className={classes.mt}>
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
                                            <Grid container alignItems="center" justifyContent="flex-start" className={classes.card}>
                                                <Grid item xs={3}>
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
                                                </Grid>
                                                <Grid item>
                                                    <Typography>Make order carbon neutral </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Tooltip title="Your donation will be funded to organization working for climate change">
                                                        <IconButton aria-label="Add info here">
                                                            <InfoIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item>
                                                    {state.checked
                                                        ?
                                                        <Typography>₹{(fundAmount).toFixed(2)}</Typography>
                                                        :
                                                        <></>
                                                    }
                                                </Grid>
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
                                            <Grid container direction="row" justifyContent="center" className={classes.card}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" disableElevation className={classes.paymentButton} onClick={addTransaction}>Pay</Button>
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