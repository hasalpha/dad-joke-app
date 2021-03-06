import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.getNewJokes();
    }
    
    render(){
        return(
            <div className="Sidebar">
                <svg id="Layer_1" onClick={this.handleClick} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <title>Get new jokes</title>
                    <g id="goofy">
                    <path d="M255.05.95C114.42.95,0,115.36,0,256S114.42,511.05,255.05,511.05,510.11,396.63,510.11,256,395.67.95,255.05.95Z" fill="#ffd764"/><path d="M255,450.5A127.84,127.84,0,0,1,127.54,332.17H382.59A127.92,127.92,0,0,1,255,450.5Z" fill="#fa645a"/>
                    <path d="M73.69,192.54a71.67,71.67,0,1,1,71.68,71.65,71.67,71.67,0,0,1-71.68-71.65" fill="#fff"/>
                    <path d="M145.31,229a24.42,24.42,0,1,1,24.43,24.44A24.41,24.41,0,0,1,145.31,229" fill="#00b4dc"/>
                    <path d="M436.43,192.54a71.67,71.67,0,1,0-71.68,71.65,71.65,71.65,0,0,0,71.68-71.65" fill="#fff"/>
                    <path d="M364.82,229a24.43,24.43,0,1,0-24.46,24.44A24.43,24.43,0,0,0,364.82,229" fill="#00b4dc"/>
                    <path d="M118.56,309.42A116.68,116.68,0,1,1,235.24,192.75,116.8,116.8,0,0,1,118.56,309.42Zm0-212.89a96.22,96.22,0,1,0,96.21,96.22,96.32,96.32,0,0,0-96.21-96.22Z" fill="#4a4a4a"/>
                    <path d="M395.31,309.42A116.68,116.68,0,1,1,512,192.75,116.81,116.81,0,0,1,395.31,309.42Zm0-212.89a96.22,96.22,0,1,0,96.23,96.22,96.32,96.32,0,0,0-96.23-96.22Z" fill="#4a4a4a"/>
                    <path d="M283.66,187.83H230.82a10.24,10.24,0,0,1,0-20.48h52.83a10.24,10.24,0,0,1,0,20.48Z" fill="#4a4a4a"/>
                    </g>
                </svg>
                <h1 id="Title">The Dad Joke app!</h1>
            </div>
        );
    };
};

export default Sidebar;