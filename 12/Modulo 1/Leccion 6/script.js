var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");

var data = {
  title: "Lección 02: Estilos de Liderazgo",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Contacto directo",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Contacto directo: Ocurre cuando una persona toca o entra en contacto con un conductor, una instalación o un elemento eléctrico que está bajo tensión directa. Este tipo de contacto presenta un riesgo significativo.​",
      carouselimg: true,
    },   
    {
      text: "Contacto indirecto​",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Contacto indirecto: Se produce cuando una persona toca partes metálicas, conductores, elementos o máquinas que no deberían estar bajo tensión directa, pero, debido a circunstancias accidentales, quedan energizadas. Este tipo de contacto puede ser igualmente peligroso y es importante prestar atención a las condiciones de seguridad para evitarlo. ​",
      carouselimg: false,
    },
  ],
};
const checkFinish = () => {
  if (marcados == data.tarjetas.length && !fin) {
    fin = true;    
    return true;
  }
  return false;
};

const continuarInduccion = () => {
  // Coloca aquí la lógica para continuar con la inducción o redirigir a la siguiente página
};
const mostrarRotacionTemp = () => {
  var rotateInstruction = $("#rotateInstruction");
  rotateInstruction.show();
  setTimeout(function () {
    rotateInstruction.hide();
    reproducirAudioItem(data.src);
  }, 5);
};

var audio2 = document.getElementById("background-audio");
audio2.volume = 0.05;
var flipButton = document.getElementById("flipButton");
var flipContent = document.querySelector(".flip-content");

var isFrontVisible = true;

$(".btn-close-custom").on("click", function () {
  susbcount = 1;
  $("#img-modal").attr("src", "");
  if (miAudio) {
    miAudio.pause(); // Detén la reproducción del audio
  }
  if (!isFrontVisible) {
    voltear();
  }
  var elementos = document.querySelectorAll(".miniatura");
  elementos.forEach(function (elemento) {
    elemento.remove();
  });
  var component = document.querySelectorAll(".component");

  component.forEach(function (elemento) {
    elemento.remove();
  });
  if (checkFinish()) {
    reproducirAudioItem(data.srcfinal);
    console.log("TERMINASTE");
    if (!debuger) {
      console.log("Aqui logica para completar nivel");
      window.parent.validarPuntaje(20, "opcion");
      debuger = true;
    }
  }
});

$(window).on("load", function () {
  $("#cargaModal").modal("hide");
});

const voltear = () => {
  if (isFrontVisible) {
    flipContent.style.transform = "rotateY(180deg)";
    flipButton.innerHTML = '<i class="fa-solid fa-text-slash"></i>';
  } else {
    flipContent.style.transform = "rotateY(0deg)";
    flipButton.innerHTML = '<i class="fa-solid fa-text-height"></i>';
  }
  isFrontVisible = !isFrontVisible;
};

flipButton.addEventListener("click", function () {
  voltear();
});

miAudio.addEventListener("play", function () {
  if (!debuger) {
    $(".btn-close-custom").prop("disabled", true);
    document
      .querySelectorAll(".item")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
});

miAudio.addEventListener("ended", function () {
  if (!validar_modal) {
    $(".btn-close-custom").prop("disabled", false);
  }
  document
    .querySelectorAll(".item")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
  
});

$(document).ready(function () {
  updateTitle();
  ocultarTitulos();
  $("#miModal").modal("show");
  $("#title-theme").text(data.title);
  $("#modalLabel").text(data.title2);

  buildTemplate1("content", data.tarjetas); /* CAMBIAR MODELO */

  window.parent.document.addEventListener("fullscreenchange", () => {
    if (window.parent.document.fullscreenElement) {
      mostrarTitulos();
    } else {
      ocultarTitulos();
    }
  });
});
window.parent.validarPuntaje(20, "opcion");