import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Client from "./Components/Client/Client";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";


function MainApp(){
    const [overlayVisible, setOverlayVisibility] = useState(false);

    return (
        <Router>
            <NavBar showOverlay={(visible) => setOverlayVisibility(visible)}/>
            <div className={"overLay " + (overlayVisible?"visible":"")}></div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Home">
                    <Redirect to={"/"} />
                </Route>
                <Route path="/Client">
                    <Client />
                </Route>
                <Route path="*">
                    <Redirect to={"/"} />
                </Route>
            </Switch>
        </Router>
    )
}

export default MainApp;