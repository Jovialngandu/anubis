const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1500,
    height: 1000,
    autoHideMenuBar:true,
    webPreferences: 
    {
      preload: path.join(__dirname, '../preload/index.js')
    },

    // frame:false

  })


  win.loadFile('views/index.html')
   // Open the DevTools.
   win.webContents.openDevTools()
}

app.whenReady().then(() => {
 
  ipcMain.handle('ping', () => 'Anubis');
  
  createWindow()


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


