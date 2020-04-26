import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCake } from '../store/cake/cakeAction';
import { resetPizza } from '../store/pizza/pizzaAction';
import { resetBurger } from '../store/burger/burgerAction';
import { resetIceCream } from '../store/iceCream/iceCreamAction';
import Menu from './shop/Menu';
import Item from './shop/items/Item';
import { Route, Switch } from 'react-router-dom';

const BotContainer = () => {
    const cake = useSelector(state => state.cake);
    const pizza = useSelector(state => state.pizza);
    const burger = useSelector(state => state.burger);
    const iceCream = useSelector(state => state.iceCream);
    const menuButton = useSelector(state => state.menu);
    const dispatch = useDispatch();

    /* starting quantities */
    const initQuantity = {
        cake: 20,
        pizza: 45,
        burger: 60,
        iceCream: 70
    }

    const handleReset = (whatItem) => {
        if (!confirm('Confirm to reset all items back to its default state')) return;
        dispatch(whatItem);
    }

    return (
        <div className="bot_con">
            <Menu
                cake={cake}
                pizza={pizza}
                burger={burger}
                iceCream={iceCream}
                initQuantity={initQuantity}
            />
            <div className="bot_right">
                <Switch>
                    { menuButton.buyCakeButton ? (
                        <Route path="/cake" exact render={(props) => <Item item={cake} itemName={'Cake'} initQuantity={initQuantity} />} />
                    ) : menuButton.buyPizzaButton ? (
                        <Route path="/pizza" render={(props) => <Item item={pizza} itemName={'Pizza'} initQuantity={initQuantity} />} />
                    ) : menuButton.buyBurgerButton ? (
                        <Route path="/burger" render={(props) => <Item item={burger} itemName={'Burger'} initQuantity={initQuantity} />} />
                    ) : menuButton.buyIceCreamButton ? (
                        <Route path="/icecream" render={(props) => <Item item={iceCream} itemName={'Ice Cream'} initQuantity={initQuantity} />} />
                    ) : null }
                </Switch>
                { menuButton.buyCakeButton ? (
                    <button onClick={() => handleReset(resetCake)} className="reset">Reset Cake</button>
                ) : menuButton.buyPizzaButton ? (
                    <button onClick={() => handleReset(resetPizza)} className="reset">Reset Pizza</button>
                ) : menuButton.buyBurgerButton ? (
                    <button onClick={() => handleReset(resetBurger)} className="reset">Reset Burgers</button>
                ) : menuButton.buyIceCreamButton ? (
                    <button onClick={() => handleReset(resetIceCream)} className="reset">Reset Ice Creams</button>
                ) : (
                   <div className="notice_div">
                        <h2>Note:</h2>
                        <ul className="notice">
                            <li>Select item from the menu to:
                                <ul>
                                    <li>View the selected item's summary</li>
                                    <li>Reset the selected item's stock</li>
                                    <li>Buy a selected item</li>
                                    <li>Deselect item</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BotContainer;