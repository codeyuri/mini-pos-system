import React from 'react';

const ItemHome = () => {
    return (
        <div className="notice_div">
            <h2>Note:</h2>
            <ul className="notice">
                <li>Select item from the menu to:
                    <ul>
                        <li>View the selected item's summary</li>
                        <li>Reset the selected item's stock</li>
                        <li>Buy a selected item</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ItemHome;