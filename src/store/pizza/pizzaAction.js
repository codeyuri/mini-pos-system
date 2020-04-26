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

export const resetPizza = {
    type: 'RESET_PIZZA'
}