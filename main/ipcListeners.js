//gestion des ecouteurs ipc
const { ipcMain } = require('electron');

function setupIpcListeners() {
 
  ipcMain.handle('ping', ()=>'pong');
  
  console.log('Écouteurs IPC configurés.');
}

module.exports = setupIpcListeners;
