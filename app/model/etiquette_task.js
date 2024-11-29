Model=require('../../database/model')

class Etiquette_Task  extends Model {
    constructor() {
      super('etiquette_task', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        etiquette_id:' INTEGER',
        task_id:'INTEGER'
      },
      ` ,FOREIGN KEY (etiquette_id) REFERENCES etiquette(id) ON DELETE CASCADE ON UPDATE CASCADE
        ,FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE ON UPDATE CASCADE`//ne pas oublier la virgule avant
    );
    }
  }
  
  module.exports = new Etiquette_Task();