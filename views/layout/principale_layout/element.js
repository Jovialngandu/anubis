import { content_layout } from "./content.js";
export class LayoutPrincipal extends HTMLElement{

    constructor(){
        super();
    
        this.innerHTML=content_layout;

    }
    

}

