import React from 'react';
import { Link } from 'react-router'

function Splash(props) {
    return (<div className="splash">
        <h1>Splash</h1>
        <Link to="main">take me to the main screen!!</Link>
    </div>);
}

export default Splash