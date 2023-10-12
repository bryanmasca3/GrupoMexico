var debuger = true;
var marcados = 0;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio

//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
/* var data = {
    title: 'Lección 01: Definiciones Generales',
    title2: 'Definiciones Generales',
    status: false,
    src: 'audio/audio1.mp3',
    tarjetas: [
        {
            text: "Permiso Seguro de Trabajo",
            src: "audio/audio01.mp3",
            image: "imagen/img01.png"
        },
        {
            text: "Actividades de Alto Riesgo",
            src: "audio/audio02.mp3",
            image: "imagen/img02.png"
        },
        {
            text: "Trabajo en Altura",
            src: "audio/audio03.mp3",
            image: "imagen/img03.png"
        },
        {
            text: "Sistema de detención de caídas",
            src: "audio/audio04.mp3",
            image: "imagen/img04.png"
        },
        {
            text: "Punto de anclaje",
            src: "audio/audio05.mp3",
            image: "imagen/img05.jpg"
        },
        {
            text: "Arnés de cuerpo entero",
            src: "audio/audio06.mp3",
            image: "imagen/img06.jpg"
        }
    ]
}
 */

var data = {
  title: "Lección 02: Estilos de Liderazgo", //CHANGE
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio1.mp3",
  srcfinal: "audio/audio11.mp3",
  srcimagecircle: "imagen/img08.jpg",
  tarjetas: [
    {
      text: "Liderazgo \n autocrático", //CHANGE
      src: "audio/audio01.mp3",
      image: "imagen/Recurso 1.png",
    },
    {
      text: "Liderazgo \n burocrático​", //CHANGE
      src: "audio/audio02.mp3",
      image: "imagen/Recurso 2.png",
    },
    {
      text: "Liderazgo\n  carismático​", //CHANGE
      src: "audio/audio03.mp3",
      image: "imagen/img03.jpg",
    },
    {
      text: "Liderazgo\n participativo​", //CHANGE
      src: "audio/audio04.mp3",
      image: "imagen/img04.jpg",
    },
    {
      text: "Liderazgo \nlaissez-faire​", //CHANGE
      src: "audio/audio05.mp3",
      image: "imagen/Recurso 3.png",
    },
    {
      text: "Liderazgo orientado\n a las personas​", //CHANGE
      src: "audio/audio06.mp3",
      image: "imagen/Recurso 4.png",
    },
    {
      text: "Liderazgo\n natural​", //CHANGE
      src: "audio/audio07.mp3",
      image: "imagen/Recurso 5.png",
    },
    {
      text: "Liderazgo\n orientado a la tarea​​", //CHANGE
      src: "audio/audio08.mp3",
      image: "imagen/Recurso 6.png",
    },
    {
      text: "Liderazgo \ntransaccional​​", //CHANGE
      src: "audio/audio09.mp3",
      image: "imagen/Recurso 7.png",
    },
    {
      text: "Liderazgo\n transformacional​​", //CHANGE
      src: "audio/audio10.mp3",
      image: "imagen/img10.jpg",
    },
  ],
};

function mostrarRotacionTemp() {
  var rotateInstruction = $("#rotateInstruction");

  // Mostrar el elemento
  rotateInstruction.show();

  // Ocultar el elemento después de 2 segundos (ajusta este valor según tus necesidades)
  setTimeout(function () {
    rotateInstruction.hide();
    reproducirAudioItem(data.src);
  }, 4000);
}

function updateTitle() {
  const elementoPadre = window.parent.document.getElementById("title-padre");
  if (elementoPadre) {
    elementoPadre.textContent = data.title2;
  }

  const elementoPadre2 = window.parent.document.getElementById("title-mobile");
  if (elementoPadre2) {
    elementoPadre2.textContent = data.title2;
  }
}

function ocultarTitulos() {
  const titulo = document.querySelector("#title-theme");
  titulo.setAttribute("hidden", true);
}

function mostrarTitulos() {
  const titulo = document.querySelector("#title-theme");
  titulo.removeAttribute("hidden");
}

function reproducirAudioItem(src) {
  miAudio.src = src;
  miAudio.play();
}

function reproducirFirst() {
  $("#miModal").modal("hide");
  reproducirAudioItem(data.src);
  if (window.parent.tienePointerEventsNone2()) {
    debuger = true;
  }
  if (window.parent.isMobile) {
    mostrarRotacionTemp();
  }
}


function finalizar() {
  if (marcados == data.tarjetas.length) {
    $("#finInduccionModal").modal("show");
  }
}

miAudio.addEventListener("play", function () {
  if (!debuger) {
    $(".btn-close-custom").prop("disabled", true);
    // Aplicar el estilo de fondo
    $(".btn-close-custom").css("background-color", "rgb(57, 57, 55)");
    document
      .querySelectorAll(".item")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
});

miAudio.addEventListener("ended", function () {
  $(".btn-close-custom").prop("disabled", false);
  $(".btn-close-custom").css("background-color", "orange");

  document
    .querySelectorAll(".item")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
});

function aplicarAnimacion(selector, className) {
  var elementoAnimacion = document.querySelector(selector);
  elementoAnimacion.classList.remove(className);
  void elementoAnimacion.offsetWidth;
  elementoAnimacion.classList.add(className);
}

function crearDivCentrados(id, elementos) {
  var contenedor = document.getElementById(id);
  elementos.forEach((elemento, index) => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-md-4 col-sm-4 col-6 mb-3 mt-3";

    const item = document.createElement("div");
    item.className =
      "item rounded-3 text-center d-flex justify-content-center align-items-center h-100";
    item.textContent = elemento.text;
    item.id = `elemento-${index}`;
    item.addEventListener("click", function () {
      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text);
        // $('#title-modal').text('Definiciones Generales');
        reproducirAudioItem(elemento.src);
      } else {
        if (marcados >= index) {
          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          // $('#title-modal').text('Definiciones Generales');
          reproducirAudioItem(elemento.src);
        } else {
          aplicarAnimacion(`#elemento-${marcados}`, "animacion-crecer");
        }
      }
      if (marcados == 9) {
        window.parent.validarPuntaje(20, "opcion");
        debuger = true;
      }
    });
    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1; //text round red

    item.appendChild(numero); //red circle
    div.appendChild(item); //

    contenedor.appendChild(div);
  });
}

