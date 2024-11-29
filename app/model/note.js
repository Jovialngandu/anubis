Model=require('../../database/model')

class Note extends Model {
    constructor() {
      super('note', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        title: 'TEXT NOT NULL',
        content: 'JSON ',
        project_id:' INTEGER'
      },
      ' ,FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE'//ne pas oublier la virgule avant
    );
    }
  }
  
  module.exports = new Note();