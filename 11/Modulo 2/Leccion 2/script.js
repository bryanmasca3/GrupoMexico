var debuger = false;
var marcados = 0;
var susbcount=1;
var total = 2;
var fin = false;
var stateclose = true;
var validar_modal = false;
var countblock = 1;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio

//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
  title: "Lección 04: Actos y condiciones inseguras​",
  title2: "Medidas de prevención contra caídas",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Actos Inseguros​",
      src: "audio/audio_01_1.mp3",
      image: "imagen/Recurso 3.png",
      narracion:
        "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno.",
      carouselimg: true,
      carousel: [
        {
          text: "Programa de Prevención contra caídas",
          src: "audio/audio_01_1.mp3",
          image: "imagen/Recurso 3.png",
          narracion:
            "Los actos inseguros son comportamientos de los trabajadores que aumentan el riesgo de accidentes y pueden tener consecuencias negativas en la seguridad, producción y el entorno. ​",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_01_2.mp3",
          image: "imagen/18.png",
          narracion:
            " Por ejemplo, amarrar la carga sin guantes.​ ",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_01_3.mp3",
          image: "imagen/22.png",
          narracion:
            "Manipular la carga sin presencia de riggger.​ ",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_01_4.mp3",
          image: "imagen/24.png",
          narracion:
            "Posicionarse sobre la carga.​ ",
        },
      ],
    },
    {
      text: "Condiciones Inseguras​",
      src: "audio/audio_02_1.mp3",
      image: "imagen/Recurso 5.png",
      narracion:
        "Las condiciones inseguras son situaciones o elementos en el lugar de trabajo que representan un riesgo para las personas debido a su estado deficiente.",
      carouselimg: true,
      carousel: [
        {
          text: "Delimitación del área",
          src: "audio/audio_02_1.mp3",
          image: "imagen/Recurso 5.png",
          narracion:
            "Las condiciones inseguras son situaciones o elementos en el lugar de trabajo que representan un riesgo para las personas debido a su estado deficiente.",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_02_2.mp3",
          image: "imagen/33.png",
          narracion:
            "Por ejemplo, cables de maquina de soldar en mal estado.​ ",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_02_3.mp3",
          image: "imagen/25.png",
          narracion:
            "Falta de señalización en el área de trabajo.​ ",
        },
        {
          text: "Delimitación del área",
          src: "audio/audio_02_4.mp3",
          image: "imagen/17.png",
          narracion:
            "Peldaños de escaleras en mal estado.​​ ",
        }
      ],
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
  }, 5);
}

