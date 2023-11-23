var debuger = true;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var countblock = 1;
var data = {
  title: "Lección 9: Efectos de la corriente eléctrica en el cuerpo humano​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimg: "imagen/recurso5.jfif",
  tarjetas: [
    {
      text: "Fibrilación Ventricular​",
      src: "audio/audio_01.mp3",
      image: "imagen/1.webp",
      carouselimg: false,
      type: false,
      narracion:
        "La fibrilación es una alteración grave del ritmo cardíaco que puede ocurrir cuando la energia eléctrica pasa a través del corazón. Esto puede llevar a un paro cardiaco, ya que el corazón no puede bombear sangre de manera efectiva.",
    },
    {
      text: "​",
      src: "",
      image: "imagen/arrowdown.png",
      carouselimg: false,
      type: true,
    },
    {
      text: "Paro Cardíaco​",
      type: false,
      src: "audio/audio_02.mp3",
      image: "imagen/art05.xml_image4.jpeg",
      carouselimg: false,
      narracion:
        "Esto sucede cuando una persona se electrocuta y la energía eléctrica pasa a través del corazón. Este efecto es extremadamente grave y potencialmente mortal si no se trata de inmediato. ​ ​",
    },
    {
      text: "​",
      src: "",
      image: "imagen/arrowdown.png",
      carouselimg: false,
      type: true,
    },
    {
      text: "Asfixia",
      type: false,
      src: "audio/audio_03.mp3",
      image: "imagen/imagen-fig01.jpg",
      carouselimg: false,
      narracion:
        "Esto sucede cuando la energia eléctrica atraviesa el tórax, provocando una contracción involuntaria del diafragma, lo que impide la respiración. Esto puede llevar a la asfixia y ser fatal si no se trata de manera rápida y adecuada. ​ ​",
    },
    {
      text: "​",
      src: "",
      image: "imagen/arrowdown.png",
      carouselimg: false,
      type: true,
    },
    {
      text: "Tetanización",
      type: false,
      src: "audio/audio_04.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "La tetanización es la contracción muscular involuntaria y sostenida. Esto puede hacer que sea imposible separarse del punto de contacto, lo que aumenta el riesgo de lesiones adicionales. ​ ​​",
    },
    {
      text: "​",
      src: "",
      image: "imagen/arrowdown.png",
      carouselimg: false,
      type: true,
    },
    {
      text: "Quemaduras​​",
      type: false,
      src: "audio/audio_05.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "Esto pasa cuando la energia eléctrica fluye por nuestro cuerpo causando quemaduras tanto internas como externas. Pueden ser muy graves y afectar a los órganos internos. ​ ​",
    },
    {
      text: "​",
      src: "",
      image: "imagen/arrowdown.png",
      carouselimg: false,
      type: true,
    },
    {
      text: "Lesiones permanentes​",
      type: false,
      src: "audio/audio_05.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "La corriente eléctrica puede causar daños permanentes al sistema nervioso, lo que puede resultar en parálisis, contracturas permanentes y otras lesiones crónicas.​ ​",
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