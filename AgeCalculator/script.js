const input=document.querySelector(".input-box input");
const result=document.querySelector(".result");
const btn=document.querySelector("#button")

input.max = new Date().toISOString().split("T")[0];

const calAge=()=>{
    let birthDate= new Date(input.value);
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();
    console.log(`${d1} day,${m1} month ${y1} years`)
    let today=new Date()

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    console.log(`${d2} day,${m2} month ${y2} years`)
    let d3,m3,y3;
    y3=y2-y1;

if(m2>m1){
    m3=m2-m1;
}
else{
    y3--;
    m3=12+m2-m1;
}
if(d2>d1){
    d3=d2-d1;
}else{
    m3--;
    d3=getDays(y1,m1)+d2-d1;
}
if(m3<0){
    m3=11;
    y3--;
}
// result.innerHTML=`you are ${y3} years, ${m3} months and ${d3} days old`
result.innerHTML = "You are <span>"+ y3 +"</span> years, <span>"+ m3+ "</span> months and <span>"+d3+"</span> days old";
}

function getDays(year, month){
    return new Date(year, month, 0).getDate();
}
// btn.addEventListener("click",calAge());

