import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({cake, pizza, iceCream, burger, initQuantity}) => {
    return (
        <div className="menu">
            <NavLink exact to="/"><small>&raquo; </small><span className="menu">Menu</span></NavLink>
            <ul>
                <li><NavLink to="/burger"><h3>Burger</h3> <span>{ burger.itemQuantity }/{ initQuantity.burger }</span></NavLink></li>
                <li><NavLink to="/icecream"><h3>Ice Cream</h3> <span>{ iceCream.itemQuantity }/ { initQuantity.iceCream }</span></NavLink></li>
                <li><NavLink to="/pizza"><h3>Pizza</h3> <span>{ pizza.itemQuantity }/{ initQuantity.pizza }</span></NavLink></li>
                <li><NavLink to="/cake"><h3>Cake</h3> <span>{ cake.itemQuantity }/{ initQuantity.cake }</span></NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;