var debuger = false;
var marcados = 0;
var total = 5;
var fin = false;
var validar_modal = false;
var susbcount = 1;
var miAudio = document.getElementById("miAudio");
var modal_validar = false;
var countblock = 3;
var data = {
  title:
    "Lección 2: Medidas de Protección frente a Contacto directo  e indirecto​​",
  title2: "Definiciones Generales",
  status: false,
  src: "audio/audio_begin.mp3",
  srcfinal: "audio/audio_end.mp3",
  tarjetas: [
    {
      text: "Protección frente el Contacto Directo",
      src: "audio/audio_01_1.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "1. Alejamiento de partes activas: Las partes activas de la instalación eléctrica deben estar ubicadas a una distancia suficiente para evitar el contacto accidental con las manos u objetos conductores. La distancia de seguridad es de 2.5 metros en altura y 1 metro en horizontal desde las partes activas.",
      carouselimg: true,
      grafica: [
        {
          text: "Alejamiento de partes activas:",
          src: "audio/audio_01_1.mp3",
          image: "imagen/recurso5.jfif",
          x: "57",
          y: "-22",
          narracion:
            "Alejamiento de partes activas: Las partes activas de la instalación eléctrica deben estar ubicadas a una distancia suficiente para evitar el contacto accidental con las manos u objetos conductores. La distancia de seguridad es de 2.5 metros en altura y 1 metro en horizontal desde las partes activas. ​ ",
        },
        {
          text: "Instalación de dispositivos que impidan el contacto:",
          src: "audio/audio_01_2.mp3",
          image: "imagen/recurso5.jfif",
          x: "0",
          y: "55",
          narracion:
            "Instalación de dispositivos que impidan el contacto: Se deben colocar barreras que impidan el contacto con las partes energizadas de la instalación, como armarios eléctricos, tomas de corriente y receptores. Estas deben estar firmemente fijados y ser capaces de resistir esfuerzos mecánicos. ​",
        },
        {
          text: "Recubrimiento de partes energizadas:",
          src: "audio/audio_01_3.mp3",
          image: "imagen/recurso5.jfif",
          x: "-57",
          y: "-22",
          narracion:
            "Recubrimiento de partes energizadas: Las partes energizadas deben estar recubiertas con un aislamiento adecuado según el nivel de tensión y/o carga eléctrica.",
        },
      ],
    },
    {
      text: "Protección frente el Contacto Indirecto​",
      src: "audio/audio_02_1.mp3",
      image: "imagen/recurso5.jfif",
      narracion:
        "Puesta a tierra de las masas: Verificar que las instalaciones eléctricas cuenten con la puesta/toma a tierra. Esto se aplica a máquinas, herramientas, y otros componentes o instalaciones eléctricas. ​ ​",
      carouselimg: false,
      grafica: [
        {
          text: "Puesta a tierra de las masas:",
          src: "audio/audio_02_1.mp3",
          image: "imagen/recurso5.jfif",
          x: "57",
          y: "-22",
          narracion:
            "Puesta a tierra de las masas: Verificar que las instalaciones eléctricas cuenten con la puesta/toma a tierra. Esto se aplica a máquinas, herramientas, y otros componentes o instalaciones eléctricas.  ",
        },
        {
          text: "Separación de circuitos",
          src: "audio/audio_02_2.mp3",
          image: "imagen/recurso5.jfif",
          x: "0",
          y: "55",
          narracion:
            "Separación de circuitos: Instalar un transformador de separación de circuitos que es empleado contra choques eléctricos y como filtro para fuentes de energía constante y sensibles. ​",
        },
        {
          text: "Doble aislamiento",
          src: "audio/audio_02_3.mp3",
          image: "imagen/recurso5.jfif",
          x: "-57",
          y: "-22",
          narracion:
            "Doble aislamiento: Utilizar materiales que dispongan de un doble aislamiento o aislamiento reforzado entre las partes energizadas y las masas accesibles. Esta medida proporciona una capa adicional de protección contra contactos indirectos. ",
        },
      ],
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
var flipContent = document.querySelectorAll(".flip-content");
var flipButton2 = document.getElementById("flipButton_2");
var isFrontVisible = true;

$(".btn-close-custom").on("click", function () {
  susbcount = 1;
  $("#img-modal").attr("src", "");
  if (miAudio) {
    miAudio.pause(); // Detén la reproducción del audio
  }
  if (!isFrontVisible) {
    voltear("img-modal", "text-modal");
    voltear("img-modal-2", "text-modal-2");
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
function grafico_radial(id, items, polygon, inicio, rango, num) {
  const graficoRadial = document.getElementById(id);
  const tajada_base = document.createElement("div");
  tajada_base.className = "circle-base";
  graficoRadial.appendChild(tajada_base);
  contador = 0;
  // Array de colores para las tajadas
  items.forEach((elemento, index) => {
    const tajada = document.createElement("div");
    tajada.className = "circle";
    tajada.id = `tajada${num}-${index}`;
    // Calcula el ángulo para cada tajada en función de inicio y rango
    const angulo = inicio + index * rango;

    // Calcula el clip-path para cada tajada en función del ángulo
    const clipPathValue = polygon;
    tajada.style.clipPath = clipPathValue;
    tajada.style.transform = `rotate(${angulo}deg) translate(0px, -1px)`; // Cambia la transformación aquí

    // Agrega un evento click para cambiar el color y realizar una transformación
    if (index == 0) {
      tajada.classList.add("clicked");
      contador += 1;
      tajada.style.transform = `rotate(${angulo}deg) translate(0px, -5px)`; // Cambia la transformación aquí
    }
    tajada.addEventListener("click", () => {
      if (susbcount >= index) {
        if (!tajada.classList.contains("clicked")) {
          tajada.classList.add("clicked");
          contador += 1;
          susbcount += 1;
          tajada.style.transform = `rotate(${angulo}deg) translate(0px, -5px)`; // Cambia la transformación aquí
        }
        /* if (contador == num) {
          modal_validar = false;
        } */
        if (num == 3) {
          $("#img-modal").attr("src", elemento.image);
          $("#text-modal").text(elemento.narracion);
          if (!isFrontVisible) {
            voltear("img-modal", "text-modal");
          }
        }
        if (num == 5) {
          $("#img-modal-2").attr("src", elemento.image);
          $("#text-modal-2").text(elemento.narracion);
          if (!isFrontVisible) {
            voltear("img-modal-2", "text-modal-2");
          }
        }
        reproducirAudioItem(elemento.src);
      } else {
        aplicarAnimacion(`#tajada${num}-${susbcount}`, "animacion-crecer");
      }
    });

    graficoRadial.appendChild(tajada);
  });

  items.forEach((elemento) => {
    const text = document.createElement("p");
    text.textContent = elemento.text;
    text.classList.add("text-circle");

    // Llama a la función para ajustar la posición del texto
    ajustarPosicionTexto(text, elemento);

    graficoRadial.appendChild(text);
  });
}
function voltear(id1, id2) {
  var imgModal = document.getElementById(id1);
  var textModal = document.getElementById(id2);

  // Detectar si el navegador es Firefox
  var isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

  if (isFrontVisible) {
    // Gira hacia la cara trasera (texto)
    if (isFirefox) {
      imgModal.style.display = "none";
      textModal.style.display = "block";
    }

    flipContent.forEach(function (flipContent) {
      flipContent.style.transform = "rotateY(180deg)";
    });
    flipButton.innerHTML = '<i class="fa-solid fa-text-slash"></i>';
  } else {
    // Gira hacia la cara frontal (imagen)
    if (isFirefox) {
      textModal.style.display = "none";
      imgModal.style.display = "block";
    }

    flipContent.forEach(function (flipContent) {
      flipContent.style.transform = "rotateY(0deg)";
    });
    flipButton.innerHTML = '<i class="fa-solid fa-text-height"></i>';
  }

  // Cambia el estado de visibilidad
  isFrontVisible = !isFrontVisible;
}

flipButton.addEventListener("click", function () {
  voltear("img-modal", "text-modal");
});
flipButton2.addEventListener("click", function () {
  voltear("img-modal-2", "text-modal-2");
});

miAudio.addEventListener("play", function () {
  if (!debuger) {
    $(".btn-close-custom").prop("disabled", true);
    document
      .querySelectorAll(".item")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
    document
      .querySelectorAll(".circle")
      .forEach((elemento) => (elemento.style.pointerEvents = "none"));
  }
});

miAudio.addEventListener("ended", function () {
  console.log(countblock);
  console.log(susbcount);
  if (!validar_modal && susbcount == countblock) {
    $(".btn-close-custom").prop("disabled", false);
  }
  document
    .querySelectorAll(".item")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
    document
    .querySelectorAll(".circle")
    .forEach((elemento) => (elemento.style.pointerEvents = "auto"));
});
function ajustarPosicionTexto(textElement, elemento) {
  // Define la función para ajustar la posición del texto
  const reposicionarTexto = () => {
    const { escalaCoordenadas, escalaFuente } = calcularEscala();
    textElement.style.transform = `scale(${escalaCoordenadas}) translate(${elemento.x}px, ${elemento.y}px)`;
  };

  // Calcula la escala en función del tamaño de pantalla
  const calcularEscala = () => {
    let escalaCoordenadas, escalaFuente;

    if (window.innerWidth <= 575.98) {
      escalaCoordenadas = 1.3; // Escala para móvil en coordenadas (x e y)
      escalaFuente = 25; // Escala para móvil en tamaño de fuente
    } else if (window.innerWidth <= 767.98) {
      escalaCoordenadas = 0.75; // Escala para móvil en orientación horizontal en coordenadas (x e y)
      escalaFuente = 0.7; // Escala para móvil en orientación horizontal en tamaño de fuente
    } else if (window.innerWidth <= 991.98) {
      escalaCoordenadas = 0.75; // Escala para pantalla mediana en coordenadas (x e y)
      escalaFuente = 0.8; // Escala para pantalla mediana en tamaño de fuente
    } else {
      if (window.innerHeight <= 600) {
        escalaCoordenadas = 1.2; // Escala para pantalla de escritorio en coordenadas (x e y)
        escalaFuente = 1.0; // Escala para pantalla de escritorio en tamaño de fuente
      } else {
        escalaCoordenadas = 2.2; // Escala para pantalla de escritorio en coordenadas (x e y)
        escalaFuente = 1.0; // Escala para pantalla de escritorio en tamaño de fuente
      }
    }
    return { escalaCoordenadas, escalaFuente };
  };

  // Agrega el evento resize para reposicionar el texto
  window.addEventListener("resize", reposicionarTexto);

  // Llama a la función inicialmente para establecer la posición
  reposicionarTexto();
}

$(document).ready(function () {
  updateTitle();
  ocultarTitulos();
  $("#miModal").modal("show");
  $("#title-theme").text(data.title);
  $("#modalLabel").text(data.title2);
  grafico_radial(
    "grafico_radial",
    data.tarjetas[0].grafica,
    "polygon(0% 0%, 100% 0%, 100% 21%, 50% 50%, 0% 21%)",
    60,
    120,
    3
  );
  grafico_radial(
    "grafico_radial_2",
    data.tarjetas[1].grafica,
    "polygon(0% 0%, 100% 0%, 100% 21%, 50% 50%, 0% 21%)",
    60,
    120,
    5
  );
  buildTemplate1("content", data.tarjetas); /* CAMBIAR MODELO */

  window.parent.document.addEventListener("fullscreenchange", () => {
    if (window.parent.document.fullscreenElement) {
      mostrarTitulos();
    } else {
      ocultarTitulos();
    }
  });
});
/* window.parent.validarPuntaje(20, "opcion"); */
