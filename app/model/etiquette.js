Model=require('../../database/model')

class Etiquette extends Model {
    constructor() {
      super('etiquette', {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        name: 'TEXT NOT NULL',
        style: 'TEXT NOT NULL',
        
      }
    );
    }
  }
  
  module.exports = new Etiquette();