function updateTitle() {
  const elementoPadre = window.parent.document.getElementById("title-padre");
  if (elementoPadre) {
    elementoPadre.textContent = data.title;
  }

  const elementoPadre2 = window.parent.document.getElementById("title-mobile");
  if (elementoPadre2) {
    elementoPadre2.textContent = data.title;
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
  mostrarRotacionTemp();
  if (window.parent.tienePointerEventsNone2()) {
    debuger = true;
  }
}
// Función para continuar después del modal de fin de inducción
function continuarInduccion() {
  // Coloca aquí la lógica para continuar con la inducción o redirigir a la siguiente página
}

function finalizar() {
  if (marcados == data.tarjetas.length && !fin) {
    $("#finInduccionModal").modal("show");
    fin = true;
    debuger = true;
  }
}
function checkFinish() {
  if (marcados == data.tarjetas.length && !fin) {
    fin = true;   
    return true;
  }
  return false;
}
$(".btn-close-custom").on("click", function () {
  susbcount=1;
  $("#img-modal").attr("src", "");
  if (miAudio) {
    miAudio.pause(); // Detén la reproducción del audio
  }
  if (!isFrontVisible) {
    voltear();
  }
  var elementos = document.querySelectorAll(".miniatura");

  // Itera a través de los elementos y elimínalos uno por uno
  elementos.forEach(function (elemento) {
    elemento.remove();
  });
  console.log(countblock)
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

miAudio.addEventListener("play", function () {
  if (!debuger) {
    $(".btn-close-custom").prop("disabled", true);
    document
      .querySelectorAll(".item")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
      document
      .querySelectorAll(".miniatura")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
});

miAudio.addEventListener("ended", function () {  
 
  if (!validar_modal&&susbcount==countblock) {
    $(".btn-close-custom").prop("disabled", false);
  }
  document
    .querySelectorAll(".item")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
    document
    .querySelectorAll(".miniatura")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
});

function aplicarAnimacion(selector, className) {
  var elementoAnimacion = document.querySelector(selector);
  elementoAnimacion.classList.remove(className);
  void elementoAnimacion.offsetWidth;
  elementoAnimacion.classList.add(className);
}

function crearDivCentradosStep4(id, elementos) {
  var contenedor = document.getElementById(id);
  const div = document.createElement("div");
  div.className = "row justify-content-center mt-3 gap-2"; // Justificar todos los elementos a la derecha
  var numColumnas = 10; // Inicializamos con 12 columnas
  var num_elementos = Math.ceil(elementos.length / 2);
  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");
  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    item.className = `item col-md-${numColumnas} d-flex justify-content-center align-items-center`;
    item.textContent = elemento.text;
    item.id = `elemento-${index}`;
    /*   if (index == 3) {
            generarMiniaturas(elemento.carousel, 'carouselExampleCaptions', 'miniatura-content'); // Reemplaza 'tu-contenedor' con el ID de tu contenedor
        } */
    item.addEventListener("click", function () {
      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text);
        // $('#title-modal').text('Medidas de prevención contra caídas');
        reproducirAudioItem(elemento.src);
        if (elemento.carousel && elemento.carouselimg) {
          generarMiniaturas(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        } else if (elemento.carousel && !elemento.carouselimg) {
          generarComponent(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        }
       
      } else {
        if (marcados >= index) {
          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          if (elemento.carousel && elemento.carouselimg) {
            generarMiniaturas(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          } else if (elemento.carousel.length && !elemento.carouselimg) {
            generarComponent(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          }

          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          /* $("#title-modal").text("Medidas de prevención contra caídas"); */
          reproducirAudioItem(elemento.src);                  
          countblock = elemento.carousel.length ? elemento.carousel.length+1 : 1;       
        } else {
          aplicarAnimacion(`#elemento-${marcados}`, "animacion-crecer");
        }
      }
    });
    item.setAttribute("data-src", elemento.src);
    item.setAttribute("data-step", index);
    item.setAttribute("data-image", elemento.image);

    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1;

    item.appendChild(numero);
    div.appendChild(item);
  });

  contenedor.appendChild(div);
}

function generarMiniaturas(data, carouselId, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  var contador = 1;
  data.forEach((data, i) => {
    var click = false;
    const miniatura = document.createElement("div");
    miniatura.classList.add(
      "col-12",
      "miniatura",
      "d-flex",
      "justify-content-center"
    );
    if (i === 0) {
      miniatura.classList.add("active");
      $("#text-content").text(data.text);
      susbcount += 1;
      click = true;
    }
    miniatura.onclick = function () {
      if (!click) {
        susbcount += 1;
        click = true;
      }

      if (!isFrontVisible) {
        voltear();
      }
      var miniaturas = document.querySelectorAll(".miniatura");

      // Quitar la clase 'active' de todas las miniaturas
      miniaturas.forEach(function (miniatura) {
        miniatura.classList.remove("active");
      });

      // Agregar la clase 'active' al elemento que hizo clic
      this.classList.add("active");
      $("#img-modal").attr("src", data.image);
      $("#text-modal").text(data.narracion);
      reproducirAudioItem(data.src);
     
    };
    miniatura.setAttribute("data-bs-target", `#${carouselId}`);
    miniatura.setAttribute("data-bs-slide-to", i);

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.text;

    miniatura.appendChild(img);
    contenedor.appendChild(miniatura);
  });
}

function main() {
  updateTitle();
  ocultarTitulos();
  $("#miModal").modal("show");
  $("#title-theme").text(data.title);
  $("#modalLabel").text(data.title2);
  crearDivCentradosStep4("content", data.tarjetas);
}

// Mostrar el modal de carga al inicio
$(window).on("load", function () {
  $("#cargaModal").modal("hide");
  // if (!window.parent.isMobile) {
  //     $(".mobile").css("height", "320px");
  // }
});

$(document).ready(function () {
  main();
  window.parent.document.addEventListener("fullscreenchange", () => {
    if (window.parent.document.fullscreenElement) {
      mostrarTitulos();
      // if (!window.parent.isMobile) {
      //     $(".mobile").css("height", "400px");
      // } else {
      //     if ($(window).height() < 400) {
      //         $(".mobile").css("height", "320px");
      //     }
      // }
    } else {
      ocultarTitulos();
      // if (!window.parent.isMobile) {
      //     $(".mobile").css("height", "320px");
      // } else {
      //     if ($(window).height() < 400) {
      //         $(".mobile").css("height", "320px");
      //     }
      // }
    }
  });
});

var audio2 = document.getElementById("background-audio");

// Ajusta el volumen de la música de fondo
audio2.volume = 0.05;
var flipButton = document.getElementById("flipButton");
var flipContent = document.querySelector(".flip-content");

var isFrontVisible = true; // Para rastrear si la cara frontal está visible inicialmente

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
