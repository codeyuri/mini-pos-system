export const buyPizza = (num) => {
    return {
        type: 'BUY_PIZZA',
        payload: num
    }
}

export const changeNumOfPizza = (num) => {
    return {
        type: 'CHANGE_NUM_OF_PIZZA',
        payload: num
    }
}

export const addToCartPizza = (num) => {
    return {
        type: 'ADD_TO_CART_PIZZA',
        payload: num
    }
}

export const resetPizza = {
    type: 'RESET_PIZZA'
}

export const cancelPizza = {
    type: 'CANCEL_PIZZA'
}