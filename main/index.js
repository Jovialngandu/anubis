const { app } = require('electron/main')
const createWindow = require('./windows')
const setupIpcListeners = require('./ipcListeners')
const setupIpcEmitters = require('./ipcEmitters')
const initDatas=require('./Utils').initDatas
let mainWin;

app.whenReady().then(async() => { 

  initDatas()
  mainWin= await createWindow()  //recuperation de la fenetre principale
  setupIpcEmitters(mainWin) //configuration des emetteurs
  setupIpcListeners(mainWin)  //configuration des ecouteurs

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


