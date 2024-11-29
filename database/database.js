// interface d'exectuion des requetes

const sql= require('sqlite3').verbose()
const db = new sql.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

function runQuery(query, params = [], options = {}) {//utiliser pour des requettes simple 
    return new Promise((resolve, reject) => {
      const method = options.method || 'run'; // Méthode par défaut : run
  
      db[method](query, params, (err, result) => {
        if (err) {
          reject({ error: err, query, params }); // Retourner plus d'informations sur l'erreur
        } else {
          resolve({
            result
          });
        }
      });
    });
  }
  

  function runPrepare(query, params = [], options = {}) {//pour des requete preparer sauf le select 
    return new Promise((resolve, reject) => {
      try {
        const stmt = db.prepare(query, options);
  
        params.forEach(element => {
          stmt.run(element);
         
        });
  
       stmt.finalize();
        resolve('query ok'); // Retourner des informations supplémentaires
      } catch (error) {
        reject(error);
      } 
    });
  }

  


 



module.exports={ db,runQuery,runPrepare}