var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var APP = require('./components/APP');
var Classroom = require('./components/Classroom');
var Teacher = require('./components/Teacher');
var Results = require('./components/Results');

var routes = (
	<Route handler={APP}>
		<DefaultRoute handler={Classroom} />
		<Route name="teacher" path="teacher" handler={teacher}></Route>
		<Route name="results" path="results" handler={results}></Route>
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('react-container'));
});