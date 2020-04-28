import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCake, addStockCake, editCake } from '../../../store/cake/cakeAction';
import { resetPizza, addStockPizza, editPizza } from '../../../store/pizza/pizzaAction';
import { resetBurger, addStockBurger, editBurger } from '../../../store/burger/burgerAction';
import { resetIceCream, addStockIceCream, editIceCream } from '../../../store/iceCream/iceCreamAction';

const Item = ({item, itemName}) => {
    const [ error, setError ] = useState(false);
    const [ number, setNumber ] = useState('');
    const totalEarnings = useSelector(state => state)
    const dispatch = useDispatch();

    const getResetButton = theitem => {
        switch(theitem) {
            case 'Cake': return resetCake
            case 'Pizza': return resetPizza
            case 'Burger': return resetBurger
            case 'Ice Cream': return resetIceCream
            default: null
        }
    }

    const getAddStockButton = theitem => {
        switch(theitem) {
            case 'Cake': return addStockCake
            case 'Pizza': return addStockPizza
            case 'Burger': return addStockBurger
            case 'Ice Cream': return addStockIceCream
            default: null
        }
    }

    const getEditButton = theitem => {
        switch(theitem) {
            case 'Cake': return editCake
            case 'Pizza': return editPizza
            case 'Burger': return editBurger
            case 'Ice Cream': return editIceCream
            default: null
        }
    }

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleAddStock = (whatItem, item, num) => {
        if ( num <= 0 ) { setError(true); alert('Please input a number greater than 0!\n\n'); return }
        if ( num > 0 ) { setError(false) }
        if (!confirm('Proceed adding ' + num + ' ' + item + '(s) to our stock?\n\n')) return;
        dispatch(whatItem(num));
        setNumber('')
    }

    const handleReset = (whatItem, item) => {
        setError(false)
        var promptmsg = prompt(
            'Reset all ' + item + 
            's\nback to its default stock\nincluding total ' + item + 
            ' earnings.\n\nInput ' + item.toUpperCase() + ' to proceed.\n\n' );
        // if (!promptmsg) { return }
        if (!promptmsg) { alert('Please input reset code.\n\n'); return }
        else if (promptmsg !== item.toUpperCase()) { alert('Invalid reset code.\n\n'); return }
        else { dispatch(whatItem); alert('All ' + item + '(s) reverted to its default stock.\n\n') }
    }

    const handleEdit = (whatItem, item, itemname, num) => {
        if ( num <= 0 ) { setError(true); alert('Please input a number greater than 0!\n\n'); return }
        if ( num > 0 ) { setError(false) }
        if ( num < item.totalSold + 1 || num < item.itemSold + 1 ) { alert('Please input quantitiy higher than sold items!'); return }
        if (!confirm('Changed ' + itemname + '(s) quantity to ' + num + '?\n\n')) return;
        dispatch(whatItem(num));
        setNumber('')
    }
    
    return (
        <>
            <div className="item_summary">
                <h2>{ itemName }</h2>
                <p>Number of { itemName }s left: <span>{ item.itemQuantity }/{ item.initQuantity }</span></p>
                <p>Number of {itemName}s Sold: <span>{ item.totalSold }</span></p>
                <p>Price of 1 { itemName }: <span>₱ { item.itemPrice }</span></p>
                <p>Total Earnings: <span>{ item.itemTotalEarnings ? '₱ ' + cashComma(item.itemTotalEarnings) : '- -' }</span></p>
                <div className="all_earnings">
                    <h3>All Items Earnings: 
                        <span> ₱ {
                            cashComma(
                                totalEarnings.cake.itemTotalEarnings
                                + totalEarnings.pizza.itemTotalEarnings
                                + totalEarnings.iceCream.itemTotalEarnings
                                + totalEarnings.burger.itemTotalEarnings
                            )
                        }</span>
                    </h3>
                </div>
            </div>
            <div className="stock_btns">
                <input 
                    type="number" 
                    placeholder={'Add ' + itemName + 's' } 
                    onChange={e => setNumber(e.target.value)} 
                    className={ error ? 'active' : null }
                    value={number}
                />
                <button 
                    onClick={() => handleAddStock(getAddStockButton(itemName), itemName, number)} 
                    className="add">Add { number + ' ' + itemName } 
                    { number > 1 ? 's' : null }
                </button>
                <div className="stock_btns_bot">
                    <button 
                            onClick={() => handleEdit(getEditButton(itemName), item, itemName, number)} 
                            className="edit">Edit Quantity
                    </button>
                    <button 
                        onClick={() => handleReset(getResetButton(itemName), itemName)} 
                        className="reset">Reset { itemName }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Item;