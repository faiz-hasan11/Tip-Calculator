import React , {useState , useContext }  from 'react'
import "./Styles.css"
import {GlobalContext} from "../../context/GlobalState"
function People() {
    const [people,setPeople] = useState(1)
    const {change_people} = useContext(GlobalContext)

    const handleDecreament = () => {
        if(people !== 1)
        {
            setPeople(people-1)
            change_people(people-1)
        }
    }

    const handleIncreament = () => {
        setPeople(people+1)
        change_people(people+1)
    }

    return (
        <div className="people-container">
            <h3>Total People</h3>
            <div className="func-container">
                <button className="btn-sign" onClick={handleDecreament}>-</button>
                <h1 id="balance">{people}</h1>
                <button className="btn-sign" onClick={handleIncreament}>+</button>
            </div>
            
        </div>
    )
}

export default People
