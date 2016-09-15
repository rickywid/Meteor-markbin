import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {

	onEditorChange(content){
		Meteor.call('bins.update', this.props.bin, content);
	}

	render(){
		return (
			<div className="col-xs-6">
				<h5>Input</h5>
				<CodeMirror 
					value={this.props.bin.content}
					onChange={this.onEditorChange.bind(this)}
					options={{mode: 'markdown', lineNumbers: true}} />
				<hr/>
				<div className="alert alert-warning" role="alert">
					Please keep it clean and friendly. This application is for demo purposes only. Thank you!
				</div>				
			</div>
		)
	}
}

export default BinsEditor;