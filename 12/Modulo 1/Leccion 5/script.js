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
      text: "Intensidad",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "La intensidad se refiere a la cantidad de corriente eléctrica que pasa a través del cuerpo. A medida que aumenta la intensidad, los riesgos y las consecuencias son cada vez más graves. Pueden incluir dificultad para respirar, fibrilación ventricular (un ritmo cardíaco peligroso), paro cardíaco, paro respiratorio, daños en el sistema nervioso, quemaduras graves, pérdida de conocimiento y, en última instancia, la muerte. ",
    },
    {
      text: "Frecuencia​​",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "La frecuencia de la corriente eléctrica, especialmente en corriente alterna (que se usa en la industria y en nuestros hogares), puede afectar el ritmo cardíaco. Puede llevar a problemas graves en el ritmo cardíaco, como la fibrilación ventricular. ​Ondas de frecuencia y al costado un corazón fibrilando y despues muerto. ​",
    },
    {
      text: "Recorrido​​",
      src: "audio/audio_03.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "El recorrido se refiere a la trayectoria que sigue la corriente eléctrica a través del cuerpo, los recorridos de la corriente más habituales son mano-mano o mano-pie. Las lesiones eléctricas pueden variar en gravedad según el recorrido que siga la corriente y los órganos internos que atraviese. Por ejemplo, si atraviesa el corazón o los pulmones, los daños pueden ser más graves. La impedancia relativa del cuerpo también puede influir en la gravedad de las lesiones.  ​",
    },
    {
      text: "Resistencia​​",
      src: "audio/audio_04.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "La resistencia se relaciona con la oposición que presenta el cuerpo a la corriente eléctrica entre los puntos de contacto. Hay tres tipos de resistencia a considerar: la resistencia propia del cuerpo (que depende de factores como la piel, la superficie de contacto y la humedad), la resistencia de contacto (que se relaciona con la ropa o los guantes) y la resistencia de salida (que se relaciona con el calzado o el tipo de pavimento).  ​​",
    },
    {
      text: "Tiempo de contacto​​",
      src: "audio/audio_05.mp3",
      image: "imagen/recurso5.jfif",
      carouselimg: false,
      narracion:
        "El tiempo durante el cual una persona está en contacto con la corriente eléctrica es un factor crítico. Cuanto más largo sea el tiempo de contacto, mayor será el daño potencial. Por lo tanto, es esencial que los sistemas de protección tengan una acción rápida de corte automático. ​ ​",
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