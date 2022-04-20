let bars=document.querySelector("header nav .bars");
let list =document.querySelector('header nav ul');
let clos=document.querySelector("header nav ul .close");
let navli=document.querySelectorAll("header ul li a");
navli.forEach(el=>{
    el.onclick=function(){
        navli.forEach(el=>{
            el.classList.remove("active");
        })
        this.classList.add("active");
    }
})
bars.onclick=function(){
    'use strict';
    list.style.left="0"

}
clos.onclick=function(){
    "use strict";
    list.style.left='100%'
}
let btn=document.querySelector(".projects button");
let hidden=document.querySelectorAll(".projects .hidden");
let smhidden=document.querySelectorAll(".projects .sm-hidden");
let n=-1;
btn.onclick=function(){
    'use strict';
    hidden.forEach((el)=>{
        el.classList.toggle("hidden")
    });
    let w=window.innerWidth;
    if (w<=400){
        smhidden.forEach(el=>{
            el.classList.toggle("sm-hidden");
        })
    }
    if (n<0){
        btn.textContent="view less";
    }else if (n>0){
        btn.textContent="view more";
    }
    n*=-1


}
let slidItem=document.querySelectorAll(".testmonial .slide-item");
let l=slidItem.length;
console.log(l)
function slidetoright(){
    'use strict';
    for (let i=0;i<l;i++){
     if (slidItem[l-1].classList.contains("active")){
         slidItem[l-1].classList.remove("active");
         slidItem[0].classList.add("active");
         break;
     }else if(slidItem[i].classList.contains("active")){
         slidItem[i].classList.remove("active");
         slidItem[i+1].classList.add("active");
         break;
     }
    }
}
let auto=setInterval(slidetoright,5000);
let slider=document.querySelector('.slider');
slider.onmouseover=function(){
    clearInterval(auto);
}
slider.onmouseleave=function(){
    auto=setInterval(slidetoright,5000);
}
let right=document.querySelector(".slider i.right");
let left=document.querySelector(".slider i.left");
right.onclick=function(){
    'use strict';
    slidetoright();
}
left.onclick=function(){
    'use strict';
    for (let i=0;i<l;i++){
        if (slidItem[0].classList.contains("active")){
            slidItem[0].classList.remove("active");
            slidItem[l-1].classList.add("active");
            break;
        }else if(slidItem[i].classList.contains("active")){
            slidItem[i].classList.remove("active");
            slidItem[i-1].classList.add("active");
            break;
        }
       }
}