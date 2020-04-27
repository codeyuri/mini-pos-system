import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCake } from '../../../store/cake/cakeAction';
import { resetPizza } from '../../../store/pizza/pizzaAction';
import { resetBurger } from '../../../store/burger/burgerAction';
import { resetIceCream } from '../../../store/iceCream/iceCreamAction';

const Item = ({item, itemName, initQuantity}) => {
    const totalEarnings = useSelector(state => state)
    const dispatch = useDispatch();

    const getInitQuantity = theitem => {
        switch(theitem) {
            case 'Cake': return initQuantity.cake
            case 'Pizza': return initQuantity.pizza
            case 'Burger': return initQuantity.burger
            case 'Ice Cream': return initQuantity.iceCream
            default: null
        }
    }

    const getResetButton = theitem => {
        switch(theitem) {
            case 'Cake': return resetCake
            case 'Pizza': return resetPizza
            case 'Burger': return resetBurger
            case 'Ice Cream': return resetIceCream
            default: null
        }
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleReset = (whatItem, item) => {
        if (!confirm('Confirm to reset all ' + item + ' back to its default state')) return;
        dispatch(whatItem);
    }
    
    return (
        <>
            <div className="item_summary">
                <h2>{ itemName }</h2>
                <p>Number of { itemName }s left: <span>{ item.itemQuantity }/{ getInitQuantity(itemName) }</span></p>
                <p>Number of {itemName}s Sold: <span>{ item.itemSold }</span></p>
                <p>Price of 1 { itemName }: <span>₱ { item.itemPrice }</span></p>
                <p>Total Earnings: <span>{ item.itemTotalEarnings ? '₱ ' + cashComma(item.itemTotalEarnings) : '- -' }</span></p>
                <div className="all_earnings">
                    <h3>All Items Earnings: ₱ {
                        cashComma(
                            totalEarnings.cake.itemTotalEarnings
                            + totalEarnings.pizza.itemTotalEarnings
                            + totalEarnings.iceCream.itemTotalEarnings
                            + totalEarnings.burger.itemTotalEarnings
                        )
                    }</h3>
                </div>
            </div>
            <button onClick={() => handleReset(getResetButton(itemName), itemName)} className="reset">Reset { itemName }</button>
        </>
    )
}

export default Item;