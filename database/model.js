const { runPrepare ,runQuery} = require('./database');
// gestionaire des modeles (definit comment les modeles doivent  agir)

class Model {

    constructor(tableName, schema,constraint='') {
      this.tableName = tableName;
      this.schema = schema;
      this.constraint=constraint;
    }
    
    async createTable() {
        const columns = Object.entries(this.schema)//transforme l'objet en tableau avec chaque entré comme tableau de 2 element (le nom de l'attribut et ses contraintes)
          .map(([name, type]) => `${name} ${type}`)//ceci va retourner un tableau qui va concatener le nom de l'attribut et ses contrainte ou type
          .join(', ');
    
        const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (${columns} ${this.constraint})`;
        await runQuery(query);
        console.log(`Table "${this.tableName}" CREATE.`);
    }
    
    async insert(data,more=false) {//le parametre more nous indique si on fait plusoeurs insertion ou pas
        
        let columns ,placeholders ,values ;
        if (!more){//si on doit en inserer qu'un seul

            columns = Object.keys(data).join(', ');//le nom des attributs jouerons les clés 
            placeholders = Object.keys(data).map(() => '?').join(', ');//pour chaque attreibut on met un ? pour la requete preparer          
            values =  Array(Object.values(data))
            //cad que la syntaxe du data est ex: data={name:"john",firstname:"doe"}
            // on le converti en tableau pour respecter le format d'insertion pour la prepare
        }
        else {
            columns=data[0].join(', ');
            placeholders=data[0].map(() => '?').join(', ');
            values=data[1]
            //cad que la syntaxe est:data={ 0:['name','firstname'],1: [ ['jvl','sss'],['sarah','conor'],['hola',''], ] }
        }
        
        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;    
        // const result = await runQuery(query, values);//ceci est pour les nom preparer
        const result=await runPrepare(query,values); 
        return result;
    }
    
    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        const datas= await runQuery(query,[],{method:'all'});    
        return datas
    }    
    
    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const rows = await runQuery(query, [id],{method:'all'});
        
        return rows.result[0] || null;
    }
    
    async findWhere(value,attribute='id'){
        const query = `SELECT * FROM ${this.tableName} WHERE ${attribute}= ?`;
        const rows = await runQuery(query, [value],{method:'all'});
        
        return rows.result || null;

    }

    async findFirst(){
        const query = `SELECT * FROM ${this.tableName}`;
        const rows = await runQuery(query, [],{method:'all'});     
        return rows.result[0] || null;
    }

    async findLast(){
        const datas=await  this.findAll()
        return datas.result[datas.result.length-1]
    }

    async deleteById(id){
        const query=`DELETE FROM ${this.tableName} WHERE id=${id}`
        try{
            await runQuery(query, [],{method:'run'}); 
            return  {'message':'deleted succefully'}
        }catch(error){
            return  {'error':error}
        }
    }

    async deleteWhere(value,attribute='id'){
         const query=`DELETE FROM ${this.tableName} WHERE ${attribute}=${value}`
         try{
            await runQuery(query, [],{method:'run'}); 
            return  {'message':'deleted succefully'}
        }catch(error){
            return  {'error':error}
        }

    }
}
module.exports = Model;