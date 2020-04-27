export const buyBurger = (num) => {
    return {
        type: 'BUY_BURGER',
        payload: num
    }
}

export const changeNumOfBurger = (num) => {
    return {
        type: 'CHANGE_NUM_OF_BURGER',
        payload: num
    }
}

export const addToCartBurger = (num) => {
    return {
        type: 'ADD_TO_CART_BURGER',
        payload: num
    }
}

export const resetBurger = {
    type: 'RESET_BURGER'
}

export const cancelBurger = {
    type: 'CANCEL_BURGER'
}