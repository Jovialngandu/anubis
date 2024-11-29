//fonctionalité utilitaire
const db  = require('../database/database');

async function initDatas() {

   //initialisation database
   await require('../app/model/project').createTable()
   await require('../app/model/note').createTable()
   await require('../app/model/list').createTable()
   await require('../app/model/task').createTable()
   await require('../app/model/etiquette').createTable()
   await require('../app/model/etiquette_task').createTable()
}




module.exports={initDatas}