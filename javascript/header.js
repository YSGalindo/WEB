let  data = [
    "zapatos",
    "blusas",
    "pantalones",
    "sudaderas",
    "vestidos",
    "tenis"

 ];
 function buscar() {

    let query = document.getElementById("buscar").value;
      console.log(query);
      document.getElementById("buscar").value = " "
 } 
 let btn = document.querySelector(".carrito")
 spinIcon = document.querySelector(".spiner")
 btnTex = document.querySelector(".btn-text")

               btn.addEventListener("click" , () => {
            btn.style.cursor = "wait";
        btn.classList.add("checked");
        spinIcon.classList.add("spin");
        btnText.textContent - "Cargando...";
                
        
        
                setTimeout ( () => {
            btn.style.pointerEvents "none";
        spinIcon.classList.replace("spinner","check");
        spinIcon.classList.replace("fa-circle-notch", "fa-check");
        btnText.textContent = "Cargado";


        }, 3500)
        };