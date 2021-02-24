import React, { Component } from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    render(){
        return(
            <div className="card">
                <button className="btn1">Kulit Kerang</button>
                <button className="btn1">Kulit Baja</button>
                <button className="btn1">Kulit Monyet</button>
            </div>
        )
    }
}

export default LifeCycleComp;