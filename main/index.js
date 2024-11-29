const { app } = require('electron/main')
const db  = require('../database/database');
const createWindow = require('./windows')
const listeners = require('./ipcListeners')


app.whenReady().then(() => { 

  createWindow()
  listeners()

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


