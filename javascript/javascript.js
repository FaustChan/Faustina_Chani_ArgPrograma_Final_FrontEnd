document.addEventListener('click',function(){
    const nombre = document.getElementById("nombre");
    const tiempo = document.getElementById("tiempo");
    nombre.innerHTML =document.getElementById("name").value;
    const tiempoIngresado = document.getElementById("edad").value;
    
    if (tiempoIngresado >= 20){
        tiempo.innerHTML= parseInt(tiempoIngresado)-20;
    }else{
        tiempo.innerHTML= 2
    }
    
    
    //console.log(document.getElementById("edad").value);
});
const botonColor= document.getElementById("col");
botonColor.onclick = function(){
    cambiarColor("#ffe4c4","informacion");
    cambiarColor("#fff8dc","fond");
    cambiarColor("#f0e68c","imagen");   
}

function cambiarColor(color,element){
    document.getElementById(element).style.backgroundColor=color;
}
