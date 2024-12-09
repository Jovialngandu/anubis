import { Slot } from "../../slot.js";

export class Boardlist extends HTMLElement{
    constructor()
    {
        super();
        
        this.name=this.getAttribute('name');
        this.num_list_=this.getAttribute('num_list_');
        this.describtion=this.getAttribute('describtion_list_');
        let content= document.createElement("div")
        content.classList="board-list bg-gray-100 rounded-lg p-3";
        
        content.innerHTML=`
                         <link href="../public/assets/css/all.min.css" rel="stylesheet">
                         <link href="../public/assets/css/style.css" rel="stylesheet">
                         <link href="../public/assets/css/flowbite.min-2.2.1.css" rel="stylesheet">
                        
                    
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700 name">${this.name}</h3>
                            <button id='open_update_lister_'  class="p-1.5 hover:bg-gray-200 rounded">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                </svg>

                            </button>
                        </div>

                        <!-- Cards -->
                         <slot id="slot" name="task-card"></slot>
                        

                        <button number_board="" id="add" class="add  mt-3 w-full p-2 text-gray-600 hover:bg-gray-200 rounded flex items-center justify-center">
                            <i class="fas fa-plus mr-2"></i>
                            <span>Add a card</span>
                        </button>
                    
                    

                    `
                   
        
        this.attachShadow({mode:"open"})
       
        this.shadowRoot.appendChild(content)
        
        this.slotElement=this.shadowRoot.querySelector("slot").assignedNodes().filter((e)=>{
            if(e.slot) return e           
        } )
       
       
    }
    static eventToAdd={
        'UpdateBoardElement-Project':'UpdateBoardElementProject',
        'AddTaskElement-Project':'AddTaskElementProject',
        'RemoveTaskElement-Project':'RemoveTaskElementProject',
       
    }
    connectedCallback(){
        this.Listener()
        this.openModal()
        this.shadowRoot.querySelector('#open_update_lister_').addEventListener('click',()=>{
           open_update(this.num_list_,this.name,this.describtion)
        })
       
    }
    Listener()//permet de faire correpondre chaque ecouteur à sa fonction
    {

        Object.keys(Boardlist.eventToAdd).forEach(e => {

            const methodeName=Boardlist.eventToAdd[e]//recuperation du nom dela methode a executer
            this.addEventListener(e, (event) => {
               typeof this[methodeName] == 'function'?this[methodeName](event):console.warn( methodeName+' is not a function of this class')

            });  
            
          });
    }
    UpdateBoardElementProject(datas){
        Object.keys(datas.detail).forEach(element => {//modification des attributs 
            this[element]=datas.detail[element]        
            this.shadowRoot.children[0].querySelector('.name').innerText=datas.detail[element]
        });
    }

    AddTaskElementProject(datas){
        

        let parentTask=document.createElement('div');
        parentTask.classList="task-card bg-white p-3 rounded shadow-sm";
        parentTask.innerHTML=`<task-card> </task-card> ` 
        let task=parentTask.querySelector('task-card')
        
        Object.keys(datas.detail).forEach(element => {//ajout des attributs   
            task[element]=datas.detail[element]  
           
        });
        task.innerHTML=task.render()

        this.slotElement[0].appendChild(parentTask);
    }

    RemoveTaskElementProject(datas){
        const toRemove=this.slotElement[0].querySelector("[taskNumber|='"+datas.detail.id+"']").parentNode
        this.slotElement[0].removeChild(toRemove)
    }
    
    openModal(){
        this.shadowRoot.querySelector('#add').addEventListener('click',()=>{
            document.querySelector('task-modal').style.display="block"
            document.querySelector('task-modal').init()
            document.querySelector('task-modal').List=this.num_list_
        })
    }
}