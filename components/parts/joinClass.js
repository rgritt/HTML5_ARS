var React = require('react');

var joinClass = React.createClass({

	joinClass() {
		var memberName = React.findDOMNode(this.refs.name).value;
		this.props.emit('join', { name: memberName });
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.joinClass}>

				<label>Full Name</label>
				<input ref="name"
					   className="form-control"
				       placeholder="Full Name"
				       required />
				<button className="btn btn-primary">Join Classroom</button>

			</form>
		);
	}

});

module.exports = joinClass;