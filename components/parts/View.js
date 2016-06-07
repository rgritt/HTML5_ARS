var React = require('react');
var View = React.createClass({
	render(){
		retrun (this.props.if) ? <div>{this.props.children}</div> : null;
	}
});

module.exports = View;