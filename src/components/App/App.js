import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Asset from '../../pages/Asset';
import Search from '../../pages/Search';
import Footer from '../Footer';
import Home from '../../pages/Home';
import './App.css';

const App = () => (
    <Router>
        <div className="app">
            <main className="app__content">
                <Route exact path="/" component={Home} />
                <Route path="/search/:query/:type" component={Search} />
                <Route path="/asset/:id" component={Asset} />
            </main>
            <Footer />
        </div>
    </Router>
);

export default App;