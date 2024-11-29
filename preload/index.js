const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  appReqdy: () => {
    ipcRenderer.on('app:ready',()=>console.log('app ready'))
  },
}

);



contextBridge.exposeInMainWorld('api',{
  invoke:(channel,args)=>ipcRenderer.invoke(channel,args),
  send:(channel,args)=>ipcRenderer.send(channel,args),
  on:(channel,callback)=> 
    ipcRenderer.on(channel,(event,...args)=>
    callback(...args)),

    
});





  