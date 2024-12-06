export  class TaskModal  extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="modal fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4 close_btn_modal">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tasks text-gray-500"></i>
                        <h2 class="text-xl font-semibold text-gray-800">Market Search</h2>
                    </div>
                    <button class="p-2 hover:bg-gray-100 rounded">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                </div>

                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-2">
                           <div id="etiquette">
                           <span id_etiquette="" class="et_  px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded ">Développement</span>   
                           </div>                   <div>
                           <label class="block text-sm font-medium text-gray-700 mt-4">Title</label>
                           <input id="title_tasker"  type="text"  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                       </div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Description</h3>
                            <textarea  id="describtion_tasker" class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                        <h3 class="text-sm font-medium text-gray-700 mb-2">Date</h3>
                          <div class="flex">
                                <time-picker class="mr-3"></time-picker>
                                <date-picker class=""></date-picker>
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
       <button id="states-button" data-dropdown-toggle="Bookmark_" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-bookmark mr-2"></i>
                                    <span>Bookmark</span>
       </button>
       <div id="Bookmark_" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul id="etiquette_list" class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
              
           </ul>
       </div>
       
   </div>

 
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Actions</h3>
                            <div class="space-y-2">

   <div class="flex">
       <button id="states-button" data-dropdown-toggle="list_" class="w-full p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
           <i class="fas fa-arrow-right mr-2"></i>
                                    <span class="name_list">Move To OtherList</span>
       </button>
       <div id="list_" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
           <ul id='lister_' class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
              
           </ul>
       </div>
       
   </div>

                    
                               <!-- <button class="w-full p-2 text-left text-red-600 hover:bg-red-50 rounded flex items-center">
                                    <i class="fas fa-trash-alt mr-2"></i>
                                    <span>Delete</span>
                                </button>-->
                            </div>
                        </div>
                    </div>
                    
                     
                </div>
                   <button id="validate_tasker"
            class="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-blue-600 rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 space-x-2"
        >
           
            <span>New Task</span>
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
    this.Etiquette=null
    this.List=null
    }
    async connectedCallback(){
        this.closeModal()
        this.loadEtiquette()
        await this.loadList(project.id)
        await this.rechangeEtiquette()
       await this.changeList()
        this.querySelector('#validate_tasker').addEventListener('click', async()=>{
            const value=this.getAllValue()
            if(value.title && value.id_list){
                const confirm=window.confirm('are you sure to save this card ?')
                if(confirm){
                    await window.api.invoke('Task:insert',[{name:value.title,describtion:value.describtion,list_id:value.id_list}])
                    if(value.id_etiquette){
                        const task=await api.invoke('Task:findLast')
                        window.api.invoke('Etiquette_Task:insert',[{etiquette_id:value.id_etiquette,task_id:task.id}])
                    }
                    load(project.id)
                }
            }
            this.style.display="none"
            
        })
      
    }
    closeModal(){
        document.querySelector('.close_btn_modal').addEventListener('click',()=>this.style.display="none")
    }
    async loadEtiquette(){
        let container=document.querySelector('#etiquette_list')
        const etiquettes=  await window.api.invoke('Etiquette:findAll')
        etiquettes.result.forEach(element => {
            container.innerHTML+= `
             <li>
                   <button num_etiquette=${element.id} type="button" class="li_etiquette inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <span class="      px-2 py-1 text-xs font-medium rounded  ${element.style}">${element.name}</span>
                   </button>
               </li>
            `
        }); 
    }

    async  loadList(project_id) {
       
        let container=document.querySelector('#lister_')
        const lists= await window.api.invoke('List:findWhere',[project_id,'project_id'])
        container.innerHTML=""
        lists.forEach(element=>{
            container.innerHTML+=`
             <li>
                   <button num_list="${element.id}" type="button" class=" list_el inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        ${element.name}
                   </button>
             </li>
            
            `
        });
        
        

    }
    async getProject(){
        console.log(document.querySelector('secondheader-element').getAttribute('project_name'))
    }
    async changeEtiquette(id_etiquette){
        const newElement= await api.invoke('Etiquette:findById',[id_etiquette])
        document.querySelector('#etiquette').innerHTML= 
            ` 
             <span id_etiquette="${id_etiquette}" class="et_ px-2 py-1 text-xs font-medium  rounded  ${newElement.style}">${newElement.name}</span>  
            `
    }

    async rechangeEtiquette(){
        document.querySelectorAll('.li_etiquette').forEach(element=>{
           element.addEventListener('click',async()=>{
            this.Etiquette= element.getAttribute('num_etiquette')
                await this.changeEtiquette( this.Etiquette)
               
               
            })
           })
 
           
    }

    async changeList(){
        document.querySelectorAll('.list_el').forEach(element=>{
            element.addEventListener('click',async ()=>{
                this.List=element.getAttribute('num_list')
                this.querySelector('.name_list').innerHTML=element.innerHTML
            })
           })
          
    }
    getEtiquette(){
        return this.querySelector('.et_ ').getAttribute('id_etiquette')
    }
    getTaskList(){

    }
    setTaskList(){

    }
    getAllValue(){
        const title=this.querySelector('#title_tasker').value
        const describtion=this.querySelector('#describtion_tasker').value
       return { title:title,describtion:describtion,id_etiquette:this.Etiquette,id_list:this.List}
    }
    init(){
        this.querySelector('#title_tasker').value=''
        this.querySelector('#describtion_tasker').value=''
        document.querySelector('#etiquette').innerHTML=''
        this.Etiquette=null
        this.List=null
        this.querySelector('.name_list').innerHTML='Move To OtherList'
    }
    
}