//gestion des ecouteurs ipc 'findWhere','findFirst','findLast','delete','deleteWhere' ,'findAll','findbyId'
const { ipcMain } = require('electron');
const Model = require('../database/model');
const toHandleWithArgs=['findWhere','findById','insert','deleteById','deleteWhere'];//findWhere,delete,Update,deleteWhere
const toHandleWithouthArgs=['findAll','findFirst','findLast'];//findFirt,findLast,
const toOn=['createTable']
const tableName=['Etiquette_Task','Etiquette','List','Note','Project','Task']

async function setupIpcListeners(mainWin) {//on pourait avoir besoin d'effectuer des operztion sur la fenetre 

  tableName.forEach(tableName => {
    let tableLink= require('../app/model/'+tableName)

    toHandleWithArgs.forEach( handle=> {
      ipcMain.handle(tableName+':'+handle,async (event,args=[])=>{ 
        const datas=await tableLink[handle](...args) 
        return datas

      });

    });

    toHandleWithouthArgs.forEach( handle=> {
      ipcMain.handle(tableName+':'+handle,async (event)=>{
        
        const datas=await tableLink[handle]()
        return datas

      });

    });
    
  });

  console.log('IpcListener Done.');
 
}

module.exports = setupIpcListeners;
