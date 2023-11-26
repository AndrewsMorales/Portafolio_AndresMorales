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
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

/* 
  Funcion que aplica las animaciones de las habilidades
 */
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;

  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("htmlcssbootstrap");
    habilidades[1].classList.add("php");
    habilidades[2].classList.add("laravelwordpress");
    habilidades[3].classList.add("javascript");
    habilidades[4].classList.add("angularreactjs");
    habilidades[5].classList.add("mysqlsqlserver");
    habilidades[6].classList.add("git");
    habilidades[7].classList.add("autodidacta");
    habilidades[8].classList.add("kanbanscrum");
    habilidades[9].classList.add("responsibilidad");
    habilidades[10].classList.add("trabajoenequipo");
    habilidades[11].classList.add("facilaprendizaje");
    habilidades[12].classList.add("creatividad");
    habilidades[13].classList.add("paqueteriaoffice");
  }
}

/* 
  Detecto el scrolling para aplicar la animacion de la barra de habilidades 
*/
window.onscroll = function () {
  efectoHabilidades();
};

/* 
  Se crea los eventos para cuando precionen algun proyecto los redireccione a un enlace
*/
$("#crudLaravel").on("click", function () {
  window.open("https://github.com/AndrewsMorales/Crud_Laravel");
});
$("#blogResetarios").on("click", function () {
  window.open("https://github.com/AndrewsMorales/Blog_Resetarios");
});
$("#portafolioPersonal").on("click", function () {
  window.open("https://github.com/AndrewsMorales/Portafolio_AndresMorales");
});
$("#activosYValores").on("click", function () {
  window.open("https://actuvosyvalores.bismmasoft.com");
});
$("#intranerSKF").on("click", function () {
  window.open("https://github.com/AndrewsMorales/Intranet-SKF");
});
$("#intranetPF").on("click", function () {
  window.open("https://github.com/AndrewsMorales/Intranet-PF");
});

/* 
  Se crea una funcion apartir de la ejecucion de un evento para enviar el mensaje de contacto
*/
$(document).on("click", "#enviarMensajeContacto", function () {
  var inNombre = $("#inputNombre").val().trim();
  var inNumero = $("#inputNumero").val().trim();
  var inEmail = $("#inputEmail").val().trim();
  var textMensaje = $("#textMensaje").val().trim();
  var textMensajeModi = textMensaje.replace(/ /g, "%20");
  if (inNombre == "" || inNumero == "" || inEmail == "" || textMensaje == "") {
    $("#mensajeError").removeAttr("hidden");
  } else {
    $("#mensajeError").attr("hidden", "");
    $("#formContacto")[0].reset();
    $("html, body").animate({ scrollTop: $("#contacto").offset().top }, 1000);
    window.open(
      `https://wa.me/573016490791?text=Hola%20soy%20*${inNombre}*.%0A*Tel:*%20${inNumero}%0A*Email:*%20${inEmail}%0A${textMensajeModi}`
    );
  }
});
