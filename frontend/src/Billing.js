import React from 'react'
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


