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
			<nav className="nav navbar-inverse">
				<div className="nav navbar-header">
					<Link to="/" className="nav navbar-brand">React<span id="bin">Bin</span></Link>
				</div>
				<ul className="nav navbar-nav">
					<li><Link to="/project" >Project</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li><a href="#" onClick={this.onBindClick.bind(this)} >Create Bin</a></li>	
					<li><Accounts /></li>
				</ul>
			</nav>
		)
	}
}

export default Header;