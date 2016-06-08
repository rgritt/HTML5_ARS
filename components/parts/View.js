var React = require('react');

var View = React.createClass({
	render(){
		return (this.props.if) ? <div>{this.props.children}</div> : null;
	};
});

module.exports = View;