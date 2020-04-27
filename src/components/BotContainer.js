import React from 'react';
import { useSelector } from 'react-redux';
import Menu from './shop/Menu';
import Item from './shop/items/Item';
import ItemHome from './shop/items/ItemHome';
import { Route, Switch } from 'react-router-dom';

const BotContainer = () => {
    const cake = useSelector(state => state.cake);
    const pizza = useSelector(state => state.pizza);
    const burger = useSelector(state => state.burger);
    const iceCream = useSelector(state => state.iceCream);

    /* starting quantities */
    const initQuantity = {
        cake: 20,
        pizza: 45,
        burger: 60,
        iceCream: 70
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
                    <Route exact path="/" component={ItemHome} />
                    <Route path="/cake" render={(props) => <Item item={cake} itemName={'Cake'} initQuantity={initQuantity} />} />
                    <Route path="/pizza" render={(props) => <Item item={pizza} itemName={'Pizza'} initQuantity={initQuantity} />} />
                    <Route path="/burger" render={(props) => <Item item={burger} itemName={'Burger'} initQuantity={initQuantity} />} />
                    <Route path="/icecream" render={(props) => <Item item={iceCream} itemName={'Ice Cream'} initQuantity={initQuantity} />} />
                </Switch>
            </div>
        </div>
    )
}

export default BotContainer;