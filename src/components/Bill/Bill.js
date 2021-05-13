import React , {useContext}  from 'react'
import "./Styles.css"
import {GlobalContext} from "../../context/GlobalState"
function Bill() {
    const {transaction} = useContext(GlobalContext)
    const amount = transaction.amount
    return (
        <div>
            <h4>Your Bill</h4>
            <h1 id="balance">${amount}</h1>
        </div>
    )
}

export default Bill
