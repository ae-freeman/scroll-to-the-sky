import React from "react";
import {tree} from "../images/div-1/nature-pine-tree.png";
import {cloud} from "../images/div-1/cloud.png";
// import trees from "../images/trees.png"

class BottomLevel extends React.Component {
  render() {
    return (
      <div>
          <img className="cloud" alt="cloud" src={cloud}/>
          <img className="tree" alt="tree" src={tree}/>
          <img className="tree" alt="tree" src={tree}/>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0c9463"
            fill-opacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,80C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default BottomLevel;
