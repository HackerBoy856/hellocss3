import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {mainRoutes} from "./router";
import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    {mainRoutes.map(route => {
                        return <Route key={route.path} {...route}/>
                    })}
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
