var price = document.getElementById('price');
price.addEventListener("change",()=>{
   // console.log("data");
    document.getElementById('value').innerText = price.value;
})