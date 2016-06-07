var React = require('react');
var View = require('./parts/View');


var Classroom = React.createClass({
	render() {
		return (
				<div>
					<View if={this.props.status === 'connected'}>
						<h1>Join the Class</h1>
						

					</View>
				</div>
			);
	}
});

module.exports = Classroom;