var express		= 	require('express');
var app 		= 	express();
var port		=	process.env.PORT || 8080;

app.get('/api/superheroes', function(req, res) {
	res.send(superheroes);
});

// Start Server
app.use(express.static(__dirname + '/build'));
app.listen(port);
console.log('Listening on port ' + port);

var superheroes = [{
	'id': '1'
	'name': 'Ant-Man',
}, {
	'id': '2'
	'name': 'Spider-Man',
}, {
	'id': '3'
	'name': 'Daredevil',
}];