const input=document.querySelector(".input-box input");
const result=document.querySelector(".result");
const btn=document.querySelector("#button")

inputBox.max = new Date().toISOString().split("T")[0];

const calAge=()=>{
    let birthDate= new Date(input.value);
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();

    let today=new Date()

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();


    let d3,m3,y3;
    y3=y2-y1;


    

}
btn.addEventListener("click",calAge);