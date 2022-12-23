window.addEventListener("load",()=>{
    let contador=0;
    let inter=setInterval(()=>{
        const container=document.querySelector("#container");
        const d=document.querySelector("#A"+(contador+1));
        d.classList.add("estrella1");
        if((contador+1)==60) clearInterval(inter);
        contador++;
    },100);
    let contador1=0;
    let inter1=setInterval(()=>{
        const container=document.querySelector("#container1");
        const d=document.querySelector("#B"+(contador1+1));
        d.classList.add("arbol1");
        if((contador1+1)==90) clearInterval(inter1);
        contador1++;
    },110);
    
})



