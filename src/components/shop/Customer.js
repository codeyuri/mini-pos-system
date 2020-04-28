import React, { useState } from 'react';
import CustomerItem from './CustomerItem';
import cart from '../../assets/images/cart.gif';
import { useDispatch } from 'react-redux';
import { addToCartBurger } from '../../store/burger/burgerAction';
import { addToCartPizza } from '../../store/pizza/pizzaAction';
import { addToCartCake } from '../../store/cake/cakeAction';
import { addToCartIceCream } from '../../store/iceCream/iceCreamAction';

const Customer = ({cake, pizza, iceCream, burger}) => {
    const [ cash, setCash ] = useState(1350);
    const dispatch = useDispatch();

    const itemsSold = cake.isSold || pizza.isSold || burger.isSold || iceCream.isSold;
    const addEarnings = cake.currentEarning + pizza.currentEarning + burger.currentEarning + iceCream.currentEarning;
    const getChange = cash - addEarnings;

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const addToCartFunc = () => {
        if (!confirm('Purchase selected items? Click "Cancel" to continue shopping.\n\n')) return;
        if ( burger.isSold ) { dispatch(addToCartBurger(burger.itemQuantity)); }
        if ( iceCream.isSold ) { dispatch(addToCartIceCream(iceCream.itemQuantity)); }
        if ( cake.isSold ) { dispatch(addToCartCake(cake.itemQuantity)) }
        if ( pizza.isSold ) { dispatch(addToCartPizza(pizza.itemQuantity)) }
        setCash(getChange);
        alert(
            'Thank you for shopping! \n\n' +
            'Cash: \t\t\t\t₱' + 
            cashComma(cash) + 
            '\nTotal Charge: \t\t₱' + 
            cashComma(addEarnings) + 
            '\n----------------------------------------' +
            '\nChange: \t\t\t₱' + 
            cashComma(getChange) + 
            '\n\n\n'
        );
    }

    return (
        <div className="customer">
            <p>Customer's Cash: { cash ? '₱ ' + cashComma(cash) : '' }</p>
            <input type="number" onChange={ e => setCash(e.target.value) } placeholder="Change customer's current cash." />
            <div className="customer_cart">
                <h2>Customer's Cart { itemsSold ? <span onClick={addToCartFunc} className="add_to_cart">Purchase</span> : null }</h2>
                { burger.isSold ? <CustomerItem itemName={'Burger'} item={burger} /> : null }
                { cake.isSold ? <CustomerItem itemName={'Cake'} item={cake} /> : null }
                { iceCream.isSold ? <CustomerItem itemName={'Ice Cream'} item={iceCream} /> : null }
                { pizza.isSold ? <CustomerItem itemName={'Pizza'} item={pizza} /> : null }
                { itemsSold ? (
                    <>
                        <p className="add_border">Cash: <span>₱ { cashComma(cash) }</span></p>
                        <p><strong> Total: </strong><strong><span>₱ { cashComma(addEarnings) }</span> </strong></p>
                        <p className="add_border"> Change: <span>₱ { cashComma(getChange) }</span> </p>
                    </>
                ) : (
                    <figure>
                        <img className="cartimg" src={cart} alt="cart" />
                    </figure>
                ) }
            </div>
        </div>
    )
}

export default Customer;