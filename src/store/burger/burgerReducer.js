const initState = {
    itemQuantity: 60,
    itemSold: 0,
    itemPrice: 28,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const burgerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_BURGER': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_BURGER': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_BURGER': return initState;
        case 'ADD_TO_CART_BURGER': {
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
        case 'CHANGE_NUM_OF_BURGER': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        default: return state
    }
}

export default burgerReducer;