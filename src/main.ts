/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/github-electron/github-electron.d.ts" />

import setup = require("./main.setup");

const electron = require('electron');
const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;
const app: Electron.App = electron.app;

var mainWindow:Electron.BrowserWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 900, height: 600});    
    prepareMainWindow(mainWindow);
        
    mainWindow.loadURL('file://' + __dirname + '/views/index.html');
    
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

function prepareMainWindow(window:Electron.BrowserWindow) {
    if (process.platform != 'darwin') {
        mainWindow.setMenu(null);
    }
    mainWindow.setKiosk(true);
    mainWindow.setTitle("RGB-Pi");
}