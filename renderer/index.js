info= `Cette application utilise Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), et Electron (v${versions.electron()})`

window.addEventListener('DOMContentLoaded',

    async()=>{
        try{
            const datas= await window.api.invoke('Note:findLast');
            console.log(datas)
          
        }catch(error){
            console.error('error',error)
        }
    }
);

window.addEventListener('click',
    async()=>{
        try{
            const data= await window.api.invoke('Note:insert',[{title:'note12',content:'hell'}]);
            if(data){
                console.log(data);
            }else {
                console.error('no data')
            }
        }catch(error){
            console.error('error v',error)
        }
        
    }
)





