import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router'

class Header extends Component {

	onBindClick(event){
		event.preventDefault();

		Meteor.call('bins.insert', (error, binId) => {
			browserHistory.push(`/bins/${binId}`);
		});
	}

	render(){
		return (
			<nav className="nav navbar-default">
				<div className="nav navbar-header">
					<Link to="/" className="nav navbar-brand">ReactBin</Link>
				</div>
				<ul className="nav navbar-nav">
					<li><Accounts /></li>
					<li><a href="#" onClick={this.onBindClick.bind(this)} >Create Bin</a></li>
					<li><Link to="/guide" >Guide</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Header;