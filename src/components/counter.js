import React from "react";
import { useScrollYPosition } from 'react-use-scroll-position';

const Counter = (props) => {



const scrollY = useScrollYPosition();
console.log("Scroll y position: " + scrollY);

props.parentCallback(scrollY);




        return (
            <div >
                
            </div>
        )
    
}

export default Counter;
