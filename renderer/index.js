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
            const data= await window.api.invoke('Note:UpdateById',[{title: 'jdd', content: 'd'},7]);
            if(data){
                console.log(data);
            }else {
                console.error('no data')
            }
        }catch(error){
            console.error('error',error)
        }
        
    }
)





