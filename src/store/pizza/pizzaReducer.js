const initState = {
    itemQuantity: 45,
    itemSold: 0,
    itemPrice: 13,
    itemTotalEarnings: 0
}

const pizzaReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_PIZZA': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                itemTotalEarnings: state.itemPrice * itemSold
            }
        }
        case 'CHANGE_NUM_OF_PIZZA': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        case 'RESET_PIZZA': return initState
        default: return state
    }
}

export default pizzaReducer;