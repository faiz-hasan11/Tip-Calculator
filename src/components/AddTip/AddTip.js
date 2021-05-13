import React, { useState , useContext , useEffect}  from 'react'
import {GlobalContext} from "../../context/GlobalState"
import Alert from '../Alert/Alert'
import "./Styles.css"
function AddTip() {
    const {transaction} = useContext(GlobalContext)
    const [tip,setTip] = useState(0)
    const {change_tip} = useContext(GlobalContext)
    const [cls,setCls] = useState(0)
    const [tipPercent,setTipPercent] = useState(0)
    const [alert,setAlert] = useState({show:false,msg:''})
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(cls === 0)
        {
            if(tip === 0)
            {
            setAlert({show:true,msg:'Please Enter Tip > 0'})
            }
            change_tip(tip)
        }
        else
        {
            if(tipPercent === 0)
            {
            setAlert({show:true,msg:'Please Enter Tip Percent > 0'})
            }
            const amount = transaction.amount
            const calc_tip = parseFloat(amount) * parseFloat(tipPercent) * 0.01;
            change_tip(calc_tip)
        }
        setTip(0)
    }

    useEffect(() =>{
        if(cls === 0)
        {
            setTipPercent(0)
        }
        else
        {
            setTip(0)
        }
    },[cls])

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
            <h3>Add Tip</h3>
            <div className="btn-container">
                <button className="btn-btn" style={cls === 0 ? {backgroundColor:"#9c88ff"} : {backgroundColor:"#bdbdbd"}} onClick={() => {setCls(0)}}>Amount</button>
                <button className="btn-btn" style={cls === 1 ? {backgroundColor:"#9c88ff"} : {backgroundColor:"#bdbdbd"}} onClick={() => setCls(1)}>Percentage</button>
            </div>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="amount">Tip</label>
                    {
                        cls === 0 ?
                            <input type="number" id="amount" placeholder="Enter amount..." value={tip} onChange={(e) => setTip(e.target.value)}/>
                        :
                            <>
                            <input type="range" min="0" max="100" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)}/>
                            <h3>{tipPercent}%</h3>
                            </>
                    }                    
                </div>
                <button className="btn">Submit</button>
                {alert.show && <Alert msg={alert.msg}/>}
            </form>
        </div>
    )
}

export default AddTip
