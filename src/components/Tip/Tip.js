import React , {useContext}  from 'react'
import "./Styles.css"
import {GlobalContext} from "../../context/GlobalState"
function Tip() {
    const {transaction} = useContext(GlobalContext)
    const tip = transaction.tip
    return (
        <div className="tip-container">
            <h4>Your Tip</h4>
            <h1 id="balance">${tip}</h1>
        </div>
    )
}

export default Tip