import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import Main from './Main';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

require('./main.less'); // load compiled css

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
            <IndexRoute component={Splash}/>
            <Route path="/main" component={Main}/>
        </Route>
    </Router>
), document.getElementById('mount'))