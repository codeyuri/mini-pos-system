import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import pizzaReducer from './pizza/pizzaReducer';
import burgerReducer from './burger/burgerReducer';
import menuReducer from './menu/menuReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    burger: burgerReducer,
    menu: menuReducer
})

export default rootReducer;