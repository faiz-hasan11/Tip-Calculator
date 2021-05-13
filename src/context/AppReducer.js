const reducer =  (state,action) =>
{
    switch(action.type)
    {
        case "CHANGE_AMOUNT":
            return {
                transaction: {people:state.transaction.people , amount:action.payload , tip:state.transaction.tip}
            }
        case "CHANGE_PEOPLE":
            return {
                transaction: {people:action.payload , amount:state.transaction.amount , tip:state.transaction.tip}
            }
        case "CHANGE_TIP":
            return {
                transaction: {people:state.transaction.people , amount:state.transaction.amount , tip:action.payload}
            }
        default: return state
    }
}
export default reducer;