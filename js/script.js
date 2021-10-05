// 'use strict'

const login1 = document.getElementById("login1");
const login2 = document.getElementById("login2");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");

/*Se esta editando un estilo desde JS,
donde textLogin(parrafo).enlosestilos.lapropiedrad.se le va asignar el valor hidden (oculto)
*/
textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

//esta función la vamos ha activar con  un evento mouseover , cuando el usuario le pasa el mouse
//encima en el HTMl, mostrar lo que estaba oculto
const show = () => {
  //al parrafo sus estilos la propiedad visibility es igual a hidden?
  if (textLogin.style.visibility == "hidden") {
    //el parrafo se le va editar un estilos , que es la propieda visibility y se le va asignar
    // el valor visible (visible)
    textLogin.style.visibility = "visible";
  } else {
    textLogin.style.visibility = "hidden";
  }
};

//este es para el logout
const show2 = () => {
  if (textLogout.style.visibility == "hidden") {
    textLogout.style.visibility = "visible";
  } else {
    textLogout.style.visibility = "hidden";
  }
};

/* La propiedad de solo lectura localStorage te permite
acceder al objeto local Storage y los datos persisten almacenados 
(en el navgeador)

Nos permite almacenar datos de manera local en el navegador y sin necesidad 
de realizar alguna conexión a una base de datos

*/

const iniciarSesion = () => {
  let usuario = prompt("ingresa tu nombre");

  //set item esta insertando un item o key - valor
  localStorage.setItem("name", usuario);

  //innerHTML sirve para "escribir dentro de un elemento HTML"
  loginUser.innerHTML = usuario;
};

//get item obtener o recuperar dato
//esto solo es para cuando se carga la página
if (localStorage.getItem("name")) {
  loginUser.innerHTML = localStorage.getItem("name");
}

const cerrarSesion = () => {
  loginUser.innerHTML = " ";
  localStorage.clear();
};

login1.onclick = function () {
  iniciarSesion();
};

login2.onclick = function () {
  cerrarSesion();
};
