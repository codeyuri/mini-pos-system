const initState = {
    itemQuantity: 70,
    itemSold: 0,
    itemPrice: 29,
    itemTotalEarnings: 0
}

const iceCreamReducer = (state = initState, action) => {
    switch(action.type) {
        case 'BUY_ICECREAM': {
            const itemSold = state.itemSold + Number(action.payload)
            return {
                ...state,
                itemQuantity: state.itemQuantity - action.payload,
                itemSold,
                itemTotalEarnings: state.itemPrice * itemSold
            }
        }
        case 'CHANGE_NUM_OF_ICECREAM': {
            return {
                ...state,
                itemQuantity: action.payload
            }
        }
        case 'RESET_ICECREAM': return initState
        default: return state
    }
}

export default iceCreamReducer;