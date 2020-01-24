import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";


import Counter from "./counter";
import Start from "./Start";



class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleEvent = this.handleEvent.bind(this);

        
        
    };


    handleEvent = (e) => {
        //set scroll position so that the bottom of page is at 0 metres (representing the ground)
        var scrollPosition = Math.floor(Math.abs(window.pageYOffset - 1454) / 2);

        this.setState({
            count: scrollPosition
        });

    }


    componentDidMount() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', this.handleEvent);

         setTimeout(function(){
            let objControl=document.getElementById("footer");
            objControl.scrollIntoView({behavior: "smooth"});
         },500)
        }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleEvent);
        }

        

    render(){
        return (
            <div>
            
            <div className="counter-wrapper">
                <div className="sticky" style={{height: 100, overflow:'scroll'}} onScroll={this.handleEvent}>
                    <h1>{this.state.count} metres</h1>
                    <hr></hr>
                </div>  
            </div>
            

            <div className="test">
                <h1>Size test</h1>
            </div>

            <div id="footer">
            <Start/>
            </div>
           

            </div>
            
        );
    }
}

export default Home;