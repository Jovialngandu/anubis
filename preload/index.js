const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  pa: () => {
    // ipcRenderer.invoke('ping')
    // ipcRenderer.send('yo','yep') 
    ipcRenderer.on('app:ready',()=>console.log('app ready'))
  }
  
  // nous pouvons aussi exposer des variables en plus des fonctions
})

