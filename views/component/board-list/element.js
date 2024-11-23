import { Slot } from "../../slot.js";

export class Boardlist extends HTMLElement{
    constructor()
    {
        super();
        
        this.name=this.getAttribute('name');
        
        let content= document.createElement("div")
        content.classList="board-list bg-gray-100 rounded-lg p-3";
        
        content.innerHTML=`
                         <link href="../public/assets/css/all.min.css" rel="stylesheet">
                         <link href="../public/assets/css/style.css" rel="stylesheet">
                         <link href="../public/assets/css/flowbite.min-2.2.1.css" rel="stylesheet">
                        
                    
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">${this.name}</h3>
                            <button class="p-1.5 hover:bg-gray-200 rounded">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                </svg>

                            </button>
                        </div>

                        <!-- Cards -->
                         <slot id="slot" name="task-card"></slot>
                        

                        <button id="add" class="add  mt-3 w-full p-2 text-gray-600 hover:bg-gray-200 rounded flex items-center justify-center">
                            <i class="fas fa-plus mr-2"></i>
                            <span>Add a card</span>
                        </button>
                    
                    

                    `
                   
        
        this.attachShadow({mode:"open"})
       
        this.shadowRoot.appendChild(content)
        
     
       
       
    }
    connectedCallback(){
        this.addTask()
    }

    addTask(){
        const addBoard=this.shadowRoot.querySelector("#add");
        
        let slotElement=this.shadowRoot.querySelector("slot").assignedNodes().filter((e)=>{
            if(e.slot) return e           
        } )
       
        addBoard.addEventListener("click",()=>slotElement[0].innerHTML+=`<div class="task-card bg-white p-3 rounded shadow-sm" >
                                <task-card name="Market Research" describtion="Conduct competitor analysis and user surveys." limiteDate="to day" etiquette="2"></task-card>
    
                            </div>`)

    }
    
}