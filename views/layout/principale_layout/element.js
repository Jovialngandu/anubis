import { content_layout } from "./content.js";
export class LayoutPrincipal extends HTMLElement{

    constructor(){
        super();
        let body=document.createElement("body")
        body.classList="bg-gray-50"
        body.innerHTML=content_layout;
        const shadow = this.attachShadow({mode:"open"})
        shadow.prepend(body);
        
    
       
       
    }
    

}

