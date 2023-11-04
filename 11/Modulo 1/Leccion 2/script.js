var debuger = false;
var marcados = 0;
var fin = false;
var susbcount = 1;
var validar_modal = false;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio
var countblock = 1;
//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
  title: "Lección 03: Medidas de prevención contra caídas",
  title2: "Medidas de prevención contra caídas",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Delegar responsabilidades",
      src: "audio/audio_01_1.mp3",
      image: "imagen/Recurso 8.png",
      narracion:
        "Cuando delegas responsabilidades, estás demostrando confianza en los miembros de tu equipo. Esto les permite asumir un sentido de propiedad sobre su trabajo y sentirse valorados. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_01_1.mp3",
          image: "imagen/Recurso 8.png",
          narracion:
            "Cuando delegas responsabilidades, estás demostrando confianza en los miembros de tu equipo. Esto les permite asumir un sentido de propiedad sobre su trabajo y sentirse valorados. ​",
        },
        {
          text: "",
          src: "audio/audio_01_2.mp3",
          image: "imagen/30.png",
          narracion:
            "Esto ocurre cuando el patrón delega la responsabilidad de inspeccionar los tableros electricos a un miembro del equipo que cuenta con esas capacidades. Esto demuestra confianza en las habilidades y conocimientos de ese miembro, permitiéndole asumir la responsabilidad de confirmar que el equipo se encuentra en óptimas condiciones​.",
        },
      ],
    },
    {
      text: "Reconocer el trabajo bien hecho",
      src: "audio/audio_02_1.mp3",
      image: "imagen/Recurso 20.png",
      narracion:
        "El reconocimiento es una poderosa herramienta de motivación. Asegúrate de valorar y elogiar el trabajo de tus colaboradores cuando lo hagan bien. Esto no solo refuerza su autoestima, sino que también los anima a seguir contribuyendo de manera positiva al equipo. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_02_1.mp3",
          image: "imagen/Recurso 20.png",
          narracion:
            "El reconocimiento es una poderosa herramienta de motivación. Asegúrate de valorar y elogiar el trabajo de tus colaboradores cuando lo hagan bien. Esto no solo refuerza su autoestima, sino que también los anima a seguir contribuyendo de manera positiva al equipo. ​",
        },
        {
          text: "",
          src: "audio/audio_02_2.mp3",
          image: "imagen/32.png",
          narracion:
            "Por ejemplo el patrón puede elogiar públicamente a un operador de maquinaria que haya cumplido de manera excepcional con los estándares de seguridad y producción durante su turno. ",
        },
      ],
    },
    {
      text: "Estimular la comunicación​",
      src: "audio/audio_03_1.mp3",
      image: "imagen/Recurso 11.png",
      narracion:
        "Fomenta un ambiente de trabajo donde la comunicación fluya libremente. La comunicación efectiva mejora la colaboración y previene malentendidos. Promueve la humildad y el compañerismo, evitando la rivalidad y el interés propio que pueden ser perjudiciales. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_03_1.mp3",
          image: "imagen/Recurso 11.png",
          narracion:
            "Fomenta un ambiente de trabajo donde la comunicación fluya libremente. La comunicación efectiva mejora la colaboración y previene malentendidos. Promueve la humildad y el compañerismo, evitando la rivalidad y el interés propio que pueden ser perjudiciales. ​​",
        },
        {
          text: "",
          src: "audio/audio_03_2.mp3",
          image: "imagen/34.jpg",
          narracion:
            "Esto ocurre en reuniones donde los trabajadores puedan compartir sus ideas, preocupaciones y sugerencias sobre seguridad y eficiencia en sus actividades, fomentando un ambiente de trabajo donde todos se sienten valorados y escuchados.  ​",
        },
      ],
    },
    {
      text: "Establecer metas claras​",
      src: "audio/audio_04_1.mp3",
      image: "imagen/Recurso 10.png",
      narracion:
        "Define objetivos claros, medibles y alcanzables para tu equipo. Cuando todos comprenden lo que se espera de ellos, es más probable que trabajen hacia esas metas. Asegúrate de que estos objetivos estén divididos en metas a corto, medio y largo plazo para mantener el enfoque. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_04_1.mp3",
          image: "imagen/Recurso 10.png",
          narracion:
            "Define objetivos claros, medibles y alcanzables para tu equipo. Cuando todos comprenden lo que se espera de ellos, es más probable que trabajen hacia esas metas. Asegúrate de que estos objetivos estén divididos en metas a corto, medio y largo plazo para mantener el enfoque. ​​",
        },
        {
          text: "",
          src: "audio/audio_04_2.mp3",
          image: "imagen/36.png",
          narracion:
            "Un ejemplo es cuando el gerente de operaciones define un objetivo claro para reducir el tiempo de inactividad de las máquinas en un 15% durante el próximo año. Esta meta es específica, medible y alcanzable.​",
        },
      ],
    },
    {
      text: "Utilizar incentivos y premios​",
      src: "audio/audio_05_1.mp3",
      image: "imagen/Recurso 12.jpg",
      narracion:
        "Reconoce el esfuerzo y el desempeño sobresaliente con incentivos y premios. Estos pueden ser tangibles, como reconocimientos o regalos, o intangibles, como elogios públicos. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_05_1.mp3",
          image: "imagen/Recurso 12.jpg",
          narracion:
            "Reconoce el esfuerzo y el desempeño sobresaliente con incentivos y premios. Estos pueden ser tangibles, como reconocimientos o regalos, o intangibles, como elogios públicos. ​​",
        },
        {
          text: "",
          src: "audio/audio_05_2.mp3",
          image: "imagen/38.png",
          narracion:
            "Los incentivos y premios crean un ambiente de trabajo positivo y motivan a los empleados a dar lo mejor de sí mismos. ​",
        },
      ],
    },
    {
      text: "Estimular la superación personal y profesional​",
      src: "audio/audio_06_1.mp3",
      image: "imagen/Recurso 19.png",
      narracion:
        "Anima a tus colaboradores a buscar la superación personal y profesional, esto puedes lograrlo proporcionando oportunidades de formación, desarrollo y motivarlos a tomar la iniciativa en su crecimiento. Cuando ven que pueden avanzar y crecer en su carrera, se sentirán más comprometidos con su trabajo. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_06_1.mp3",
          image: "imagen/Recurso 19.png",
          narracion:
            "Anima a tus colaboradores a buscar la superación personal y profesional, esto puedes lograrlo proporcionando oportunidades de formación, desarrollo y motivarlos a tomar la iniciativa en su crecimiento. Cuando ven que pueden avanzar y crecer en su carrera, se sentirán más comprometidos con su trabajo. ​",
        },
        {
          text: "",
          src: "audio/audio_06_2.mp3",
          image: "imagen/40.png",
          narracion:
            "Por ejemplo el gerente de capacitación puede ofrecer programas de capacitación y desarrollo que permitan a los trabajadores adquirir nuevas habilidades y avanzar en sus carreras. ​",
        },
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
function checkFinish() {
  if (marcados == data.tarjetas.length && !fin) {
    fin = true;
    return true;
  }
  return false;
}

