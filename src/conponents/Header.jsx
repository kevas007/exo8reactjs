import React, { Component } from 'react';
import  '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="left">
                        <ul>
                            <li><a href=""> Link1</a></li>
                            <li><a href="">Link2</a></li>
                            <li><a href="">Link3</a></li>
                        </ul>
                    </div>

                    <div className="right">
                        <label htmlFor="" className="se">Search:</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="" className="va">Go</label>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;