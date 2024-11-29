Model=require('../../database/model')

class List extends Model {
    constructor() {
      super('list', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        describtion: 'TEXTE ',
        project_id:' INTEGER'
      },
      ' ,FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE'//ne pas oublier la virgule avant
    );
    }
  }
  
  module.exports = new List();