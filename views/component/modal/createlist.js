export class  CreateListModal extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
    <div class="modal fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4 close_btn_modal_list">
                    <div class="flex items-center space-x-2">
                        <i class="fas fa-tasks text-gray-500"></i>
                        <h2 class="text-xl font-semibold text-gray-800"> <span class="text-blue-600"> Create</span> New List</h2>
                    </div>
                    <button class="p-2 hover:bg-gray-100 rounded">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                </div>

                <div class="">
                    <div class="col-span-2">
                           <div>
                           </div>                   <div>
                           <label class="block text-sm font-medium text-gray-700 mt-4">Title</label>
                           <input contenteditable="true" id="list_name_create"  type="text"  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ">
                       </div>
                        <div class="mb-6">
                            <h3 class="text-sm font-medium text-gray-700 mb-2">Description</h3>
                            <textarea  contenteditable="true" id="describtion_list_create" class="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                                      placeholder="Add a more detailed description..."></textarea>
                        <h3 class="text-sm font-medium text-gray-700 mb-2 hidden">Date</h3>
                          
                                      </div>
                      
                    </div>
                      <button id="submit_create_list"type="submit" class="w-full bg-blue-50 font-bold text-blue-600 rounded hover:bg-blue-100">Create List</button>
                   
                    </div>
                    
                     
                </div>
                 
    




     
            </div>
        </div>
      
    </div>  `
    this.name=null;
    this.describtion=null;

    

    }
    connectedCallback(){
        this.close();
        document.querySelector('#submit_create_list').addEventListener('click',()=>{
            const value=this.getValue()
            if(value.name!=null){
                window.api.invoke('List:insert',[value])
                this.name=null;
                this.describtion=null;
                load(project.id)
                this.style.display="none"
                document.querySelector('#list_name_create').value=""
                document.querySelector('#describtion_list_create').value=""
                

            }
            
        })
       
    }
    close(){
        this.querySelector('.close_btn_modal_list').addEventListener('click',()=>this.style.display="none")
    }

    getValue(){
        this.name=(document.querySelector('#list_name_create').value.length>0)?document.querySelector('#list_name_create').value:null;
        this.describtion=document.querySelector('#describtion_list_create').value;
        
        return {name:this.name,describtion:this.describtion,project_id:project.id}
    }
        
}

