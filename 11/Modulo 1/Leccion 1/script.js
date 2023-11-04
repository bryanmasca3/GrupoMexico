var debuger = false;
var marcados = 0;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio
var countblock = 1;
//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
  title: "Lección 02: Estilos de Liderazgo",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimagecircle: "imagen/img01.jpg",
  tarjetas: [
    {
      text: "Liderazgo \n autocrático",
      src: "audio/audio_01_1.mp3",
      image: "imagen/Recurso 1.png",
      carouselimg: true,
      narracion:
        "Aquí el líder tiene el control total. No suele escuchar las opiniones de los demás y toma decisiones por sí mismo.",
      carousel: [
        {
          text: "",
          src: "audio/audio_01_1.mp3",
          image: "imagen/Recurso 1.png",
          narracion:
            "Aquí el líder tiene el control total. No suele escuchar las opiniones de los demás y toma decisiones por sí mismo. ​",
        },
        {
          text: "",
          src: "audio/audio_01_2.mp3",
          image: "imagen/05.jpg",
          narracion:
            "Un ejemplo es cuando el patrón decide de manera unilateral hacer cambios en el sistema de seguridad, como un aumento de la jornada laboral. Impactando el descanso de los trabajadores​.",
        },
      ],
    },
    {
      text: "Liderazgo \n burocrático",
      src: "audio/audio_02_1.mp3",
      image: "imagen/Recurso 2.png",
      carouselimg: true,
      narracion:
        "En este estilo, se siguen las reglas al pie de la letra. Es útil para la gestión de la seguridad, donde se deben cumplir las reglas para cuidarnos y cuidar a los demás.​",
      carousel: [
        {
          text: "",
          src: "audio/audio_02_1.mp3",
          image: "imagen/Recurso 2.png",
          narracion:
            "En este estilo, se siguen las reglas al pie de la letra. Es útil para la gestión de la seguridad, donde se deben cumplir las reglas para cuidarnos y cuidar a los demás.​",
        },
        {
          text: "",
          src: "audio/audio_02_2.mp3",
          image: "imagen/07.png",
          narracion:
            "Un ejemplo es cuando el gerente de una mina establece un procedimiento para realizar trabajos en altura y todos los trabajadores que realizan esta actividad deben seguirlo al pie de la letra.",
        },
      ],
    },
    {
      text: "Liderazgo \n carismático​",
      src: "audio/audio_04_1.mp3",
      image: "imagen/img03.jpg",
      carouselimg: true,
      narracion:
        "Estos líderes tiene la capacidad para escuchar a los demás y la mano firme para asumir la toma de decisiones.",
      carousel: [
        {
          text: "",
          src: "audio/audio_04_1.mp3",
          image: "imagen/img03.jpg",
          narracion:
            "Estos líderes tiene la capacidad para escuchar a los demás y la mano firme para asumir la toma de decisiones.​",
        },
        {
          text: "",
          src: "audio/audio_04_2.mp3",
          image: "imagen/09.png",
          narracion:
            "Esto ocurre cuando un patrón se destaca por su carisma y habilidades excepcionales de comunicación y nos motiva para superar desafíos y alcanzar metas.​",
        },
      ],
    },
    {
      text: "Liderazgo \n participativo​",
      src: "audio/audio_05_1.mp3",
      image: "imagen/Recurso 8.png",
      carouselimg: true,
      narracion:
        "Aquí, el líder toma decisiones en conjunto con el equipo. Este estilo es ideal para fomentar el trabajo en equipo y priorizar la calidad sobre la cantidad. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_05_1.mp3",
          image: "imagen/Recurso 8.png",
          narracion:
            "Aquí, el líder toma decisiones en conjunto con el equipo. Este estilo es ideal para fomentar el trabajo en equipo y priorizar la calidad sobre la cantidad. ​",
        },
        {
          text: "",
          src: "audio/audio_05_2.mp3",
          image: "imagen/11.png",
          narracion:
            "Por ejemplo, el patrón promueve un ambiente de trabajo en el que valora y fomenta las ideas y aportes de los trabajadores convocando reuniones de equipo donde los trabajadores pueden expresar sus opiniones, sugerir mejoras en los procesos de trabajo o discutir temas relacionados con la seguridad.​",
        },
      ],
    },
    {
      text: "Liderazgo\n orientado a las personas",
      src: "audio/audio_06_1.mp3",
      image: "imagen/Recurso 4.png",
      carouselimg: true,
      narracion:
        "Estos líderes se centran en apoyar y desarrollar a sus equipos, fomentando la colaboración. Es un enfoque participativo que empodera a los miembros del equipo.",
      carousel: [
        {
          text: "",
          src: "audio/audio_06_1.mp3",
          image: "imagen/Recurso 4.png",
          narracion:
            "Estos líderes se centran en apoyar y desarrollar a sus equipos, fomentando la colaboración. Es un enfoque participativo que empodera a los miembros del equipo.",
        },
        {
          text: "",
          src: "audio/audio_06_2.mp3",
          image: "imagen/15.jpg",
          narracion:
            "​Un ejemplo es cuando el patrón muestra un profundo interés en el bienestar de los trabajadores, con empatía, promoviendo un ambiente de trabajo positivo y/o promoviendo cargos de mayor responsabilidad a los trabajadores.​",
        },
      ],
    },
    {
      text: "Liderazgo\n natural",
      src: "audio/audio_07_1.mp3",
      image: "imagen/Recurso 5.png",
      carouselimg: true,
      narracion:
        "Aquí, el líder es un trabajador destacado, y hace participar a todos sus compañeros en la toma de decisiones. Es democrático y se basa en valores compartidos. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_07_1.mp3",
          image: "imagen/Recurso 5.png",
          narracion:
            "Aquí, el líder es un trabajador destacado, y hace participar a todos sus compañeros en la toma de decisiones. Es democrático y se basa en valores compartidos. ​",
        },
        {
          text: "",
          src: "audio/audio_07_2.mp3",
          image: "imagen/17.png",
          narracion:
            "Dentro del equipo de trabajo, uno o más trabajadores destacan su liderazgo natural. Aunque no tiene un cargo de supervisión, aportando su experiencia, conocimientos técnicos y habilidades para tomar decisiones.​",
        },
      ],
    },
    {
      text: "Liderazgo \n orientado a la tarea",
      src: "audio/audio_08_1.mp3",
      image: "imagen/Recurso 6.png",
      carouselimg: true,
      narracion:
        "Este estilo se enfoca en lograr resultados y cumplir con las metas. Son buenos para planificar y organizar.​",
      carousel: [
        {
          text: "",
          src: "audio/audio_08_1.mp3",
          image: "imagen/Recurso 6.png",
          narracion:
            "Este estilo se enfoca en lograr resultados y cumplir con las metas. Son buenos para planificar y organizar.​",
        },
        {
          text: "",
          src: "audio/audio_08_2.mp3",
          image: "imagen/19.png",
          narracion:
            "Esto ocurre cuando se lidera el mantenimiento critico de un equipo para la operación, el patrón se centra en la eficiencia operativa. Establece procedimientos claros, supervisa el progreso del trabajo y garantiza el cumplimiento de metas y estándares de seguridad.​",
        },
      ],
    },
    {
      text: "Liderazgo \ntransaccional",
      src: "audio/audio_09_1.mp3",
      image: "imagen/Recurso 7.png",
      carouselimg: true,
      narracion:
        "Se basa en un acuerdo donde los miembros del equipo aceptan obedecer al líder a cambio de recompensas. El líder tiene poder para sancionar. ​",
      carousel: [
        {
          text: "",
          src: "audio/audio_09_1.mp3",
          image: "imagen/Recurso 7.png",
          narracion:
            "Se basa en un acuerdo donde los miembros del equipo aceptan obedecer al líder a cambio de recompensas. El líder tiene poder para sancionar. ​",
        },
        {
          text: "",
          src: "audio/audio_09_2.mp3",
          image: "imagen/21.png",
          narracion:
            "Por ejemplo, cuando se cumplen con éxito sus tareas y metas de seguridad se reconoce el esfuerzo del trabajador con la colocación de su foto en el tablero informativo, la entrega de un diploma firmado por la gerencia y souvenirs durante la reunión de seguridad.​",
        },
      ],
    },
    {
      text: "Liderazgo\n transformacional",
      src: "audio/audio_10_1.mp3",
      image: "imagen/capas_2.gif",
      carouselimg: true,
      narracion:
        "Estos líderes inspiran a su equipo, transmitiendo su entusiasmo. Motivan y transforman a las personas. ",
      carousel: [
        {
          text: "",
          src: "audio/audio_10_1.mp3",
          image: "imagen/capas_2.gif",
          narracion:
            "Estos líderes inspiran a su equipo, transmitiendo su entusiasmo. Motivan y transforman a las personas. ​",
        },
        {
          text: "",
          src: "audio/audio_10_2.mp3",
          image: "imagen/23.png",
          narracion:
            "Esto ocurre cuando el patrón comunica una visión clara y apasionante del futuro de la empresa, destacando la importancia de la innovación, la sostenibilidad y la seguridad en las operaciones mineras.​",
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
    if (index == 3) {
      generarMiniaturas(
        elemento.carousel,
        "carouselExampleCaptions",
        "miniatura-content"
      ); // Reemplaza 'tu-contenedor' con el ID de tu contenedor
    }
    item.addEventListener("click", function () {
      if (index == 3) {
        miElemento.style.display = "block"; // Mostrar el elemento
        miElemento.classList.add("d-flex"); // Agregar la clase d-flex
      } else {
        miElemento.style.display = "none"; // Ocultar el elemento
        miElemento.classList.remove("d-flex"); // Quitar la clase d-flex
        $("#text-modal").text(elemento.narracion);
      }

      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text);
        // $('#title-modal').text('Medidas de prevención contra caídas');
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
          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
          countblock = elemento.carousel.length
            ? elemento.carousel.length + 1
            : 1;
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
      if (contador == 9) {
        console.log("Aqui logica para completar nivel");
      }
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
function crearContendorCircular(id, elementos) {
  var contenedor = document.getElementById(id);

  var contenedorparacirculo = document.createElement("div");
  contenedorparacirculo.className = "background-custom";

  var circulopadre = document.createElement("div");
  circulopadre.className = "background-circle";

  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");

  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");

    item.className =
      "pointItem child-circle-item d-flex justify-content-center align-items-center"; //need CHECK
    const txtcontent = document.createElement("div");
    txtcontent.className = "item";
    txtcontent.innerHTML = elemento.text.replace(/\n/g, "<br>");
    item.appendChild(txtcontent);
    const anguloInicial = -90;
    const angulo = anguloInicial + (360 / elementos.length) * index; // Ángulo de rotación
    item.style.transform = `rotate(${angulo}deg) translate(170%) rotate(${-angulo}deg)`;
    item.id = `elemento-${index}`;

    /*  if (index == 1) { */
    // Reemplaza 'tu-contenedor' con el ID de tu contenedor
    /*   } */
    txtcontent.addEventListener("click", function () {
      /*  generarMiniaturas(
        elemento.carousel,
        "carouselExampleCaptions",
        "miniatura-content"
      ); */
      $(".container-loading-img").addClass("loading-image");
      /*   if (index == 1) { */
      miElemento.style.display = "block"; // Mostrar el elemento
      miElemento.classList.add("d-flex"); // Agregar la clase d-flex
      $("#text-modal").text(elemento.narracion);
      /*  } else {
        miElemento.style.display = "none"; // Ocultar el elemento
        miElemento.classList.remove("d-flex"); // Quitar la clase d-flex
        $("#text-modal").text(elemento.narracion);
      } */

      if (debuger) {
        txtcontent.classList.add("clicked");

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
        }
      } else {
        if (marcados >= index) {
          if (!txtcontent.classList.contains("clicked")) {
            txtcontent.classList.add("clicked");
            marcados += 1;
          }
          if (elemento.carousel && elemento.carouselimg) {
            generarMiniaturas(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
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
      /* if (marcados == 9) {
        window.parent.validarPuntaje(20, "opcion");
        debuger = true;
      } */
    });
    item.setAttribute("data-src", elemento.src);
    item.setAttribute("data-step", index);
    item.setAttribute("data-image", elemento.image);

    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1;

    txtcontent.appendChild(numero);
    circulopadre.appendChild(item);
  });

  contenedorparacirculo.appendChild(circulopadre);
  contenedor.appendChild(contenedorparacirculo);
}
function main() {
  updateTitle();
  ocultarTitulos();
  $("#miModal").modal("show");
  $("#title-theme").text(data.title);
  $("#modalLabel").text(data.title2);
  crearContendorCircular("content", data.tarjetas);
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

  // Llama a la función inicialmente y cada vez que la ventana cambie de tamaño o orientación
  actualizarTransformacion();
  $(window).on("resize", actualizarTransformacion);
});
function actualizarTransformacion() {
  const elementos = document.querySelectorAll(".child-circle-item");

  const esPantalla1 = window.matchMedia("(max-width: 767px)").matches;
  const esPantalla2 = window.matchMedia(
    "(min-width: 973px) and (max-height: 599px)"
  ).matches;
  const esPantalla3 = window.matchMedia(
    "(max-width: 972px) and (orientation: landscape)"
  ).matches;
  const esPantalla4 = window.matchMedia(
    "(min-width: 973px) and (min-height: 600px)"
  ).matches;
  elementos.forEach((item) => {
    const transformString = item.style.transform;
    let nuevoValorTranslate = "200%";
    let nuevaTransformString = transformString.replace(
      /translate\([^)]+\)/,
      `translate(${nuevoValorTranslate})`
    );
    if (esPantalla1) {
      nuevoValorTranslate = "170%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla2) {
      nuevoValorTranslate = "200%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla3) {
      nuevoValorTranslate = "180%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla4) {
      nuevoValorTranslate = "270%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else {
      nuevoValorTranslate = "280%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    }
    item.style.transform = nuevaTransformString;
  });
}
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
