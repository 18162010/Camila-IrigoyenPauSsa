
const usuario = document.getElementById("nombre");
const mail= document.getElementById("correo");
const contraseña= document.getElementById("exampleInputPassword1");


const  checkbox=document.getElementById("exampleCheck1");
let botonEnviar= document.getElementById ("boton1");


function validar () 
{if ((mail.value !=="") && (contraseña.value !==""))
{Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Bienvenido a Paussa',
    showConfirmButton: false,
    timer: 1500
  })}
else Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Campos obligatorios!',
  });
}

botonEnviar.addEventListener("click",(e)=> {
e.preventDefault()
    validar(mail.value,contraseña.value)
    
});

 function guardar () {
    localStorage.setItem ("credencial", mail.value);
    let guardar1 = localStorage.getItem ("credencial")
    localStorage.setItem ("crendecial2", contraseña.value);
    let guardar2=localStorage.getItem ("credencial2")
 }
botonEnviar.addEventListener("click", ()=> {guardar(mail.value,contraseña.value)});

let formularioInicio = {nombre: usuario.value, correo: mail.value, exampleInputPassword1: contraseña.value
};

const formularioInicioJson= JSON.stringify (formularioInicio);
localStorage.setItem ("formularioInicio",formularioInicioJson);
const parse = JSON.parse (formularioInicioJson);
let formulario = localStorage.getItem ("formularioInicio");




