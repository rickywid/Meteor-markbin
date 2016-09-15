import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import Guide from './components/guide';
import { Bins } from '../imports/collections/bins';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BinsList} />
			<Route path="project" component={Guide} />
			<Route path="bins/:binId" component={BinsMain} />
		</Route>
	</Router>
);

Meteor.startup(() => {
	
	ReactDOM.render(routes, document.querySelector('.render-target'));
})
