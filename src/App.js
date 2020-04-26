import React, { useState } from 'react';
import TopContainer from './components/TopContainer';
import BotContainer from './components/BotContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';

const App = () => {

    return (
        <Router>
            <div className="store">
                <h1>Mini POS System</h1>
                <div className="store_con">
                    <TopContainer />
                    <BotContainer />
                </div>
            </div>
            <footer>
                <p>Copyright &bull; Danilo Quesada III &bull; { new Date().getFullYear() }</p>
            </footer>
            <Loader />
        </Router>
    )
}
 
export default App;