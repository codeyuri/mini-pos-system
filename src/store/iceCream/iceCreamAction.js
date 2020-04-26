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

export const resetIceCream = {
    type: 'RESET_ICECREAM'
}