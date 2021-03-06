import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router'


class BinsList extends Component {

	onBinRemove(bin) {
		Meteor.call('bins.remove', bin);
	}

	renderBinList() {

		return this.props.bins.map(bin => {

				const url = `/bins/${bin._id}`;

			return <li className="list-group-item" key={bin._id}>
				<Link to={url}> {bin._id}</Link>
				<span className="pull-right">
					<button 
						className="btn btn-danger"
						onClick={() => this.onBinRemove(bin)}
						>
						Remove

					</button>
				</span>

			</li>
		})
	}

	render() {
		
		return (
			<div className="col-md-8 col-md-offset-2">
				<h4>Bin ID</h4>
				<hr/>
				<ul className="list-group">
					{this.renderBinList()}
				</ul>
			</div>
		)
	}
}

export default createContainer(() => {
	Meteor.subscribe('bins');
	Meteor.subscribe('sharedBins');

	return { bins: Bins.find({}).fetch() }
}, BinsList);

