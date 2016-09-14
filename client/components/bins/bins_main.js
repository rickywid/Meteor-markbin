import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';


// BinsMain Component that displays the Bin Editor and Bin Preview
class BinsMain extends Component {

	render() {

		if(!this.props.bin){ return <div>Loading</div>}

		return (
			<div>
				<BinsEditor bin={this.props.bin} />
				<BinsViewer bin={this.props.bin} />
				<BinsShare bin={this.props.bin} />
			</div>
		)
	}
}

// Get access to the collection and pull out the specific binId
// pass 'props' argument to get access to props.params.binId property to use inside BinsMain component
export default createContainer((props) => {

	const { binId } = props.params;
	Meteor.subscribe('bins');
	Meteor.subscribe('sharedBins');

	return { bin: Bins.findOne(binId)};

}, BinsMain);