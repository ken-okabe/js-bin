'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed.
app
  .on('window-all-closed', function()
  {
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
      mainWindow.loadUrl('http://localhost:3000');
    }, 1000);
  });