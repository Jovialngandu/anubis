const { app } = require('electron/main')
const db  = require('../database/database');
const createWindow = require('./windows')

app.whenReady().then(() => { 

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


