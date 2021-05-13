import React, { useState ,useEffect , useContext}  from 'react'
import {GlobalContext} from "../../context/GlobalState"
import Alert from '../Alert/Alert'
import "./Styles.css"
function AddAmount() {
    const [amount,setAmount] = useState(0)
    const {change_amount} = useContext(GlobalContext)
    const [alert,setAlert] = useState({show:false,msg:''})

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(amount === 0)
        {
            setAlert({show:true,msg:'Please Enter Amount > 0'})
        }
        change_amount(amount)
        setAmount(0)
    }

    useEffect(()=>
  {
    const timeout = setTimeout( () =>
    {
      setAlert({show:false,msg:'',type:''})
    },3000)
    return () => clearTimeout(timeout)
  },[alert])

    return (
        <div>
            <h3>Add Amount</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">Amount </label>
                    <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Submit</button>
                {alert.show && <Alert msg={alert.msg}/>}                
            </form>
        </div>
    )
}

export default AddAmount
