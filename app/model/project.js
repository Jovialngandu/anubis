Model=require('../../database/model')

class Project extends Model {
    constructor() {
      super('project', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        describtion: 'TEXT ',
      });
    }
  }
  
  module.exports = new Project();