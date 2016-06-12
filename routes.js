// components
import Splash from './Splash';
import Main from './Main';
// deps
import React from 'react';
import ReactDOM from 'react-dom';
// utils
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// main app container
class AppContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

// router
const routes = (<Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
        <IndexRoute component={Splash}/>
        <Route path="main" component={Main}/>
    </Route>
</Router>);


export default routes;