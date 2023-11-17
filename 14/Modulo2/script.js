var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var countblock = 1;
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
      narracion:
        "Capacitación: Nunca realices trabajos eléctricos si no has sido debidamente capacitado y autorizado para hacerlo. La capacitación es esencial para comprender los riesgos y las medidas de seguridad necesarias. ​ ",
    },
    {
      text: "Corte la corriente eléctrica",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Corte la corriente eléctrica: Antes de realizar cualquier trabajo en equipos o instalaciones eléctricas, asegúrate de cortar la corriente eléctrica adecuadamente y de forma segura. Utiliza dispositivos de bloqueo si es necesario para evitar que otros activen la energía mientras trabajas. ​​",
    },
    {
      text: "No eche agua en un fuego eléctrico",
      src: "audio/audio_03.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "No eche agua en un fuego eléctrico: Nunca utilices agua para apagar un fuego eléctrico. En su lugar, utiliza extintores de incendios apropiados para fuegos eléctricos, como extintores de dióxido de carbono (CO2) o polvo químico seco. ​ ​",
    },
    {
      text: "Zapatos secos",
      src: "audio/audio_04.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Zapatos secos: Cuando utilices herramientas eléctricas o trabajes en entornos eléctricos, asegúrate de que tus zapatos estén secos. El calzado mojado aumenta el riesgo de descarga eléctrica. ​​​",
    },
    {
      text: "Cables en buen estado​​",
      src: "audio/audio_05.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Cables en buen estado: No utilices cables eléctricos que estén dañados o defectuosos. Los cables en mal estado pueden causar cortocircuitos y descargas eléctricas. ​​ ​",
    },
    {
      text: "Evita extensiones/prolongadores en exceso",
      src: "audio/audio_06.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Evita extensiones/prolongadores en exceso: No utilices demasiadas extensiones o prolongadores eléctricos conectados en serie, ya que esto puede sobrecargar el circuito y aumentar el riesgo de incendio o descarga eléctrica. ​",
    },
    {
      text: "Informe de equipos defectuosos",
      src: "audio/audio_07.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Informe de equipos defectuosos: Si detectas equipos eléctricos defectuosos o con problemas de funcionamiento, informa de inmediato a tu supervisor o al departamento de mantenimiento para que se realicen las reparaciones necesarias. ​​",
    },
    {
      text: "Mantenimiento preventivo",
      src: "audio/audio_08.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Mantenimiento preventivo: Realiza un mantenimiento preventivo regular en equipos e instalaciones eléctricas. Esto incluye inspecciones periódicas, pruebas y reparaciones para asegurarse de que todo esté en buenas condiciones de funcionamiento. ​ ​",
    },
    {
      text: "Uso de EPP",
      src: "audio/audio_09.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Uso de EPP: Utiliza equipos de protección personal (EPP) adecuados, como cascos dieléctricos, guantes dieléctricos, ropa de trabajo resistente al fuego y otros elementos de protección, según sea necesario. ​ ​​",
    },
    {
      text: "Procedimientos seguros de trabajo​​",
      src: "audio/audio_10.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Procedimientos seguros de trabajo: Sigue siempre los procedimientos de trabajo seguro establecidos por tu organización. Estos procedimientos deben incluir medidas específicas para prevenir accidentes eléctricos. ​​",
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
