var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({

    componentWillMount() {
        this.socket = io('http://54.174.142.181:3000');
        this.socket.on('connect', this.connect);
    },

    connect() {
        alert("You're Connected: " +  this.socket.id);
    },

    render() {
        return (<h1>Open Source Classroom Polling Software</h1>);
    }

});

module.exports = APP;