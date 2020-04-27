const initState = {
    itemQuantity: 45,
    itemSold: 0,
    itemPrice: 13,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const pizzaReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_PIZZA': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_PIZZA': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_PIZZA': return initState;
        case 'ADD_TO_CART_PIZZA': {
            const totalSold = state.totalSold + state.itemSold
            return {
                ...state,
                itemQuantity: action.payload,
                itemSold: 0,
                currentEarning: 0,
                totalSold,
                itemTotalEarnings: state.itemTotalEarnings + state.currentEarning,
                isSold: false
            }
        }
        case 'CHANGE_NUM_OF_PIZZA': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        default: return state
    }
}

export default pizzaReducer;