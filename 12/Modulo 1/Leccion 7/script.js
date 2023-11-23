var debuger = true;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var countblock = 1;
var data = {
  title: "Lección 7: Causas de los Accidentes Eléctricos​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimg: "imagen/recurso5.jfif",
  tarjetas: [
    {
      text: "Factor Equipo​​​",
      textInner: "Equipos mal instalados y mal servicio de mantenimiento",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Uno de las principales causas de accidentes eléctricos es la instalación incorrecta de equipos y la falta de mantenimiento adecuado.​​Esto incluye cables mal conectados, ​​aislamiento deteriorado, (cable de alta tension en mal estado)​​ y equipos eléctricos en mal estado.(motor electrico en mal estado) ​​Es fundamental tener un programa de mantenimieneto para garantizar equipos e instalaciones en buen estado ​​",
      carouselimg: true,
    },
    {
      text: "Factor Ambiente\n de Trabajo​​​",
      textInner: "Ambientes de Trabajo",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Los lugares donde se trabaja con energia electricidad deben ser seguros y cumplir con la normativa correspondiente. Los ambientes de trabajo propensos a causar accidentes contienen: la falta de señalizacion y delimitacion, ​​cables sueltos o expuestos,​​y la presencia de materiales inflamables cerca de fuentes de electricidad Por ello, es fundamental hacer inspecciones periodicas para garantizar ambientes de trabajo seguro. ​​",
      carouselimg: true,
    },
    {
      text: "Factor Humano​​",
      textInner: "Trabajadores",
      src: "audio/audio_03.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "La falta de capacitación y/o trabajadores mal calificados son factores críticos en la ocurrecia de accidentes eléctricos. ​​Además, no contar con equipos en buen estado para realizar nuestras actividades de manera segura​​. No Conocer y/o aplicar los procedimientos seguros de trabajo de manera correcta,Y realizar las actividades sin contar con el permiso de trabajo cuando se realicen trabajos con energia electrica.​​ Por ello es fundamental la capacitacion, evaluacion y monitoreo de las actividades con energia electrica. ​ ​",
      carouselimg: true,
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

function voltear() {
  var imgModal = document.getElementById("img-modal");
  var textModal = document.getElementById("text-modal");

  // Detectar si el navegador es Firefox
  var isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

  if (isFrontVisible) {
      // Gira hacia la cara trasera (texto)
      if (isFirefox) {
          imgModal.style.display = 'none';
          textModal.style.display = 'block';
      }

      flipContent.style.transform = "rotateY(180deg)";
      flipButton.innerHTML = '<i class="fa-solid fa-text-slash"></i>';
  } else {
      // Gira hacia la cara frontal (imagen)
      if (isFirefox) {
          textModal.style.display = 'none';
          imgModal.style.display = 'block';
      }

      flipContent.style.transform = "rotateY(0deg)";
      flipButton.innerHTML = '<i class="fa-solid fa-text-height"></i>';
  }

  // Cambia el estado de visibilidad
  isFrontVisible = !isFrontVisible;
}
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
  if (!validar_modal && susbcount == countblock) {
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
window.parent.validarPuntaje(20, "opcion");