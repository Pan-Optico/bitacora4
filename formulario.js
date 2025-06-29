let txtNombre = document.getElementById (`nombre`).value;
let txtApellido = document.getElementById (`apellido`).value;
let txtPartido = document.getElementById (`partido`).value;
let antiguedad =document.getElementById (`antiguedad`).value;

let btn = document. getElementById (`enviar`);
btn.addEventListener (`click`, mostrarMensaje)
function mostrarMensaje (event){
    evt.preventDefault ();
    document.getElementById (`mensaje`).innerText= 
    "Bienvenido/a" +txtNombre+","+txtApellido+ "de"+ txtPartido;
    if (antiguedad<15){
        document.getElementById (`mensaje`).innerText+= "cosechando sueños en tu andada "
    }
    else{
        document.getElementById (`mensaje`).innerText+= "sembrando la experiencia y el encuentro"

    }
        

} 
