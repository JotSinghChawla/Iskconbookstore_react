import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import Bookstore from './Bookstore';

import { Switch, Route, Redirect } from 'react-router-dom'



export class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch location={this.props.location}>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/bookstore' component={Bookstore} />
                    <Route path='/aboutus' component={ () => {
                        window.location.replace('https://www.iskcon.org/about-us/what-is-iskcon.php');
                        return null;
                    } } />
                    <Route path='/contactus' component={ () => {
                        window.location.replace('https://centres.iskcon.org');
                        return null;
                    } } />
                    <Route path='/facebook' component={ () => {
                        window.location.replace('https://www.facebook.com/iskconglobal');
                        return null;
                    } } />
                    <Route path='/twitter' component={ () => {
                        window.location.replace('https://twitter.com/india_iskcon');
                        return null;
                    } } />
                    <Route path='/youtube' component={ () => {
                        window.location.replace('https://www.youtube.com/channel/UCnQ0YFFLezzd5TEx4j8Dfzw');
                        return null;
                    } } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main
