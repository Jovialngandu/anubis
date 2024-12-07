export class  CreateprojectModal extends HTMLElement{

    constructor(){
        super();
        this.innerHTML=`
       

<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  <span class="text-blue-600"> Create</span> New Project
                </h3>
                <button type="button" class=" close_create end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
               
                    <div>
                        <label for="project_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                        <input type="text" name="project_name" id="project_name_create" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Anubis Project" required />
                    </div>
                    <div class='flex'>
                        <button id="statees-button" data-dropdown-toggle="style_project" class="w-1/2 p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
                            <i class="fas fa-palette mr-2"></i>
                                        <span id="style_choses">Chose Style</span>
                        </button>
                         <button id="stateees-button"  class="w-1/2 p-2 text-left text-gray-600 hover:bg-gray-100 rounded flex items-center" type="button">
                            <i class="fas fa-project-diagram text-blue-600"></i>&nbsp;&nbsp;Project diagram
                        </button>
                          
                    
                        <div id="style_project" class="z-10 hidden bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul id="style_project_list" class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                                <li style="cursor:pointer" class="style_li inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-project-diagram text-blue-600"></i><span class='hidden'>fas fa-project-diagram text-blue-600</span>&nbsp;&nbsp;Project diagram</li>
                                <li style="cursor:pointer"  class="style_li inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-tasks text-green-600"></i><span class='hidden'>fas fa-tasks text-green-600</span> &nbsp;&nbsp;Tasks</li>
                                <li style="cursor:pointer"  class="style_li inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fas fa-code text-purple-600"></i  ><span class='hidden'>fas fa-code text-purple-600</span>&nbsp;&nbsp;Code</li>
                            </ul>
                        </div>
                       
                    
                    </div>
                    <div>
                        <label for="Describtion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Describtion </label>
                         <textarea  contenteditable="true" id="describtion_create" class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                    </div>
    
                    <button id="submit_create"type="submit" class="w-full bg-blue-50 font-bold text-blue-600 rounded hover:bg-blue-100">Create Project</button>
                   
              
            </div>
        </div>
    </div>
</div> 
                
        `
    this.name=null;
    this.describtion=null;
    this.ImageCategory='fas fa-project-diagram text-blue-600'

    }
    async connectedCallback(){

        this.open()
        document.querySelector('.close_create').addEventListener('click',()=>{
        })
        document.querySelector('#submit_create').addEventListener('click',async()=>{
            const value=this.getValue()
            if(this.name!=null){
                await window.api.invoke('Project:insert',[value])
                document.querySelector('side-bar').loadProject()
                document.querySelector('.close_create').dispatchEvent(new MouseEvent('click'))
                document.querySelector('#project_name_create').value="";
                document.querySelector('#describtion_create').value="";
                this.name=null;
                this.describtion=null;
                this.ImageCategory='fas fa-project-diagram text-blue-600'
            }
          
               
        })
      
    }
    open(){
        this.querySelectorAll('.style_li').forEach(element => {
            element.addEventListener('click',()=>{
                document.querySelector('#stateees-button').innerHTML=element.innerHTML
                this.ImageCategory=element.querySelector('span').innerText

            })
        });
    }
    getValue(){
        this.name=(document.querySelector('#project_name_create').value.length>0)?document.querySelector('#project_name_create').value:null;
        this.describtion=document.querySelector('#describtion_create').value;
        
        return {name:this.name,describtion:this.describtion,ImageCategory:`<i class="${this.ImageCategory}"></i> `}
    }
}