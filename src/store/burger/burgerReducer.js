const initState = {
    itemQuantity: 60,
    itemSold: 0,
    itemPrice: 28,
    itemTotalEarnings: 0
}

const burgerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_BURGER': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                itemTotalEarnings: state.itemPrice * itemSold
            }
        }
        case 'CHANGE_NUM_OF_BURGER': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        case 'RESET_BURGER': return initState
        default: return state
    }
}

export default burgerReducer;