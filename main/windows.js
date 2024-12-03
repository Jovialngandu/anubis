//gestion des fenetres
const { BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow(){
    const win = new BrowserWindow({
      width: 1500,
      height: 1000,
      autoHideMenuBar:true,
      contextIsolation:true,
      enableRemoteModule:false,
      nodeIntegration:false,//desactivation de l'acces direct à node dans le renderer
      webPreferences: 
      {
        preload: path.join(__dirname, '../preload/index.js')
      },
     
      // frame:false  
    })
  
    win.loadFile('views/index.html')
     // Open the DevTools.
    // win.webContents.openDevTools()
     return win
  }

module.exports = createWindow


