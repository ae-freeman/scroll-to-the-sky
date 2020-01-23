import React from "react";
import Home from "./Home";
import Start from "./Start";
import {BrowserRouter, Route, Switch} from "react-router-dom";

//put react router here
class App extends React.Component {
    render(){
        return (
            <div>

                <BrowserRouter>
                    <div>
                         
                        <Switch>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                        
                    </div>
                </BrowserRouter>
                
                

            </div>
            
        );
    }
}

export default App;