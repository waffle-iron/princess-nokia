import routes from './routes';
import ReactDOM from 'react-dom';

// copy index.html to /dist when NODE_ENV is production
if(process.env.NODE_ENV === 'production') {
    require('file?name=[name].[ext]!./index.html');
}

require('./main.less'); // load compiled css

ReactDOM.render(routes, document.getElementById('mount'))