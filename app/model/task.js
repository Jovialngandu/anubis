Model=require('../../database/model')

class Task extends Model {
    constructor() {
      super('task', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        describtion: 'TEXT ',
        list_id:' INTEGER'
      },
      ' ,FOREIGN KEY (list_id) REFERENCES list(id) ON DELETE CASCADE ON UPDATE CASCADE'//ne pas oublier la virgule avant
    );
    }
  }
  
  module.exports = new Task();