function crearContendorCircular(id, elementos) {
  var contenedor = document.getElementById(id);

  var contenedorparacirculo = document.createElement("div");
  contenedorparacirculo.className = "background-custom";

  var circulopadre = document.createElement("div");
  circulopadre.className = "background-circle";

  elementos.forEach((elemento, index) => {
    /*  const div = document.createElement("div"); */

    const item = document.createElement("div");

    item.className = "item child-circle-item"; //need CHECK

    item.innerHTML = elemento.text.replace(/\n/g, "<br>");
    const anguloInicial = -90;
    const angulo = anguloInicial + (360 / elementos.length) * index; // Ángulo de rotación
    item.style.transform = `rotate(${angulo}deg) translate(330px) rotate(${-angulo}deg)`;

    item.id = `elemento-${index}`;
    item.addEventListener("click", function () {
      $(".container-loading-img").addClass("loading-image");
      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text);
        // $('#title-modal').text('Definiciones Generales');
        reproducirAudioItem(elemento.src);
      } else {
        if (marcados >= index) {
          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          // $('#title-modal').text('Definiciones Generales');
          reproducirAudioItem(elemento.src);
        } else {
          aplicarAnimacion(`#elemento-${marcados}`, "animacion-crecer");
        }
      }
      $("#img-modal").on("load", function () {
        $(".container-loading-img").removeClass("loading-image");
      });
      if (marcados == 10) {
        window.parent.validarPuntaje(20, "opcion");
        debuger = true;
      }
    });

    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1;
    item.appendChild(numero);
 
    circulopadre.appendChild(item);
  });

  contenedorparacirculo.appendChild(circulopadre);
  contenedor.appendChild(contenedorparacirculo);
}

function main() {
  updateTitle();
  ocultarTitulos();
  $("#miModal").modal("show");
  $("#title-theme").text(data.title2);
  $("#modalLabel").text("data.title2");
  crearContendorCircular("content", data.tarjetas);
}

// Mostrar el modal de carga al inicio
$(window).on("load", function () {
  $("#cargaModal").modal("hide");
  if (!window.parent.isMobile) {
    /*  $("#content").addClass("px col-10"); */
  //  $(".mobile").css("height", "550px"); //CHECK
  }
});

$(".btn-close-custom").on("click", function () {
  $("#img-modal").attr("src", "");
  if (miAudio) {
    miAudio.pause(); // Detén la reproducción del audio
  }
  if (!isFrontVisible) {
    voltear();
  }
  if (marcados == 10) {
    reproducirAudioItem(data.srcfinal);
  }
});

$(document).ready(function () {
  main();
  window.parent.document.addEventListener("fullscreenchange", () => {
    if (window.parent.document.fullscreenElement) {
      mostrarTitulos();
      if (!window.parent.isMobile) {
        $(".mobile").css("height", "400px");
      } else {
        if ($(window).height() < 400) {
          $(".mobile").css("height", "320px");
        }
      }
    } else {
      ocultarTitulos();
      if (!window.parent.isMobile) {
        $(".mobile").css("height", "320px");
      } else {
        if ($(window).height() < 400) {
          $(".mobile").css("height", "320px");
        }
      }
    }
  });
  function actualizarTransformacion() {
    const elementos = document.querySelectorAll(".child-circle-item");

    const esPantallaPequeña = window.matchMedia(
      "(min-width: 1200px)"
    ).matches;

    elementos.forEach((item) => {
      const transformString = item.style.transform;
      const nuevoValorTranslate = "250px";
      let nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
      if (esPantallaPequeña) {
        nuevoValorTranslate = "330px";
        nuevaTransformString = transformString.replace(
          /translate\([^)]+\)/,
          `translate(${nuevoValorTranslate})`
        );
      }

      item.style.transform = nuevaTransformString;
    });
 
  }

  // Llama a la función inicialmente y cada vez que la ventana cambie de tamaño o orientación
  actualizarTransformacion();
  $(window).on("resize", actualizarTransformacion);
});
// Función para mostrar información adicional en la tarjeta posterior al hacer clic en la imagen
function mostrarInformacionAdicional() {
  // Actualiza el contenido de la tarjeta posterior si es necesario
  document.querySelector(".back #informacion-adicional").textContent =
    "Información adicional que deseas mostrar al hacer clic en la imagen.";
}

var audio2 = document.getElementById("background-audio");

// Ajusta el volumen de la música de fondo
audio2.volume = 0.05;
var flipButton = document.getElementById("flipButton");
var flipContent = document.querySelector(".flip-content");

var isFrontVisible = true; // Para rastrear si la cara frontal está visible inicialmente

function voltear() {
  if (isFrontVisible) {
    // Gira hacia la cara trasera (texto)
    flipContent.style.transform = "rotateY(180deg)";
    flipButton.innerHTML = '<i class="fa-solid fa-text-slash"></i>';
  } else {
    // Gira hacia la cara frontal (imagen)
    flipContent.style.transform = "rotateY(0deg)";
    flipButton.innerHTML = '<i class="fa-solid fa-text-height"></i>';
  }

  // Cambia el estado de visibilidad
  isFrontVisible = !isFrontVisible;
}

flipButton.addEventListener("click", function () {
  voltear();
});

