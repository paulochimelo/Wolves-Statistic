import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calculos from './pages/Calculos';
import Login from './pages/Login';

const Routes = () => {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Home path="/" exact component={Home}/>
                    <Route path="/calculos" component={Calculos}/>
                    <Route path="/login" component={Login}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
}

export default Routes;