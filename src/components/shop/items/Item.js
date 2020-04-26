import React from 'react';
import { useSelector } from 'react-redux';

const Item = ({item, itemName, initQuantity}) => {
    const totalEarnings = useSelector(state => state)
    const getInitQuantity = theitem => {
        switch(theitem) {
            case 'Cake': return initQuantity.cake
            case 'Pizza': return initQuantity.pizza
            case 'Burger': return initQuantity.burger
            case 'Ice Cream': return initQuantity.iceCream
            default: null
        }
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
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
    )
}

export default Item;