import React from 'react';

const CustomerItem = ({itemName, item}) => {
    const piece = item.itemSold > 1 ? 'pcs' : 'pc'
    const cashComma = num => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return (
        <p>
            { itemName } 
            <span>{
                item.itemTotalEarnings ? (
                    item.itemSold + 
                    piece + 
                    ' x ₱ ' + 
                    item.itemPrice + 
                    '| ₱ ' + 
                    cashComma(item.itemPrice * item.itemSold)
                ) : '- -'
            }
            </span>
        </p>
    )
}

export default CustomerItem;