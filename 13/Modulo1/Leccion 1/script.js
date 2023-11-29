var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var miVideo = document.getElementById("miVideo");
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
      text: "E. ELECTRICA",
      src: "audio/audio_01.mp3",    
      image: "imagen/diapo 10.mp4",
      carouselimg: false,
      narracion:
        "Se refiere a la energía producida por el movimiento de electrones a través de un conductor eléctrico. Es una forma de energía altamente versátil y ampliamente utilizada en tecnología y en la vida cotidiana.",
    },
    {
      text: "E. HIDRAULICA​",
      src: "audio/audio_02.mp3",     
      image: "imagen/diapo 12.mp4",
      carouselimg: false,
      narracion:
        "Esta forma de energía se deriva del flujo de agua, como en una central hidroeléctrica, donde la energía cinética del agua se convierte en electricidad.​",
    },
    {
      text: "E. NEUMATICA",
      src: "audio/audio_03.mp3",
      image: "imagen/diapo-14.png",
      carouselimg: false,
      narracion:
        "Utiliza la compresión y expansión de aire comprimido para realizar trabajo, comúnmente en herramientas y sistemas de automatización.​",
    },
    {
      text: "E. MECANICA",
      src: "audio/audio_04.mp3",
      image: "imagen/diapo 16 bici animacion.gif",
      carouselimg: false,
      narracion:
        "Es la energía asociada al movimiento de objetos. Puede ser cinética (debido al movimiento) o potencial (debido a la posición).​",
    },
    {
      text: "E. TERMICA​​",
      src: "audio/audio_05.mp3",
      image: "imagen/diapo 18.gif",
      carouselimg: false,
      narracion:
        "Es la energía asociada a la temperatura y al movimiento de partículas en un sistema. Se manifiesta como calor y puede utilizarse en calefacción y generación de electricidad en centrales termoeléctricas.​",
    },
    {
      text: "E. EOLICA",
      src: "audio/audio_06.mp3",
      image: "imagen/diapo 20 energia eólica.gif",
      carouselimg: false,
      narracion:
        "Es la energía asociada al viento (parques eólicos), el cual es un recurso inagotable. Siendo esta una forma de obtención energía muy eco-amigable.​",
    },
    {
      text: "E. MAREMOTRIZ​",
      src: "audio/audio_07.mp3",
      image: "imagen/diapo-22.png",
      carouselimg: false,
      narracion:
        "En este contexto, puede hacer referencia a la energía contenida en el agua, como en las olas del océano o en las corrientes marinas, que se pueden aprovechar para generar electricidad.​",
    },
    {
      text: "E. SOLAR",
      src: "audio/audio_08.mp3",
      image: "imagen/diapo-24.png",
      carouselimg: false,
      narracion:
        "La energía solar es la obtenida a partir del sol en forma de radiación electromagnética (luz, calor y rayos ultravioleta). Mediante la instalación de paneles solares, se utiliza para generar electricidad (sistema fotovoltaico).​",
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
