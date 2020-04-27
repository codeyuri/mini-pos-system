const initState = {
    itemQuantity: 70,
    itemSold: 0,
    itemPrice: 29,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const iceCreamReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_ICECREAM': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_ICECREAM': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_ICECREAM': return initState;
        case 'ADD_TO_CART_ICECREAM': {
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
        case 'CHANGE_NUM_OF_ICECREAM': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        default: return state
    }
}

export default iceCreamReducer;