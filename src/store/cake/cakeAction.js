export const buyCake = (num) => {
    return {
        type: 'BUY_CAKE',
        payload: num
    }
}

export const changeNumOfCakes = (num) => {
    return {
        type: 'CHANGE_NUM_OF_CAKES',
        payload: num
    }
}

export const addToCartCake = (num) => {
    return {
        type: 'ADD_TO_CART_CAKE',
        payload: num
    }
}

export const resetCake = {
    type: 'RESET_CAKE'
}

export const cancelCake = {
    type: 'CANCEL_CAKE'
}