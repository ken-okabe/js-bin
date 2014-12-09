'use strict';

var atom = require('atom-shell');
console.log(atom);

var proc = require('child_process');

var jsbin = proc.fork(__dirname + '/node_modules/jsbin/bin/jsbin');
var app1 = proc.spawn(atom, [__dirname + '/app1.js']);

app1.on('close', function(data)
{
  console.log('app1 is closed!!!');
  jsbin.kill('SIGHUP');
});