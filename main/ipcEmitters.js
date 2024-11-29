//gestion des emmissions ipc
function setupIpcEmitters(mainWin) {
    // Exemple : Envoyer un événement lorsqu'une action spécifique est effectuée
    mainWin.webContents.once('did-finish-load', () => {
        mainWin.webContents.send('app:ready', { message: 'Application prête !' });
    });
  
    console.log('ipcEmitters done.');
  }
  
  module.exports = setupIpcEmitters;
  