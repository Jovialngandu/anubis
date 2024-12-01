import { content_header,second_content } from "./content.js";
export class HeaderElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=content_header;
        // const input=this.querySelector("input");
        // input.addEventListener('',()=>{this.querySelector(".modal").style.display="block"})
        
    }
   
}

export class SecondHeaderElement extends HTMLElement{
    constructor() {
        super();
        this.innerHTML=second_content;
       document.querySelector('.project_name').innerHTML=this.getAttribute('project_name');
    }

    changeProjectName(project_name)
    {
        document.querySelector('.project_name').innerHTML=project_name;
    }
}