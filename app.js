/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful.
 *
 * For example:
 *   => `node app.js`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *   => `modulus deploy`
 *   => `heroku scale`
 *
 * The same command-line arguments are supported, e.g.:
 * `node app.js --silent --port=80 --prod`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */


// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);

var args = process.argv.slice(2);
function hasArg(arg){
  return args.indexOf(arg) != -1;
}

var sails;
var rc;
Sails = require('sails').constructor;
rc = require('sails/accessible/rc');
sails = new Sails();

if(hasArg('--no-grunt')){
  sails.log('Running with --no-grunt switch');
  sails.lift({hooks: { grunt: false }});
} else {
  sails.lift(rc('sails'));
}
