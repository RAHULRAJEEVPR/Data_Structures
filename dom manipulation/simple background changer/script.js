const greyButton=document.getElementById("grey")
const body =document.querySelector("body")
const button=document.querySelectorAll(".button")

button.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",(e)=>{
        console.log(e.target.id);
if(e.target.id){
    body.style.backgroundColor=e.target.id
}
    })
})
// greyButton.style.border="black"
// greyButton.style.padding="10px"
// greyButton.style.color="#60606"