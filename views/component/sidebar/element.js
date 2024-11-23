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

   
       
     
}



    connectedCallback(){
        let projectList=this.querySelector("#project-list");
        this.setProjects(projectList,[
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
    //     this.onclick=()=>this.updateProject({
    //         name:"Pro",
    //         id:"2",
    //         imageCategory:` <i class="fas fa-project-diagram text-green-600"></i>`
    //     },
    //     projectList
    // )
    }

    createElementProject( id,name='Project',imageCategory=`<i class="fas fa-code text-purple-600"></i>`){

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

    setProjetct(element,id,name,imageCategory){
       
        const content=this.createElementProject(id,name,imageCategory)
        element.appendChild(content)

        //use case  this.setProjetct(projectList,1) dans connected
       
    }

    

    setProjects(element,projects){
         projects.forEach(e => {
            this.setProjetct(element,e.id,e.name,e.imageCategory)
         });
    }

    removeProject(id,element){
        const toRemove=element.querySelector("[number|='"+id+"']")
        element.removeChild(toRemove)
    }
    
    updateProject(newdDatas,element){
        const toUpdate=element.querySelector("[number|='"+newdDatas.id+"']");
        const newElement=this.createElementProject(newdDatas.id,newdDatas.name,newdDatas.imageCategory);
        element.replaceChild(newElement,toUpdate);
        
        

    }
}