const initState = {
    itemQuantity: 20,
    itemSold: 0,
    itemPrice: 10,
    itemTotalEarnings: 0,
    currentEarning: 0,
    isSold: false,
    totalSold: 0
}

const cakeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                currentEarning: state.itemPrice * itemSold,
                isSold: true
            }
        }
        case 'CANCEL_CAKE': {
            return {
                ...state,
                itemQuantity: state.itemQuantity + state.itemSold,
                itemSold: 0,
                currentEarning: 0,
                isSold: false
            }
        }
        case 'RESET_CAKE': return initState;
        case 'ADD_TO_CART_CAKE': {
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
        case 'CHANGE_NUM_OF_CAKE': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        default: return state
    }
}

export default cakeReducer;