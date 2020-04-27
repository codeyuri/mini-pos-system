export const buyIceCream = (num) => {
    return {
        type: 'BUY_ICECREAM',
        payload: num
    }
}

export const changeNumOfIceCream = (num) => {
    return {
        type: 'CHANGE_NUM_OF_ICECREAM',
        payload: num
    }
}

export const addToCartIceCream = (num) => {
    return {
        type: 'ADD_TO_CART_ICECREAM',
        payload: num
    }
}

export const resetIceCream = {
    type: 'RESET_ICECREAM'
}

export const cancelIceCream = {
    type: 'CANCEL_ICECREAM'
}