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
        return (
            <div>
                <Header title="HTML5 Classroom Polling Session" />
            </div>
            );
    }

});

module.exports = APP;