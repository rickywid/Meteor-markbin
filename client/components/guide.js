import React, { Component } from 'react';

class Guide extends Component {
	render(){
		return (
			<div className="col-md-12">
			<h3>Project Overview</h3>
			<p>This is an application built on the Meteor and React frameworks along with React-Router, React-CodeMirror and Markdown npm modules.</p>
			<hr/>

			<h3>What is ReactBin?</h3>
			<p>ReactBin is a markdown editor similar to the one used on Github. It allows the user to create a bin and write simpler markup that will be translated into HTML.</p>
			<hr/>

			<h3>Features</h3>
			<p>A user can sign up and perform CRUD operations on their own bin. The user has the option to share there bin with others allowing a group of users to collaborate on a single bin.</p>
			<hr/>

			<h3>Additional Features</h3>
			<p>Any changes made to a bin is automatically saved and updated. Also a bin can only be removed by it's original owner or any pf the bin's contributors.</p>


			</div>
		)
	}
}

export default Guide;