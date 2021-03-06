/**
 * Primary file for the API.
 * @author  Rahul Dhar
 *
 */

//Dependencies
var server = require("./lib/server");
var workers = require("./lib/workers");
var cli = require("./lib/cli");

//Declare the app
var app = {};

//Initialization function
app.init = function(callback) {
  //Start the server
  server.init();
  //Start the workers
  workers.init();
  //Start the CLI, but make sure it start last, cause it would hang the console
  setTimeout(function() {
    cli.init();
    callback();
  }, 50);
};

//Execute the init
//Self invoking only if required directly, as in from a testcase or from cmd
if (require.main === module) {
  app.init(function() {});
}
//Export the app
module.exports = app; //Used for testing
