import React, { useState } from 'react';
import CustomerItem from './CustomerItem';
import cart from '../../assets/images/cart.gif';

const Customer = ({cake, pizza, iceCream, burger}) => {
    const [ cash, setCash ] = useState(1350);

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const addToCart = () => {
        if (!confirm('In progress pa ni, Sample confirmation sa add to cart')) return;
        console.log('you have clicked OK, sample sa ni')
    }

    const checkEarnings = cake.itemTotalEarnings || pizza.itemTotalEarnings || burger.itemTotalEarnings || iceCream.itemTotalEarnings;
    const addEarnings = cake.itemTotalEarnings + pizza.itemTotalEarnings + burger.itemTotalEarnings + iceCream.itemTotalEarnings;

    return (
        <div className="customer">
            <p>Customer's Cash: { cash ? '₱ ' + cashComma(cash) : '' }</p>
            <input type="number" onChange={ e => setCash(e.target.value) } placeholder="Change customer's current cash." />
            <div className="customer_cart">
                <h2>Customer's Cart { checkEarnings ? <span onClick={addToCart} className="add_to_cart">Add to Cart</span> : null }</h2>
                { burger.itemSold ? <CustomerItem itemName={'Burger'} item={burger} /> : null }
                { cake.itemSold ? <CustomerItem itemName={'Cake'} item={cake} /> : null }
                { iceCream.itemSold ? <CustomerItem itemName={'Ice Cream'} item={iceCream} /> : null }
                { pizza.itemSold ? <CustomerItem itemName={'Pizza'} item={pizza} /> : null }
                { checkEarnings ? <p className="total"> Total: <span>{ '₱ ' + cashComma(addEarnings) }</span> </p> : null }
                { checkEarnings ? <p> Change: <span>{ '₱ ' + cashComma( cash - (addEarnings)) }</span> </p> : (
                    <figure>
                        <img src={cart} alt="cart" />
                    </figure>
                ) }
            </div>
        </div>
    )
}

export default Customer;