import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import ItemDetails from './ItemDetails';
import Shop from './Shop';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about_us" exact component={About} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/item/:id" exact component={ItemDetails} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
