//load environment variables
var dotenv = require('dotenv');
dotenv.load();


/**
* Add your authentication apis here with example like the bottom
*/
var graph = require ('fbgraph');
graph.set('client_id', process.env.facebook_app_id);
graph.set('client_secret', process.env.facebook_app_secret);
graph.set('redirect_uri', process.env.facebook_redirect_uri);

/**
//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id', process.env.instagram_client_id);
ig.set('client_secret', process.env.instagram_client_secret);

//export ig as a parameter to be used by other methods that require it.
exports.ig = ig;
**/