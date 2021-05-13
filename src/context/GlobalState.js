import React , {createContext , useReducer} from "react"
import AppReducer from "./AppReducer"

const initialState = {
    transaction: {people:1 , amount:0 , tip:0}
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => 
{
    const [state,dispatch] = useReducer(AppReducer , initialState)

    function change_amount(amount)
    {
        dispatch({
            type:"CHANGE_AMOUNT",
            payload:amount
        })        
    }
    function change_people(people)
    {
        dispatch({
            type:"CHANGE_PEOPLE",
            payload:people
        })        
    }
    function change_tip(tip)
    {
        dispatch({
            type:"CHANGE_TIP",
            payload:tip
        })        
    }


    return (
        <GlobalContext.Provider value={{
            transaction:state.transaction,
            change_amount,
            change_people,
            change_tip
            }}>
            {children}
        </GlobalContext.Provider>
    )
}