//agit pour la generation de l'interface affichant tout ce qui concerne un projet
/*
on doit recuperer le projet qui a eté lu recement car c'est lui qui sera chargé en premier 
mais comme le soft delete n'est pas encore pres on affichera le premier projet qui sera recuperer
reeuperation du premier projet
recuperatiion de toutes les info lieé à ce projet(lists,tasks,etiquettes)
pour chaque liste recuperer on recupere les taches associé
pour chaque tache on recupere les etiquettes associé
pour eviter les erreur des id null on mettra result à 0_(bref o verra)
*/


async function load() {
    try{
        //projet actuel
        project= await window.api.invoke('Project:findFirst');
        // console.log('Project',project)
        //les listes du projet
        lists= await window.api.invoke('List:findWhere',[project.id,'project_id']);
        // console.log('List',lists)
        //les taches de chaque liste
        promisesTask=lists.map(async (list)=>{
            
               const result= await window.api.invoke('Task:findWhere',[list.id,'list_id']) 
               return result  
        });

        tasks=await Promise.all(promisesTask)
        // console.log('Task',tasks)
        //les etiquettes de chaque task
        promisesEtiquette_task=tasks.map(async(task)=>{//on recupere d'abord les element de la table intermedaire ensuite on recupere celui de la table concerné
            // console.log(task)
            const result= await window.api.invoke('Etiquette_Task:findWhere',[task[0].id,'task_id'])
            return result
        })

        etiquette_tasks=await Promise.all(promisesEtiquette_task)
        // console.log('etiquette_task',etiquette_tasks)
        promisesEtiquette=etiquette_tasks.map(async(etiquette_task)=>{
            const result= await window.api.invoke('Etiquette:findById',[etiquette_task[0].etiquette_id])
            return result
        })
        
        etiquette= await Promise.all(promisesEtiquette)
        // console.log('etiquette',etiquette)

        main=document.querySelector('.main_')
        parentBoardList=main.querySelector('.parent-board-list')
        parentBoardList.innerHTML=""
        secondheader=main.querySelector('secondheader-element')
        secondheader.setAttribute('project_name',project.name)
        secondheader.changeProjectName(project.name)//changement du titre du projet d   ns le visuel
        console.log(project.name)
        
        lists.forEach((list,index_lists)=> {
            
            list.boardList=`<bord-list name="${list.name}">
                                <div class="space-y-3" slot="task-card">`;
            tasks.forEach((task,index_task)=> {
                
                for (let i = 0; i < task.length; i++) {
                   
                    if(index_lists==index_task){//cad que la tache fait partie de cette liste
                       
                        list.boardList+=`
                                <div class="task-card bg-white p-3 rounded shadow-sm" >
                                    <task-card taskNumber="${task[i].id}"name="${task[i].name}" describtion="${task[i].describtion}" limiteDate="to day" etiquette="${task[i].id}"></task-card>
        
                                </div>           
                        `;
                    }         
                }      
            });
            list.boardList+=` </div>     
                    </bord-list> `;
            parentBoardList.innerHTML+=list.boardList
            
        });
        parentBoardList.innerHTML+=` <div  x-add="true"class="board-list">
                        <button class="add-list_ w-full h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                            <i class="fas fa-plus mr-2"></i>
                            <span>Add another list</span>
                        </button>
                    </div>`
    }catch(error){
        console.error('error',error)
    }
}

load()//Call de la fonction d'affichage de ces donnés