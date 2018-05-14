var express = require( "express" );
var app = express();
var bodyParser = require( "body-parser" );
var request = require("request");
var fs = require('fs');
var currentDate = new Date();

app.set( "view engine", "ejs" );

var body = fs.readFileSync("courses.html");  
var rate = JSON.parse(body);  

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended:true} ) );

var posts = [
	{ title: "Rates", content: "Today's exchange rates from throughout the world. Select your currency and we'll show you how it's faring against other currencies throughout the world. Unavailable. You can add your course."},
	{ title: "Date today: ", content: currentDate},
	{ title: rate[0].ccy, content: rate[0].buy, content1: "-", content2: rate[0].sale },
	{ title: rate[1].ccy, content: rate[1].buy, content1: "-", content2: rate[1].sale},
	{ title: rate[2].ccy, content: rate[2].buy, content1: "-", content2: rate[2].sale},
];

app.get( "/", function( req, res ) {
	res.render( "main.ejs", {posts: posts} );
});

app.get( "/post/:id", function( req, res ){
	var id = req.params.id;
	res.render("post.ejs", { post: posts[ 0 ] } );
});

app.get( "/post", function(req, res){
	res.render("post.ejs")
});

app.post( "/post", function(req, res){
	var title = req.body.title;
	var content = req.body.content;

	posts.push( {title: title, content: content} );

	res.redirect( "/" );
});

app.listen( 3000, function() {
	console.log("Example app list on port 3000")
});