function finalizar() {
  if (marcados == data.tarjetas.length && !fin) {
    $("#finInduccionModal").modal("show");
    fin = true;
    debuger = true;
  }
}

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

  // Itera a través de los elementos y elimínalos uno por uno
  elementos.forEach(function (elemento) {
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

function aplicarAnimacion(selector, className) {
  var elementoAnimacion = document.querySelector(selector);
  elementoAnimacion.classList.remove(className);
  void elementoAnimacion.offsetWidth;
  elementoAnimacion.classList.add(className);
}

function crearDivCentradosStep4(id, elementos) {
  var contenedor = document.getElementById(id);

  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");

  elementos.forEach((elemento, index) => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-md-4 col-sm-4 col-6 mb-3 mt-3"; // Justificar todos los elementos a la derecha

    const item = document.createElement("div");
    item.className = `item rounded-3 text-center d-flex justify-content-center align-items-center h-100`;
    item.textContent = elemento.text;
    item.id = `elemento-${index}`;
    /*  if (index == 3) {
   
        } */
    item.addEventListener("click", function () {
      // Reemplaza 'tu-contenedor' con el ID de tu contenedor
      /*   if (index == 3) { */
      $(".container-loading-img").addClass("loading-image");
      miElemento.style.display = "block"; // Mostrar el elemento
      miElemento.classList.add("d-flex"); // Agregar la clase d-flex
      $("#text-modal").text(elemento.narracion);
      /*  } else {
                miElemento.style.display = 'none'; // Ocultar el elemento
                miElemento.classList.remove('d-flex'); // Quitar la clase d-flex
                
            } */

      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text); 
        // $('#title-modal').text('Medidas de prevención contra caídas');
        reproducirAudioItem(elemento.src);
        generarMiniaturas(
          elemento.carousel,
          "carouselExampleCaptions",
          "miniatura-content"
        );
      } else {
        if (marcados >= index) {
          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
           $("#title-secondary-modal").text(elemento.text); 
          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
          generarMiniaturas(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
          countblock = elemento.carousel.length
            ? elemento.carousel.length + 1
            : 1;
        } else {
          aplicarAnimacion(`#elemento-${marcados}`, "animacion-crecer");
        }
      }
      $("#img-modal").on("load", function () {
        $(".container-loading-img").removeClass("loading-image");
      });
    });
    item.setAttribute("data-src", elemento.src);
    item.setAttribute("data-step", index);
    item.setAttribute("data-image", elemento.image);

    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1;

    item.appendChild(numero);
    div.appendChild(item);
    contenedor.appendChild(div);
  });
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
      /*  if (contador == 9) {
        console.log("Aqui logica para completar nivel");
      } */
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
