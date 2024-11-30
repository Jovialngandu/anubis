Model=require('../../database/model')

class Project extends Model {
    constructor() {
      super('project', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        describtion: 'TEXT ',
        ImageCategory:'DEFAULT `<i class="fas fa-project-diagram text-blue-600"></i>`'
      });
    }
  }
  
  module.exports = new Project();