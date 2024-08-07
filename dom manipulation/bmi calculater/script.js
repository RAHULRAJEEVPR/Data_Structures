const form =document.querySelector("form")
form.addEventListener("submit",(e)=>{
e.preventDefault()
// console.log(e.target);
const height=parseInt(document.querySelector("#height").value)
const weight=parseInt(document.querySelector("#weight").value)
const results=document.querySelector(".result")
const bmi =(weight/((height*height)/10000)).toFixed(2)
results.innerHTML=bmi
})