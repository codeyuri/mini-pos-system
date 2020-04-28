import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PopupAddStock from '../../popup/PopupAddStock';
import PopupEditStock from '../../popup/PopupEditStock';
import PopupResetStock from '../../popup/PopupResetStock';

const Item = ({item, itemName}) => {
    // input error red border
    const [ error, setError ] = useState(false);

    // popup errors
    const [ addError, setAddError ] = useState(false);
    const [ editError, setEditError ] = useState(false);
    const [ errorZero, setErrorZero ] = useState(false);

    // popup edit success msg
    const [ editSuccess, setEditSuccess ] = useState(false);

    // popups
    const [ popupAdd, setPopupAdd ] = useState(false);
    const [ popupEdit, setPopupEdit ] = useState(false);
    const [ popupReset, setPopupReset ] = useState(false);

    // own states
    const [ number, setNumber ] = useState('');
    const totalEarnings = useSelector(state => state)

    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleReset = () => {
        setError(false)
        setPopupReset(true)
    }

    const handleEdit = () => {
        if ( number <= 0 ) { setError(true); setErrorZero(true); }
        else { setError(false); setErrorZero(false); }
        if ( number < item.totalSold + 1 || number < item.itemSold + 1 ) { setError(true); setEditError(true); }
        else { setError(false); setEditError(false); }
        setPopupEdit(true)
        setEditSuccess(true)
    }

    const handleAddStock = () => {
        if ( number <= 0 ) { setAddError(true); setError(true); }
        else { setAddError(false); setError(false)}
        setPopupAdd(true)
    }

    const pressClose = () => {
        setPopupAdd(false)
        setNumber('')
        setError(false);
        setPopupEdit(false)
        setPopupReset(false)
    }

    const allEarnings = totalEarnings.cake.itemTotalEarnings + totalEarnings.pizza.itemTotalEarnings + totalEarnings.iceCream.itemTotalEarnings + totalEarnings.burger.itemTotalEarnings;
    
    return (
        <>
            <div className="item_summary">
                <h2>{ itemName }</h2>
                <p>Number of { itemName }s left: <span>{ item.itemQuantity }/{ item.initQuantity }</span></p>
                <p>Number of {itemName}s Sold: <span>{ item.totalSold }</span></p>
                <p>Price of 1 { itemName }: <span>₱ { item.itemPrice }</span></p>
                <p>Total Earnings: <span>{ item.itemTotalEarnings ? '₱ ' + cashComma(item.itemTotalEarnings) : '- -' }</span></p>
                <div className="all_earnings">
                    <h3>All Items Earnings: <span> ₱ { cashComma(allEarnings ) }</span> </h3>
                </div>
            </div>
            <div className="stock_btns">
                <input 
                    type="number" 
                    placeholder={'Stocks only: Modify ' + itemName + 's' } 
                    onChange={e => setNumber(e.target.value)} 
                    className={ error ? 'active' : null }
                    value={number}
                />
                <button 
                    onClick={handleAddStock} 
                    className="add">Add { number + ' ' + itemName } 
                    { number > 1 ? 's' : null }
                </button>
                <div className="stock_btns_bot">
                    <button 
                            onClick={handleEdit} 
                            className="edit">Edit Quantity
                    </button>
                    <button 
                        onClick={handleReset} 
                        className="reset">Reset { itemName }
                    </button>
                </div>
            </div>
            { popupAdd ? ( <PopupAddStock itemName={itemName} number={number} setError={setError} addError={addError} setAddError={setAddError} pressClose={pressClose} /> ) : null }
            { popupEdit ? ( <PopupEditStock itemName={itemName} number={number} editSuccess={editSuccess} setEditSuccess={setEditSuccess} setError={setError} setNumber={setNumber} editError={editError} setEditError={setEditError} errorZero={errorZero} setErrorZero={setErrorZero} pressClose={pressClose} /> ) : null }
            { popupReset ? ( <PopupResetStock item={item} itemName={itemName} pressClose={pressClose} /> ) : null }
        </>
    )
}

export default Item;