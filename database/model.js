const { runPrepare ,runQuery} = require('./database');
// gestionaire des modeles (definit comment les modeles doivent  agir)

class Model {

    constructor(tableName, schema) {
      this.tableName = tableName;
      this.schema = schema;
    }


    async createTable() {
        const columns = Object.entries(this.schema)//transforme l'objet en tableau avec chaque entré comme tableau de 2 element (le nom de l'attribut et ses contraintes)
          .map(([name, type]) => `${name} ${type}`)//ceci va retourner un tableau qui va concatener le nom de l'attribut et ses contrainte ou type
          .join(', ');
    
        const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns})`;
        await runQuery(query);
        console.log(`Table "${this.tableName}" créée.`);
    }
    

    async insert(data,more=false) {//le parametre more nous indique si on fait plusoeurs insertion ou pas
      
        if (!more){//si on doit en inserer qu'un seul

            const columns = Object.keys(data).join(', ');//le nom des attributs jouerons les clés 
            const placeholders = Object.keys(data).map(() => '?').join(', ');//pour chaque attreibut on met un ? pour la requete preparer          
            const values =  Array(Object.values(data))
            //cad que la syntaxe du data est ex: data={name:"john",firstname:"doe"}
            // on le converti en tableau pour respecter le format d'insertion pour la prepare
        }
        else
        {
            const columns=data[0].join(', ');
            const placeholders=data[0].map(() => '?').join(', ');
            const values=data[1]
            //cad que la syntaxe est:data={ 0:['name','firstname'],1: [ ['jvl','sss'],['sarah','conor'],['hola',''], ] }
        }
       
        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;
        // const result = await runQuery(query, values);//ceci est pour les nom preparer
        const result=await runPrepare(query,values);

     
        return result;
    }
    

    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        return await runQuery(query,[],{methode:'all'});
    }
    
    
    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const rows = await runQuery(query, [id],{methode:'all'});
        return rows[0] || null;
    }
    
}
module.exports = Model;