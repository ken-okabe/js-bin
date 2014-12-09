'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

app
  .on('window-all-closed', function()
  { // Quit when all windows are closed.
    if (process.platform != 'darwin')
      app.quit();
  })
  .on('ready', function()
  {
    mainWindow = new BrowserWindow(
    {});
    mainWindow.maximize();

    setTimeout(function()
    {
      mainWindow.loadUrl('http://localhost:3000?html,js,console');
    }, 1000);
  });