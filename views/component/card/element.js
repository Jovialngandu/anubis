const defaultEtiquette={
    0: { 
        name:'High Priority',
        style:"bg-red-100 text-red-600",
     },       
    1:{
        name:'Design',
        style:'bg-blue-100 text-blue-600',
    },
    2:{
        name: `Medium`,
        style:"bg-yellow-100 text-yellow-600",
    } ,          
  
    3:{
        name:`Development`,
        style:"bg-purple-100 text-purple-600",
    },
    4:{
        name:`Research`,
        style:"bg-indigo-100 text-indigo-600"
    },
    5:{
        name:`Low Priority`,
        style:"bg-green-100 text-green-600",
    },
    6:{
        name:"QA",
        style:"bg-orange-100 text-orange-600"
    },
    7:{
        name:`Completed`,
        style:"bg-gray-100 text-gray-600"
    },
}
export class Taskcard extends HTMLElement{
    constructor()
    {
        super();
        this.name=this.getAttribute('name');
        this.describtion=this.getAttribute('describtion')
        this.numberOffAtache= this.getAttribute('numberOffAtache') ? this.getAttribute('numberOffAtache'): '0';
        this.limiteDate=this.getAttribute('limiteDate')
        this.etiquette=this.getAttribute('etiquette').split(',')
       

        this.innerHTML=this.render();
        
        
    }
    static eventToAdd={

        'updateCardElement-Project':'updateCardElementProject',
    }
    

    connectedCallback() {
        
      this.Listener()
      this.render({name:"new name",describtion:'lorem'})
     
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
             htmletiquette+=`<span class="px-2 py-1 text-xs rounded ${defaultEtiquette[Number(e)].style}">${defaultEtiquette[e].name}</span>`;
        });

        return htmletiquette;
       
    }
   
    updateCardElementProject(datas){//ici les datas sont des attributs qui ont changé
       
        Object.keys(datas.detail).forEach(element => {//modification des attributs 
            this[element]=datas.detail[element]
        });
        console.log()
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