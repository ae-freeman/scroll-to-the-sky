import React from "react";
import Start from "./Start";
import BottomLevel from "./BottomLevel";



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
        console.log(window.pageYOffset);
        var scrollPosition = Math.floor(Math.abs(window.pageYOffset - 1714) / 2);
        // console.log(document.body.offsetHeight);
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
                <BottomLevel className="ground"/>
            </div>
           

            </div>
            
        );
    }
}

export default Home;