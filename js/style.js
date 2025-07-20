const creat=document.getElementById("pin22")
const show=document.getElementById("disply")
const inputnumber1=document.getElementById("inputnumber")
const clear1=document.getElementById("clear")
const back=document.getElementById("backspace")
const sumbit=document.getElementById("submit")
const notify=document.getElementById("nomatch")
const notify1=document.getElementById("match")


creat.addEventListener("click",()=>{
    
    let code=Math.floor(Math.random()*9000+1000)
    
    show.value=code
    
    
})

function number(value){
    inputnumber1.value+=value

}




clear1.addEventListener("click",()=>{
    inputnumber1.value=""
})

back.addEventListener("click",()=>{
    inputnumber1.value= inputnumber1.value.slice(0, -1)
    console.log(inputnumber1.value)
})

sumbit.addEventListener("click",()=>{
    if(show.value==inputnumber1.value){
        notify1.innerText=("✅ Pin Matched... Secret door is opening for you")

    }else if (show.value!=inputnumber1.value){
        notify1.innerText=("❌ Pin Didn't Match, Please try again")

    }

    
})