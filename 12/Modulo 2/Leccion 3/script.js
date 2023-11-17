var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");

var data = {
  title: "Lección 5: Bloqueo y señalización para trabajos eléctricos​​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Bloqueo:",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Bloqueo: El bloqueo implica la colocación de dispositivos físicos, como candados, tarjetas de bloqueo o llaves de bloqueo, en interruptores, seccionadores u otros dispositivos eléctricos que controlan el flujo de energía en circuitos eléctricos. Los trabajadores encargados de la tarea de mantenimiento o reparación colocan estos dispositivos de bloqueo para asegurarse de que los equipos eléctricos estén desconectados y no puedan ser operados accidental o intencionalmente mientras se realizan las tareas. ​ ",
      carouselimg: true,
    },
    {
      text: "Señalización:​",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Señalización: La señalización es igualmente importante. Se refiere a la colocación de avisos, etiquetas o señales visibles en o cerca de los equipos eléctricos para indicar claramente que están en proceso de mantenimiento o reparación y que no deben ser operados. La señalización proporciona una advertencia visual a otras personas en el lugar de trabajo de que no deben tocar o interactuar con los equipos eléctricos en cuestión. ​ ​",
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

function voltear() {
  var imgModal = document.getElementById("img-modal");
  var textModal = document.getElementById("text-modal");

  // Detectar si el navegador es Firefox
  var isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

  if (isFrontVisible) {
    // Gira hacia la cara trasera (texto)
    if (isFirefox) {
      imgModal.style.display = "none";
      textModal.style.display = "block";
    }

    flipContent.style.transform = "rotateY(180deg)";
    flipButton.innerHTML = '<i class="fa-solid fa-text-slash"></i>';
  } else {
    // Gira hacia la cara frontal (imagen)
    if (isFirefox) {
      textModal.style.display = "none";
      imgModal.style.display = "block";
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
