export class Sidebar extends HTMLElement{
    
    constructor(){
        super();
        
        this.innerHTML=` <aside class=" h-full w-64 bg-gray-100 border-r border-gray-200 flex-shrink-0 overflow-y-auto pt-10">
            <div class="p-4">
                

                <div class="space-y-2 hidden">
                    <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                        <i class="fas fa-columns text-gray-600"></i>
                        <span class="text-gray-700">Boards</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                        <i class="fas fa-calendar text-gray-600"></i>
                        <span class="text-gray-700">Calendar</span>
                    </a>

                    <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                        <i class="fas fa-chart-bar text-gray-600"></i>
                        <span class="text-gray-700">Dashboard</span>

                    </a>

                    <a href="#" class="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                        <i class="fas fa-pencil text-gray-600"></i>
                        <span class="text-gray-700">Notes</span>
                     </a>
                </div>

                <div class="mt-6">
                    <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Your Boards</h3>
                    <div id="project-list" class="space-y-1 ">
                       
                    </div>
                </div>
            </div>
        </aside>
`; 
this.projectList=this.querySelector("#project-list");


}
static eventToAdd={

    'createElement-Project':'createElementForProject',
    'removeElement-Project':'removeElementProject',
    'updateElement-Project':'updateElementProject',
}


    async connectedCallback(){

        this.Listener()
        await this.loadProject()
        

        
        


    }

    Listener()//permet de faire correpondre chaque ecouteur à sa fonction
    {

        Object.keys(Sidebar.eventToAdd).forEach(e => {

            const methodeName=Sidebar.eventToAdd[e]//recuperation du nom dela methode a executer
            this.addEventListener(e, (event) => {
               typeof this[methodeName] == 'function'?this[methodeName](event):console.warn( methodeName+' is not a function of this class')

          });  
            
          });
    }

    createElementProject( id,name='Project',ImageCategory=`<i class="fas fa-code text-purple-600"></i>`){
      
        // creatiion d'un element visuel du projet dans la sidebar
        let content =document.createElement("button");
        // content.setAttribute("href","");
        content.setAttribute("number",id)
        content.classList="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-200 project_click"
        content.innerHTML=` <div class="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                               ${ImageCategory}
                            </div>
                            <span class="text-gray-700">${name}</span>
        `
        return content;

    }

    setProject(element=this.projectList,id,name,ImageCategory){
        //ajoute un projet dans la liste visuel des projets de la sidebar
       
        const content=this.createElementProject(id,name,ImageCategory)
        element.appendChild(content)

        //use case  this.setProjetct(projectList,1) dans connected
       
    }

    
    setProjects(element=this.projectList,projects){
         //ajoute plusieurs projets dans la liste visuel des projets de la sidebar
         projects.forEach(e => {
            this.setProject(element,e.id,e.name,e.ImageCategory)
         });
    }

    removeProject(id){
        //supprime un projet dans la liste visuel des projets de la sidebar
        const toRemove=this.projectList.querySelector("[number|='"+id+"']")
        this.projectList.removeChild(toRemove)
    }
    
    updateProject(newdDatas){
        //modifie un projet dans la liste visuel des projets de la sidebar
        const toUpdate=this.projectList.querySelector("[number|='"+newdDatas.id+"']");
        const newElement=this.createElementProject(newdDatas.id,newdDatas.name,newdDatas.imageCategory);
        this.projectList.replaceChild(newElement,toUpdate);

    }
    createElementForProject(datas){
        this.setProject (this.projectList,datas.detail.id,datas.detail.name,datas.detail.ImageCategory)
    }

    removeElementProject(datas){
        this.removeProject(datas.detail.id)
    }
    updateElementProject(datas){
        this.updateProject(datas.detail)
    }

    async getProject(){
        const project= await window.api.invoke('Project:findAll')
        return project.result
    }
    async loadProject(){
        const project=await this.getProject()
        this.projectList.innerHTML=''
        this.setProjects(this.projectList,project)

        document.querySelectorAll('.project_click').forEach((element) => {//procedure de l'appel à la fonctiion d'affichage d'un projet
            const number=element.getAttribute('number')
            element.addEventListener('click',async()=> {
                await load(number)
                await document.querySelector('task-modal').init()
                await document.querySelector('task-modal').loadList(number)
                await document.querySelector('task-modal').rechangeEtiquette()
                await document.querySelector('task-modal').changeList()       
               
            });

        });
    }


    
}
