//gestion des ecouteurs ipc
const { ipcMain } = require('electron');

function setupIpcListeners(mainWin) {//on pourait avoir besoin d'effectuer des operztion sur la fenetre 
 
  ipcMain.handle('ping', ()=>'pong');
  ipcMain.on('yo', (event, args) => {
    console.log('event',event)
    console.log('args',args)
  })
  console.log('IpcListener Done.');
}

module.exports = setupIpcListeners;
