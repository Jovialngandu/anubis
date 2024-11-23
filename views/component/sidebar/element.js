export class Sidebar extends HTMLElement{
    
    constructor(){
        super();
        
        this.innerHTML=` <aside class=" h-full w-64 bg-gray-100 border-r border-gray-200 flex-shrink-0 overflow-y-auto pt-10">
            <div class="p-4">
                

                <div class="space-y-2">
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


    connectedCallback(){


        this.setProjects(this.projectList,[
            {
                name:"Project Alpha",
                id:"1",
                imageCategory:` <i class="fas fa-project-diagram text-blue-600"></i>`
            },
            {
                name:"Marketing",
                id:"2",
                imageCategory:` <i class="fas fa-tasks text-green-600"></i>`
            },
            {
                name:"Development",
                id:"3",
                imageCategory:` <i class="fas fa-code text-purple-600"></i>`
            }

        ])
        this.Listener()

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

    createElementProject( id,name='Project',imageCategory=`<i class="fas fa-code text-purple-600"></i>`){
      
        // creatiion d'un element visuel du projet dans la sidebar
        let content =document.createElement("a");
        content.setAttribute("href","");
        content.setAttribute("number",id)
        content.classList="flex items-center space-x-2 p-2 rounded hover:bg-gray-200"
        content.innerHTML=` <div class="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                               ${imageCategory}
                            </div>
                            <span class="text-gray-700">${name}</span>
        `
        return content;

    }

    setProject(element=this.projectList,id,name,imageCategory){
        //ajoute un projet dans la liste visuel des projets de la sidebar
       
        const content=this.createElementProject(id,name,imageCategory)
        element.appendChild(content)

        //use case  this.setProjetct(projectList,1) dans connected
       
    }

    
    setProjects(element=this.projectList,projects){
         //ajoute plusieurs projets dans la liste visuel des projets de la sidebar
         projects.forEach(e => {
            this.setProject(element,e.id,e.name,e.imageCategory)
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
        this.setProject (this.projectList,datas.detail.id,datas.detail.name,datas.detail.imageCategory)
    }

    removeElementProject(datas){
        this.removeProject(datas.detail.id)
    }
    updateElementProject(datas){
        this.updateProject(datas.detail)
    }
    
}