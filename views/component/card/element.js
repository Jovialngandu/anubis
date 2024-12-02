const getEtiquette=await api.invoke('Etiquette:findAll');
const defaultEtiquette=getEtiquette.result


export class Taskcard extends HTMLElement{
    constructor()
    {
        super();
        this.taskNumber=this.getAttribute('taskNumber');
        this.name=this.getAttribute('name');
        this.describtion=this.getAttribute('describtion')
        this.numberOffAtache= this.getAttribute('numberOffAtache') ? this.getAttribute('numberOffAtache'): '0';
        this.limiteDate=this.getAttribute('limiteDate')
        this.etiquette=  this.getAttribute('etiquette') ? this.getAttribute('etiquette').split(','):[];
       
        // console.log(this.taskNumber,this.etiquette)
        this.innerHTML=this.render();
        
        
    }
    static eventToAdd={

        'updateCardElement-Project':'updateCardElementProject',
    }
    

    async connectedCallback() {
        
      this.Listener()
     
      }
      
   
      Listener()//permet de faire correpondre chaque ecouteur à sa fonction
    {

        Object.keys(Taskcard.eventToAdd).forEach(e => {

            const methodeName=Taskcard.eventToAdd[e]//recuperation du nom dela methode a executer
            this.addEventListener(e, (event) => {
               typeof this[methodeName] == 'function'?this[methodeName](event):console.warn( methodeName+' is not a function of this class')

          });  
            
          });
    }
    ToHtmlEtiquette(){
        let htmletiquette=""
        
             this.etiquette.forEach(e => {
             htmletiquette+=`<span class="px-2 py-1 text-xs rounded ${defaultEtiquette.filter(a=>a.id==e)[0].style}">${defaultEtiquette.filter(a=>a.id==e)[0].name}</span>`;
             });
         

        return htmletiquette;
       
    }
   
    updateCardElementProject(datas){//ici les datas sont des attributs qui ont changé
       
        Object.keys(datas.detail).forEach(element => {//modification des attributs 
            this[element]=datas.detail[element]
        });
        this.innerHTML=this.render();
    
    }
    render(){//ici le parametre sont les attributs et leurs nouvelles valeurs 
        
        return `
                    <div class="flex space-x-2 mb-2">
                        ${this.ToHtmlEtiquette()}
                    </div>
                    <h4 class="font-medium text-gray-800 mb-2">${this.name}</h4>
                    <p class="text-sm text-gray-600 mb-3">${this.describtion}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-gray-500 text-sm">
                            <i class="fa-solid fa-paperclip mr-1"></i>
                            <span>${this.numberOffAtache}</span>
                        </div>
                        <div class="flex items-center text-gray-500 text-sm">
                                
                            <span class="text-xs text-gray-500">Date limite: ${this.limiteDate}</span>
                        </div>
                    </div>
        `;
        
        
    }
} 