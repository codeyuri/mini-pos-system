import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import pizzaReducer from './pizza/pizzaReducer';
import burgerReducer from './burger/burgerReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    pizza: pizzaReducer,
    burger: burgerReducer
})

export default rootReducer;