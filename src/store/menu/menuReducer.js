const initState = {
    buyCakeButton: false,
    buyPizzaButton: false,
    buyBurgerButton: false,
    buyIceCreamButton: false
}

const menuReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_BUTTON': {
            const button = action.payload;
            switch(button) {
                case 'cake':
                    return {
                        buyPizzaButton: false,
                        buyBurgerButton: false,
                        buyIceCreamButton: false,
                        buyCakeButton: !state.buyCakeButton
                    }
                case 'pizza':
                    return {
                        buyCakeButton: false,
                        buyBurgerButton: false,
                        buyIceCreamButton: false,
                        buyPizzaButton: !state.buyPizzaButton
                    }
                case 'burger':
                    return {
                        buyCakeButton: false,
                        buyPizzaButton: false,
                        buyIceCreamButton: false,
                        buyBurgerButton: !state.buyBurgerButton
                    }
                case 'icecream':
                    return {
                        buyPizzaButton: false,
                        buyBurgerButton: false,
                        buyCakeButton: false,
                        buyIceCreamButton: !state.buyIceCreamButton
                    }
            }
        }
        default: return state
    }
}

export default menuReducer;