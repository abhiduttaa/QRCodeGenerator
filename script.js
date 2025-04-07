const btnEle = document.querySelector(".btn")

const imgEle = document.getElementById("qr-img")
const boxEle= document.getElementById("img-box")

const intputEle= document.getElementById("qr-text")

btnEle.addEventListener("click",()=>{

    if(intputEle.value.length>0){
    imgEle.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${intputEle.value}`
   

    boxEle.classList.add("show-img")

}
})