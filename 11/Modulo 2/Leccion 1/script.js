var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var susbcount = 1;
var validar_modal = false;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio
var countblock = 1;
//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
  title: "Lección 2: Teoría Tricondicional de la SBC​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Condición N°01: Poder\n trabajar seguro",
      src: "audio/audio_01_1.mp3",
      image: "imagen/Recurso 8.png",
      narracion:
        "Esta condición se refiere a la capacidad del trabajador para llevar a cabo su tarea de manera segura. ​",
      carouselimg: true,
      carousel: [
        {
          text: "",
          src: "audio/audio_01_1.mp3",
          image: "imagen/Recurso 8.png",
          narracion:
            "Esta condición se refiere a la capacidad del trabajador para llevar a cabo su tarea de manera segura. ​​",
        },
        {
          text: "",
          src: "audio/audio_01_2.mp3",
          image: "imagen/06-2.png",
          narracion:
            "Para ello, deben cumplirse varios requisitos, como contar con un entorno de trabajo seguro en términos de condiciones higiénicas, físicas, químicas y biológicas​.",
        },
        {
          text: "",
          src: "audio/audio_01_3.mp3",
          image: "imagen/06-3.png",
          narracion:
            "Además, las instalaciones, máquinas y herramientas deben ser seguras, y es esencial disponer de equipos de protección personal y colectiva adecuados. En resumen, si el entorno y las herramientas son seguros, el trabajador podrá realizar su labor de manera segura.​",
        },
      ],
    },
    {
      text: "Condición N°02: Saber\n trabajar seguro",
      src: "audio/audio_02_1.mp3",
      image: "imagen/Recurso 6.png",
      carouselimg: false,
      narracion:
        "Esta condición se refiere a que el trabajador debe tener el conocimiento necesario para realizar su tarea de manera segura. Esto incluye conocer los procedimientos seguros de trabajo y comprender los riesgos asociados a la actividad. En otras palabras, el trabajador debe estar informado y capacitado para llevar a cabo su labor de manera segura y saber cómo abordar los posibles riesgos que puedan surgir. ​",
      carousel: [],
    },
    {
      text: "Condición \nN°03: Querer\n trabajar seguro​",
      src: "audio/audio_03_1.mp3",
      image: "imagen/Recurso 7.png",
      narracion:
        "En esta condición, se aborda la motivación del trabajador para realizar su tarea de manera segura.",
      carouselimg: false,
      carousel: [
        {
          text: "Motivo Externo",
          src: "audio/audio_03_2.mp3",
          image: "imagen/11-1.png",
          narracion:
            "Motivos Externos:​ \nIncentivos para trabajar de manera segura, como la familia.\n​Recompensas por mantener la seguridad en el trabajo, como los reconocimientos.​​",
        },
        {
          text: "Motivo Interno",
          src: "audio/audio_03_3.mp3",
          image: "imagen/13.png",
          narracion:
            "Motivo interno:\n​Percepción personal de la importancia de la seguridad en el trabajo.​",
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
  var component = document.querySelectorAll(".component");

  // Itera a través de los elementos y elimínalos uno por uno
  component.forEach(function (elemento) {
    elemento.remove();
  });

  /*   if(marcados==total){ 
    reproducirAudioItem(data.srcfinal);
    var main = document.getElementsByClassName("square");
  const content = document.createElement("div");
  content.classList.add("content-square")
  const childone= document.createElement("div");
  childone.innerHTML = ("FACTOR\n HUMANO").replace(/\n/g, "<br>");
  childone.classList.add("content-child-1")
  const childtwo= document.createElement("div");
  childtwo.innerHTML = ("FACTOR\n TÉCNICO").replace(/\n/g, "<br>");
  childtwo.classList.add("content-child-2")
  
  content.appendChild(childone)
  content.appendChild(childtwo)
  main[0].appendChild(content)
  }
 */
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
  console.log(susbcount)
  console.log(countblock)
  console.log(marcados)
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

function generarComponent(data, carouselId, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  var contador = 1;
  const miniatura = document.createElement("div");
  miniatura.classList.add(
    "d-flex",
    "justify-content-center",
    "gap-5",
    "component"
  );
  data.forEach((data, i) => {
    var click = false;

    //if (i === 0) {
    //  miniatura.classList.add("active");
    const title = document.createElement("div");

    title.innerHTML = data.text.replace(/\n/g, "<br>");
    title.classList.add("itemcomponent");

    $("#text-content").text(data.text);
    // click = true;
    // }
    title.onclick = function () {
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

      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");     
      }
      $("#img-modal").attr("src", data.image);
      $("#text-modal").text(data.narracion);
      reproducirAudioItem(data.src);
      /*  if (contador == 9) {
        console.log("Aqui logica para completar nivel");
      } */
    };
    /*  miniatura.setAttribute("data-bs-target", `#${carouselId}`);
    miniatura.setAttribute("data-bs-slide-to", i);
 */
    miniatura.appendChild(title);
    contenedor.appendChild(miniatura);
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

function crearContenidoTriangular(id, elementos) {
  var contenedor = document.getElementById(id);

  var contenedortriangulo = document.createElement("div");
  contenedortriangulo.className = "square";

  var contenttext = document.createElement("div");
  contenttext.className = "text";

  var contenttriangles = document.createElement("div");
  contenttriangles.className = "triangles";

  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");

  elementos.forEach((elemento, index) => {
    const itemText = document.createElement("div");

    const itemTriangle = document.createElement("div");

    itemText.className = `text-${index}`;
    itemTriangle.className = `itemtriangle triangle-${index}`;

    itemText.innerHTML = elemento.text.replace(/\n/g, "<br>");

    itemTriangle.id = `elemento-${index}`;

    /*  if (index == 1) { */
    // Reemplaza 'tu-contenedor' con el ID de tu contenedor
    /*   } */
    itemTriangle.addEventListener("click", function () {
      $(".container-loading-img").addClass("loading-image");

      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        itemTriangle.classList.add("clicked");

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

          if (!itemTriangle.classList.contains("clicked")) {
            itemTriangle.classList.add("clicked");
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
      $("#img-modal").on("load", function () {
        $(".container-loading-img").removeClass("loading-image");
      });
      /* if (marcados == 9) {
        window.parent.validarPuntaje(20, "opcion");
        debuger = true;
      } */
    });
    itemTriangle.setAttribute("data-src", elemento.src);
    itemTriangle.setAttribute("data-step", index);
    itemTriangle.setAttribute("data-image", elemento.image);

    /*  const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1; */

    /*   itemTriangle.appendChild(numero); */
    contenttriangles.appendChild(itemTriangle);
    contenttext.appendChild(itemText);
  });

  contenedortriangulo.appendChild(contenttriangles);
  contenedortriangulo.appendChild(contenttext);
  contenedor.appendChild(contenedortriangulo);
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
      "item child-circle-item d-flex justify-content-center align-items-center"; //need CHECK
    const txtcontent = document.createElement("div");
    item.innerHTML = elemento.text.replace(/\n/g, "<br>");
    item.appendChild(txtcontent);
    const anguloInicial = -90;
    const angulo = anguloInicial + (360 / elementos.length) * index; // Ángulo de rotación
    item.style.transform = `rotate(${angulo}deg) translate(50%) rotate(${-angulo}deg)`;
    item.id = `elemento-${index}`;

    /*  if (index == 1) { */
    // Reemplaza 'tu-contenedor' con el ID de tu contenedor
    /*   } */
    item.addEventListener("click", function () {
      generarMiniaturas(
        elemento.carousel,
        "carouselExampleCaptions",
        "miniatura-content"
      );
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
  $("#title-theme").text(data.title);
  $("#modalLabel").text(data.title2);
  /*   crearContendorCircular("content", data.tarjetas); */

  crearContenidoTriangular("content", data.tarjetas);
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
    /*   if (esPantalla1) {
      nuevoValorTranslate = "200px";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla2) {
      nuevoValorTranslate = "230px";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla3) {
      nuevoValorTranslate = "200px";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } else if (esPantalla4) {     
      nuevoValorTranslate = "200%";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    }else{
      nuevoValorTranslate = "100px";
      nuevaTransformString = transformString.replace(
        /translate\([^)]+\)/,
        `translate(${nuevoValorTranslate})`
      );
    } */
    console.log(nuevaTransformString);
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
