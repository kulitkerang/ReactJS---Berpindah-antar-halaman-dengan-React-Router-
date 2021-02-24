import React, { Component, Fragment } from 'react';
import Blogpost from '../Blogpost/Blogpost';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <div>
                        <div className="navigation">
                            <Link to="/">Blogpost</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                        </div>
                    </div>
                    <Route path="/" exact component={Blogpost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}



export default Home;