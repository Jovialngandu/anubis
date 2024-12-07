import { contents } from "./content.js"
export class SecondModalTask extends HTMLElement{

    constructor(){
        super()
        this.innerHTML=`
        <div class="modal fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4 close_btn_secondmodal">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tasks text-gray-500"></i>
                        <h2 class="text-xl font-semibold text-gray-800 task_namer">Nom du Task</h2>
                    </div>
                    <button class="p-2 hover:bg-gray-100 rounded">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                </div>

                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2">
                           <div class="second_etiquetter">
                           </div>                   <div>
                           <label class="block text-sm font-medium text-gray-700 mt-4">Title</label>
                           <input  contenteditable="true" id='namer_second'  type="text"  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                       </div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Description</h3>
                            <textarea contenteditable="true" id='decriber_second' class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                        <h3 class="text-sm font-medium text-gray-700 mb-2 hidden">Date</h3>
                          <div class="flex"> <!--
                                 <time-picker class="mr-3"></time-picker>
                                <date-picker class=""></date-picker>-->
                        </div>
                                      </div>
                      
                    </div>

                    <div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Add to card</h3>
                            <div class="space-y-2">
                                
                                <button class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center hidden">
                                    <i class="fas fa-check-square mr-2"></i>
                                    <span>Checklist</span>
                                </button>
                                

   <div class="flex">
       <button id="states-btns" data-dropdown-toggle="bookmark_second" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-bookmark mr-2"></i>
                                    <span>Bookmark</span>
       </button>
       <div id="bookmark_second" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul id="etiquette_secondlist" class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-btn">
              
           </ul>
       </div>
       
   </div>

 
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Actions</h3>
                            <div class="space-y-2">

   <div class="flex">
       <button id="states-btn" data-dropdown-toggle="list_second" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-arrow-right mr-2"></i>
                                    <span class="lister_seconder">Move To OtherList</span>
       </button>
       <div id="list_second"  class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul id="lister_second" class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-btn">
              
           </ul>
       </div>
       
   </div>

                    
                               <button id='deleter_task' class="w-full p-2 text-left text-red-600 hover:bg-red-50 rounded flex items-center">
                                    <i class="fas fa-trash-alt mr-2"></i>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                     
                </div>
                   <button id="validate_change_second"
            class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-blue-600 rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 space-x-2"
        >
           
            <span>Save change</span>
        </button>
    




       <!--  <button 
            
            class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 space-x-2"
        >   
            <span>Undo Change</span>
        </button>-->
            </div>
        </div>
      
    </div>
        `
    this.list=null;
    this.etiquette_id=null
    this.tasknumber=null
    }
   

    async connectedCallback(){
        this.closeModal()
        await this.loadList(project.id)     
        await this.loadEtiquette()
        this.rechangeEtiquette()

        document.querySelector('#validate_change_second').addEventListener('click',async()=>{
            const value= await this.getValue()
            const {id,list_id,etiquette_id,name,describtion}=value
            // const confirm=window.confirm('Are you sure to want to save change?')
            { 
                window.api.invoke('Task:UpdateById',[{name:name,describtion:describtion,list_id:list_id},id])
                if(etiquette_id){
                    //recuperons d'abord l'etiquette qu'avait la task avant
                    let lastEtiquette=await window.api.invoke('Etiquette_Task:findWhere',[id,'task_id'])
                   if( lastEtiquette[0] ){//
                       if(lastEtiquette[0].etiquette_id!=etiquette_id) window.api.invoke('Etiquette_Task:UpdateById',[{etiquette_id:etiquette_id},lastEtiquette[0].id])
                       //modifions cet element sinon on va en creer un autre
                   }
                   else{
                    window.api.invoke('Etiquette_Task:insert',[{etiquette_id:etiquette_id,task_id:id}])
                   }
                }
            }
            load(project.id)
            this.style.display="none"
            
        })
       
        
    }

    closeModal(){
        document.querySelector('.close_btn_secondmodal').addEventListener('click',()=>this.style.display="none")
        document.querySelector('.task_namer').innerHTML=""
        document.querySelector('.lister_seconder').innerHTML=''
        document.querySelector('.second_etiquetter').innerHTML=''
        
    }

   async open(element){

    
        document.querySelector('.task_namer').innerHTML=element.name
        document.querySelector('.lister_seconder').innerHTML=element.list_name
        document.querySelector('#namer_second').value=element.name
        document.querySelector('#decriber_second').value=element.describtion
        const etiquette=  await window.api.invoke('Etiquette:findById',element.etiquette)
        etiquette ? document.querySelector('.second_etiquetter').innerHTML= 
         `<span id_etiquette="${etiquette.id}" class="et_ px-2 py-1 text-xs font-medium  rounded  ${ etiquette.style}">${ etiquette.name}</span>  `:
        document.querySelector('.second_etiquetter').innerHTML= ""

        this.list=element.list_id;
        this.etiquette_id=element.etiquette[0]
        this.tasknumber=element.taskNumber
        this.style.display="block"
        this.changeList()

        this.querySelector('#deleter_task').addEventListener('click',async()=>{

            await window.api.invoke('Task:deleteById',[element.taskNumber])
            load(project.id)
            this.style.display="none"
            
        })
       

    }
    async  loadList(project_id) {
       
        let container=document.querySelector('#lister_second')
        const lists= await window.api.invoke('List:findWhere',[project_id,'project_id'])
        container.innerHTML=""
        lists.forEach(element=>{
            container.innerHTML+=`
             <li>
                   <button num_list="${element.id}" type="button" class=" lister_el inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        ${element.name}
                   </button>
             </li>`;
        });
        this.changeList();
        
    }

    async loadEtiquette(){
        let container=document.querySelector('#etiquette_secondlist')
        const etiquettes=  await window.api.invoke('Etiquette:findAll')
        etiquettes.result.forEach(element => {
            container.innerHTML+= `
             <li>
                   <button num_etiquette=${element.id} type="button" class="li_etiquetter inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span class="      px-2 py-1 text-xs font-medium rounded  ${element.style}">${element.name}</span>
                   </button>
               </li>
            `
        }); 
    }
    async changeEtiquette(id_etiquette){
        const newElement= await api.invoke('Etiquette:findById',[id_etiquette])
        document.querySelector('.second_etiquetter').innerHTML=  
            ` 
             <span id_etiquette="${id_etiquette}" class="et_ px-2 py-1 text-xs font-medium  rounded  ${newElement.style}">${newElement.name}</span>  
            `
    }

    async rechangeEtiquette(){
        document.querySelectorAll('.li_etiquetter').forEach(element=>{
           element.addEventListener('click',async()=>{
                this.etiquette_id= element.getAttribute('num_etiquette')
                await this.changeEtiquette(this.etiquette_id)
           
           
            })
           })
       
    }
    async changeList(){
       const b= document.querySelectorAll('.lister_el')
       b.forEach(element=>{
            element.addEventListener('click',()=>{
                console.log('yo')
                this.list=element.getAttribute('num_list')
                document.querySelector('.lister_seconder').innerHTML=element.innerHTML
               
            })
            element.addEventListener('click',()=> console.log('yo'))
           
           })
       
    } 

    async getValue(){
        return {id: this.tasknumber,
                list_id: this.list,
                etiquette_id:this.etiquette_id,
                name:document.querySelector('#namer_second').value,
                describtion:document.querySelector('#decriber_second').value
            };
    }
   

    
}