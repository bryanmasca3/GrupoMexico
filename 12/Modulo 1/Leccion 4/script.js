var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var countblock = 1;
var data = {
  title: "Lección 02: Estilos de Liderazgo",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimg: "imagen/recurso5.jfif",
  tarjetas: [
    {
      text: "",
      src: "audio/audio_01_1.mp3",
      image: "imagen/recurso5.jfif",
      narracion: "El cuerpo humano debe ser conductor de electricidad.",
      carouselimg: true,
      carousel: [
        {
          text: "",
          src: "audio/audio_01_1.mp3",
          image: "imagen/recurso5.jfif",
          narracion: "El cuerpo humano debe ser conductor de electricidad. ​",
        },
        {
          text: "",
          src: "audio/audio_01_2.mp3",
          image: "imagen//recurso5.jfif",
          narracion:
            "El cuerpo humano debe formar parte de un circuito eléctrico. ",
        },
        {
          text: "",
          src: "audio/audio_01_3.mp3",
          image: "imagen//recurso5.jfif",
          narracion:
            "Debe existir una diferencia de potencial (voltaje) entre dos puntos de contacto en el cuerpo, como cuando tocamos un cable con corriente y una superficie conductora al mismo tiempo. ​",
        },
      ],
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
      .querySelectorAll(".img-adjust")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
      document
      .querySelectorAll(".miniatura")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
  
});

miAudio.addEventListener("ended", function () {
  if (!validar_modal&& susbcount == countblock) {
    $(".btn-close-custom").prop("disabled", false);
  }
  document
    .querySelectorAll(".item")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
    document
    .querySelectorAll(".miniatura")
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

const reproducirFirst = (modalId, contentRotate) => {
  $("#" + modalId).modal("hide");
  var rotateInstruction = $("#" + contentRotate);
  rotateInstruction.show();
  setTimeout(function () {
    rotateInstruction.hide();
    reproducirAudioItem(data.src);
  }, 5);
  if (window.parent.tienePointerEventsNone2()) {
    debuger = true;
  }
};