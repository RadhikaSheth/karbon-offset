import React from 'react'
import axios from 'axios'
import {Grid, Typography} from '@material-ui/core'
import Header from './components/header'
import Checkout from './components/checkout'
class Billing extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Checkout />
            </div>
        )
    }
}
export default Billing;


