import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
	<Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
