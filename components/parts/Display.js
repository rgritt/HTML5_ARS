var React = require('react');
var Display = React.createClass({
	render(){
		retrun (this.props.if) ? <div>{this.props.children}</div> : null;
	}
});

module.exports = Display;