var React = require('react');
var Display = require('./parts/Display');

var Classroom = React.createClass({
	render() {
		return (
				<div>
					<Display if={this.props.status === 'connected'}>
						<h1>Join the Class</h1>
					</Display>
				</div>
			);
	}
});

module.exports = Classroom;