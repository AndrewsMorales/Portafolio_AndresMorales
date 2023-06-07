/* Inicializacion de variable */
let menuVisible = false;
/*
  Funcion para ocultar o mostrar el menu dependiendo del caso
*/
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

/* 
  Funcion que se encarga de ocultar el menu cuando se selecciona una opcion del menu
*/ 
function seleccionar(){
  document.getElementById("nav").classList = "";
  menuVisible = false;
}