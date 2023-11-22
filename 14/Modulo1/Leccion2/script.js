var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 0;
var miAudio = document.getElementById("miAudio");
var countblock = 0;
let index = 0;
let indexElement = 0;
var data = {
  title: "Lección 7: Recomendaciones de seguridad en trabajos eléctricos​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimg: "imagen/recurso5.jfif",
  tarjetas: [
    {
      text: "Capacitación",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      animation: true,
      narracion:
        "Capacitación: Nunca realices trabajos eléctricos si no has sido debidamente capacitado y autorizado para hacerlo. La capacitación es esencial para comprender los riesgos y las medidas de seguridad necesarias. ​ ",
      carousel: [
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
      ],
    },
    {
      text: "Corte la corriente eléctrica",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      animation: false,
      narracion:
        "Corte la corriente eléctrica: Antes de realizar cualquier trabajo en equipos o instalaciones eléctricas, asegúrate de cortar la corriente eléctrica adecuadamente y de forma segura. Utiliza dispositivos de bloqueo si es necesario para evitar que otros activen la energía mientras trabajas. ​​",
    },
    {
      text: "No eche agua en un fuego eléctrico",
      src: "audio/audio_03.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      animation: false,
      narracion:
        "No eche agua en un fuego eléctrico: Nunca utilices agua para apagar un fuego eléctrico. En su lugar, utiliza extintores de incendios apropiados para fuegos eléctricos, como extintores de dióxido de carbono (CO2) o polvo químico seco. ​ ​",
    },
    {
      text: "Zapatos secos",
      src: "audio/audio_04.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: true,
      animation: false,
      narracion:
        "Zapatos secos: Cuando utilices herramientas eléctricas o trabajes en entornos eléctricos, asegúrate de que tus zapatos estén secos. El calzado mojado aumenta el riesgo de descarga eléctrica. ​​​",
      carousel: [
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01.mp3",
          image: "imagen/recurso5.jfif",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
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
  index=0
  susbcount = 0;
  $(".content-inner").remove();
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
      .querySelectorAll(".img-adjust")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
    document
      .querySelectorAll(".miniatura")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
});

function appearContent() {
  if(!data.tarjetas[indexElement].carouselimg){
    if (index == 0) {
      $(".mobile").append("<div class='content-inner'></div>");
    }
    reproducirAudioItem(data.tarjetas[indexElement].carousel[index].src);
  
    $(".content-inner").append(
      "<p>" + data.tarjetas[indexElement].carousel[index++].text + "</p>"
    );
  }
 
}

miAudio.addEventListener("ended", function () {
  if (
    !validar_modal && data.tarjetas[indexElement].animation &&
    (data.tarjetas[indexElement].carousel.length == index||susbcount == countblock)
  ) {
    $(".btn-close-custom").prop("disabled", false);
  } else {
    appearContent();
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
