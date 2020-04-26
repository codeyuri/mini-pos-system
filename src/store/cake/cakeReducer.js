const initState = {
    itemQuantity: 20,
    itemSold: 0,
    itemPrice: 10,
    itemTotalEarnings: 0
}

const cakeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_CAKE': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                itemTotalEarnings: state.itemPrice * itemSold
            }
        }
        case 'CHANGE_NUM_OF_CAKES': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        case 'RESET_CAKE': return initState
        default: return state
    }
}

export default cakeReducer;