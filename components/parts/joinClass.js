var React = require('react');

var joinClass = React.createClass({

	joinClass(){
		var studentName = React.findDOMNode(this.refs.name).value;
		var studentID = React.findDOMNode(this.refs.sid).value;
		var seshID = React.findDOMNode(this.refs.sesh).value;

		alert("The Following Data Was Collected" + studentName + "\n" + studentID + "\n" + seshID );


	},
	redner() {
		return (
				<form action="javascript:void(0)" onSubmit={this.joinClass}>
					
					<label>Full Name</label>
					<input ref="name"
					className="form-control"
					required />

					<br>

					<label>Student ID</label>
					<input ref="sid"
					className="form-control"
					required />

					<br>

					<label>Session ID</label>
					<input ref="sesh"
					className="form-control"
					required />

					<br>



					<button className="btn btn-primary">Join Class</button>

				</form>
			);
	}
});

module.exports = joinClass;