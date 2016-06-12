import routes from './routes';
import ReactDOM from 'react-dom';

require('./main.less'); // load compiled css

ReactDOM.render(routes, document.getElementById('mount'))