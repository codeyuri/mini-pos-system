import React, { useEffect } from 'react';
import $ from "jquery";
import { NavLink } from 'react-router-dom';
import { changeBuyButton } from '../../store/menu/menuAction';
import { useDispatch, useSelector } from 'react-redux';

const Menu = ({cake, pizza, iceCream, burger, initQuantity}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        $('.menu ul li').click(function () {
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    }, []);

    return (
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                <li onClick={() => dispatch(changeBuyButton('burger'))}><NavLink to="/burger"><h3>Burger</h3> <span>{ burger.itemQuantity }/{ initQuantity.burger }</span></NavLink></li>
                <li onClick={() => dispatch(changeBuyButton('icecream'))}><NavLink to="/icecream"><h3>Ice Cream</h3> <span>{ iceCream.itemQuantity }/ { initQuantity.iceCream }</span></NavLink></li>
                <li onClick={() => dispatch(changeBuyButton('pizza'))}><NavLink to="/pizza"><h3>Pizza</h3> <span>{ pizza.itemQuantity }/{ initQuantity.pizza }</span></NavLink></li>
                <li onClick={() => dispatch(changeBuyButton('cake'))}><NavLink to="/cake"><h3>Cake</h3> <span>{ cake.itemQuantity }/{ initQuantity.cake }</span></NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;