import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';
import Home from "./Components/Home/Home";
import Client from "./Components/Client/Client";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
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
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
