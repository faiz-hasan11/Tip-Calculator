import React , {useState , useContext}  from 'react'
import "./Styles.css"
import {GlobalContext} from "../../context/GlobalState"
function Result() {
    const {transaction} = useContext(GlobalContext)
    const amount = parseFloat(transaction.amount).toFixed(2)
    const tip = parseFloat(transaction.tip).toFixed(2)
    console.log(amount)
    console.log(tip)
    const total = (parseFloat(amount) + parseFloat(tip)).toFixed(2)
    const person = transaction.people
    const person_tip = (parseFloat(tip) / parseFloat(person)).toFixed(2)
    const person_total = (parseFloat(total) / parseFloat(person)).toFixed(2)

    const [cls,setCls] = useState(0)


    return (
        <div className="result-container">
            <div className="btn-container">
                <button className="btn-btn" style={cls === 0 ? {backgroundColor:"#9c88ff"} : {backgroundColor:"#bdbdbd"}} onClick={() => setCls(0)}>Total</button>
                <button className="btn-btn" style={cls === 1 ? {backgroundColor:"#9c88ff"} : {backgroundColor:"#bdbdbd"}} onClick={() => setCls(1)}>Per Person</button>
            </div>
            <h4>Total Tip</h4>
            <h1 id="balance">${cls === 0 ?  tip : person_tip}</h1>
            <h4>Total Bill</h4>
            <h1 id="balance">${cls === 0 ? total : person_total}</h1>
        </div>
    )
}

export default Result
