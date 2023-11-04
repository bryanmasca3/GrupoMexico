var debuger = false;
var marcados = 0;
var fin = false;
var validar_modal = false;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio

//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
  title: "Lección 05: Beneficios del Programa SBC ​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  srcimagecircle: "imagen/img01.jpg",
  tarjetas: [
    {
      text: "Disminución significativa de accidentes de trabajo causados por actos inseguros",
      src: "audio/audio_01.mp3",
      image: "imagen/recurso2.png",
       carouselimg: false,
      narracion:
        "Es uno de los beneficios más destacados de la Seguridad Basada en el Comportamiento es la reducción de accidentes laborales relacionados con comportamientos inseguros. Al enfocarse en los comportamientos de los trabajadores, se pueden identificar y corregir las prácticas inseguras antes de que causen accidentes. ​",
    },
    {
      text: "Estimula un enfoque proactivo​​",
      src: "audio/audio_02.mp3",
      image: "imagen/recurso1.jpg",
       carouselimg: false,
      narracion:
        "La Seguridad Basada en el Comportamiento fomenta una mentalidad proactiva hacia la seguridad en el lugar de trabajo. En lugar de simplemente reaccionar a los incidentes después de que ocurran, se trabaja en la prevención activa de comportamientos inseguros. ​",
    },
    {
      text: "Aumenta la participación del trabajador y el sentido de pertenencia​​",
      src: "audio/audio_03.mp3",
      image: "imagen/recurso3.jfif",
       carouselimg: false,
      narracion:
        "Al involucrar a los trabajadores en la identificación y corrección de comportamientos inseguros, se fortalece su sentido de responsabilidad y pertenencia a la organización. ​",
    },
    {
      text: "Promueve la cultura de autocuidado​​",
      src: "audio/audio_04.mp3",
      image: "imagen/Recurso 2.png",
       carouselimg: false,
      narracion:
        "La Seguridad Basada en el Comportamiento impulsa la idea de que la seguridad es responsabilidad de todos. Los trabajadores se convierten en defensores de su propia seguridad y la de sus compañeros. ​​",
    },
    {
      text: "Extiende y complementa el proceso tradicional de observación de seguridad​",
      src: "audio/audio_05.mp3",
      image: "imagen/ojo.gif",
       carouselimg: false,
      narracion:
        "La Seguridad Basada en el Comportamiento amplía el enfoque de la observación de seguridad más allá de la simple identificación de condiciones inseguras. Se centra en los comportamientos de las personas y cómo estos pueden contribuir a la seguridad o al riesgo. ​",
    },
    {
      text: "Conecta al liderazgo al sistema existente de administración de seguridad​",
      src: "audio/audio_06.mp3",
      image: "imagen/Recurso4.png",
       carouselimg: false,
      narracion:
        "Los líderes de la organización desempeñan un papel activo en la Seguridad Basada en el Comportamiento al respaldar y promover una cultura de seguridad. Esto crea un compromiso visible desde la cima de la organización. ",
    },
    {
      text: "Genera un valor personal por la seguridad​",
      src: "audio/audio_07.mp3",
      image: "imagen/recurso5.jfif",
       carouselimg: false,
      narracion:
        "Los trabajadores comienzan a ver la seguridad como un valor personal, no solo como una obligación laboral. Esto se traduce en un mayor compromiso con la seguridad en el trabajo.​",
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
function checkFinish(){
  if (marcados == data.tarjetas.length && !fin) {  
    fin = true; 
    return true
  }
  return false
}
$(".btn-close-custom").on("click", function () {
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
  if(checkFinish()){
    reproducirAudioItem(data.srcfinal);
    console.log("TERMINASTE")
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
  }
});

miAudio.addEventListener("ended", function () {
  if (!validar_modal) {
    $(".btn-close-custom").prop("disabled", false);
  }
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

function generarMiniaturas(data, carouselId, contenedorId) {
  console.log(data)
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
      click = true;
    }
    miniatura.onclick = function () {
      if (!click) {
        contador += 1;
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

function crearContenidoMedioCirucular(id, elementos) {
  var contenedor = document.getElementById(id);
  var main = document.createElement("div");
  var hiddencontentcircle = document.createElement("div");
  var hiddencircle = document.createElement("div");
  main.className = "d-flex contentall";
  
  /*   var contentimg=  document.createElement("div"); */
  /*   contentimg.className="col-lg-4 col-md-4 col-sm-4 col-6" */
  /* var contentmain = document.createElement("div"); */
  /*  contentmain.className="col-lg-8 col-md-8 col-sm-8 col-6" */

  /*  var img = document.createElement("img");
  img.src = "imagen/Recurso 1.png"; */
  var contentcircle = document.createElement("div");
  contentcircle.className = "contentcircle";
  hiddencontentcircle.className = "contentcircle2";  
  contentcircle.id="contentcircle";
  var circle = document.createElement("div");
  circle.className = "circle";
  hiddencircle.className = "circle2";
  circle.id="circle";

  //contentimg.appendChild(img);
  /*  var contenttext = document.createElement("div");
  contenttext.className="contentmain"
 */

  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");

    item.className = "item child-circle-item d-flex align-items-center"; //need CHECK
    const txtcontent = document.createElement("div");
    item.innerHTML = elemento.text;
    item.appendChild(txtcontent);
    const anguloInicial = -50;
    const angulo = anguloInicial + (120 / elementos.length) * index; // Ángulo de rotación

    item.style.transform = `rotate(${angulo}deg) translate(${index==0||index==data.tarjetas.length-1?32:30}%) rotate(${-angulo}deg) translate(55%)`;
    item.id = `elemento-${index}`;

    item.addEventListener("click", function () {
     
      $(".container-loading-img").addClass("loading-image");

      
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.text);

        reproducirAudioItem(elemento.src);
  
        if (elemento.carousel && elemento.carouselimg) {
          generarMiniaturas(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        }else if (elemento.carousel && !elemento.carouselimg) {
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
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);

          reproducirAudioItem(elemento.src);
        
          if (elemento.carousel && elemento.carouselimg) {
            generarMiniaturas(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          }else if (elemento.carousel && !elemento.carouselimg) {
            generarComponent(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          }
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
    circle.appendChild(item);
  });

  contentcircle.appendChild(circle);
  hiddencontentcircle.appendChild(hiddencircle);
  /*  contentimg.appendChild(contentcircle); */
  /*   contentmain.appendChild(contenttext); */
  main.appendChild(hiddencontentcircle);
  main.appendChild(contentcircle);
 
  /*   main.appendChild(contentmain); */
  contenedor.appendChild(main);
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
    item.innerHTML = elemento.text;
    item.appendChild(txtcontent);
    const anguloInicial = -90;
    const angulo = anguloInicial + (360 / elementos.length) * index; // Ángulo de rotación
    item.style.transform = `rotate(${angulo}deg) translate(20%) rotate(${-angulo}deg)`;
    item.id = `elemento-${index}`;

    /*  if (index == 1) { */
    // Reemplaza 'tu-contenedor' con el ID de tu contenedor
    /*   } */
    item.addEventListener("click", function () {
     
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
        if (elemento.carousel && elemento.carouselimg) {
          generarMiniaturas(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        }else if (elemento.carousel && !elemento.carouselimg) {
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
          }else if (elemento.carousel && !elemento.carouselimg) {
            generarComponent(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          }
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
  crearContenidoMedioCirucular("content", data.tarjetas);
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

/*   const elementos = document.querySelectorAll(".child-circle-item");
 
  const main=document.getElementById("contentcircle")
  const circle=document.getElementById("circle")
  const esPantalla1 = window.matchMedia("(max-width: 767px)").matches;

  if(esPantalla1){
    const newelement=document.createElement("div")
    newelement.style.height="100%"
    newelement.style.display="flex"
    newelement.style.padding="25px 0px 0px 25px"
    newelement.style.flexDirection="column";
    newelement.style.justifyContent="space-between"
    elementos.forEach(function(elemento) {
      elemento.classList.remove("child-circle-item")
      elemento.style.removeProperty('transform');
      newelement.appendChild(elemento.cloneNode(true));
    });
     main.appendChild(newelement) 
    elementos.forEach(function(elemento) {
      elemento.remove();
    
    });
    circle.style.display="none"
  } */
  /*   const elementos = document.querySelectorAll(".child-circle-item");

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
  
    item.style.transform = nuevaTransformString;
  }); */
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
