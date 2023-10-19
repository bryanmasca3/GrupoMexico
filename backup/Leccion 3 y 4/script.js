var debuger = true;
var marcados = 0;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio

//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
    title: 'Lección 01: Definiciones Generales',
    title2: 'Definiciones Generales',
    status: false,
    src: 'audio/audio1.mp3',
    srcfinal:"audio/audio07.mp3",
    tarjetas: [
        {
            text: "Delegar responsabilidades",
            src: "audio/audio01.mp3",
            image: "imagen/Recurso 8.png"
        },
        {
            text: "Reconocer el trabajo bien hecho",
            src: "audio/audio02.mp3",
            image: "imagen/Recurso 8.png"
        },
        {
            text: "Estimular la comunicación",
            src: "audio/audio03.mp3",
            image: "imagen/Recurso 9.png"
        },
        {
            text: "Establecer metas claras",
            src: "audio/audio04.mp3",
            image: "imagen/Recurso 10.png"
        },
        {
            text: "Utilizar incentivos y premios​",
            src: "audio/audio05.mp3",
            image: "imagen/img05.jpg"
        },
        {
            text: "Estimular la superación personal y profesional​",
            src: "audio/audio06.mp3",
            image: "imagen/img06.jpg"
        },       
    ]
}

function mostrarRotacionTemp() {
    var rotateInstruction = $('#rotateInstruction');

    // Mostrar el elemento
    rotateInstruction.show();

    // Ocultar el elemento después de 2 segundos (ajusta este valor según tus necesidades)
    setTimeout(function () {
        rotateInstruction.hide();
        reproducirAudioItem(data.src);
    }, 4000);
}

function updateTitle() {
    const elementoPadre = window.parent.document.getElementById('title-padre');
    if (elementoPadre) {
        elementoPadre.textContent = data.title2;
    }

    const elementoPadre2 = window.parent.document.getElementById('title-mobile');
    if (elementoPadre2) {
        elementoPadre2.textContent = data.title2;
    }
}

function ocultarTitulos() {
    const titulo = document.querySelector('#title-theme');
    titulo.setAttribute('hidden', true);

}

function mostrarTitulos() {
    const titulo = document.querySelector('#title-theme');
    titulo.removeAttribute('hidden');

}

function reproducirAudioItem(src) {
    miAudio.src = src;
    miAudio.play();
}

function reproducirFirst() {
    $('#miModal').modal("hide");
    reproducirAudioItem(data.src);
    if (window.parent.tienePointerEventsNone2()) {
        debuger = true;
    }
    if (window.parent.isMobile) {
        mostrarRotacionTemp();
    }
}

// Función para continuar después del modal de fin de inducción
function continuarInduccion() {
    // Coloca aquí la lógica para continuar con la inducción o redirigir a la siguiente página
}

function finalizar() {
    if (marcados == data.tarjetas.length) {
        $('#finInduccionModal').modal('show');
    }
}

miAudio.addEventListener("play", function () {
    if (!debuger) {
        $(".btn-close-custom").prop("disabled", true);
        // Aplicar el estilo de fondo
        $(".btn-close-custom").css("background-color", "rgb(57, 57, 55)");
        document.querySelectorAll(".item").forEach(elemento => elemento.style.pointerEvents = "none");
    }
});

miAudio.addEventListener("ended", function () {
    $(".btn-close-custom").prop("disabled", false);
    $(".btn-close-custom").css("background-color", "orange");

    document.querySelectorAll(".item").forEach(elemento => elemento.style.pointerEvents = "auto");
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
        item.className = "item rounded-3 text-center d-flex justify-content-center align-items-center h-100";
        item.textContent = elemento.text;
        item.id = `elemento-${index}`;
        item.addEventListener("click", function () {
            if (debuger) {
                item.classList.add('clicked');

                $('#modal-primary').modal('show');
                $('#img-modal').attr('src', elemento.image);
                $('#title-secondary-modal').text(elemento.text);
                // $('#title-modal').text('Definiciones Generales');
                reproducirAudioItem(elemento.src);

            } else {
                if (marcados >= index) {
                    if (!item.classList.contains('clicked')) {
                        item.classList.add('clicked');
                        marcados += 1;
                    }
                    $('#modal-primary').modal('show');
                    $('#img-modal').attr('src', elemento.image);
                    $('#title-secondary-modal').text(elemento.text);
                    // $('#title-modal').text('Definiciones Generales');
                    reproducirAudioItem(elemento.src);
                } else {
                    aplicarAnimacion(`#elemento-${marcados}`, 'animacion-crecer');
                }
            }
            if (marcados == 6) {
                window.parent.validarPuntaje(20, "opcion");
                debuger = true;
            }
        });
        const numero = document.createElement("div");
        numero.className = "numero";
        numero.textContent = index + 1;

        item.appendChild(numero);
        div.appendChild(item);

        contenedor.appendChild(div);
    });
}

function main() {
    updateTitle();
    ocultarTitulos();
    $('#miModal').modal('show');
    $('#title-theme').text(data.title2);
    $('#modalLabel').text(data.title2);
    crearDivCentrados('content', data.tarjetas);
}

// Mostrar el modal de carga al inicio
$(window).on('load', function () {
    $('#cargaModal').modal('hide');
    if (!window.parent.isMobile) {
        $('#content').addClass('px col-10');
        $(".mobile").css("height", "550px"); //CAMBIADO
    }
});

$(".btn-close-custom").on("click", function () {
    $('#img-modal').attr('src', '');
    if (miAudio) {
        miAudio.pause(); // Detén la reproducción del audio
    }
    if (!isFrontVisible) {
        voltear();
    }
    if(marcados==6){
        reproducirAudioItem(data.srcfinal)
      }
});


$(document).ready(function () {
    main();
    window.parent.document.addEventListener('fullscreenchange', () => {
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
});
// Función para mostrar información adicional en la tarjeta posterior al hacer clic en la imagen
function mostrarInformacionAdicional() {
    // Actualiza el contenido de la tarjeta posterior si es necesario
    document.querySelector('.back #informacion-adicional').textContent = 'Información adicional que deseas mostrar al hacer clic en la imagen.';
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

// function seleccionarImagen(elemento) {
//     // Obtener todas las miniaturas
//     var miniaturas = document.querySelectorAll('.miniatura');

//     // Quitar la clase 'active' de todas las miniaturas
//     miniaturas.forEach(function (miniatura) {
//         miniatura.classList.remove('active');
//     });

//     // Agregar la clase 'active' al elemento que hizo clic
//     elemento.classList.add('active');
// }

// function generarCarrusel(imagenes, contenedorId) {
//     const contenedor = document.getElementById(contenedorId);

//     const modalBody = document.createElement('div');
//     modalBody.classList.add('modal-body', 'text-justify');
//     modalBody.id = 'carousel01';

//     const carousel = document.createElement('div');
//     carousel.id = 'carouselExampleCaptions';
//     carousel.classList.add('carousel', 'slide');
//     carousel.setAttribute('data-bs-ride', 'carousel');
//     carousel.setAttribute('data-bs-interval', 'false');
    
//     const carouselInner = document.createElement('div');
//     carouselInner.classList.add('carousel-inner', 'mobile');
    
//     for (let i = 0; i < imagenes.length; i++) {
//         const imagen = imagenes[i];
//         const carouselItem = document.createElement('div');
//         // carouselItem.classList.add('carousel-item', 'centered-carousel-item');
//         carouselItem.classList.add('text-center','justify-content-center','align-items-center');
//         if (i === 0) {
//             carouselItem.classList.add('active');
//         }

//         const img = document.createElement('img');
//         img.src = imagen.src;
//         img.classList.add('img-fluid', 'border-2', 'modal-img');
//         img.alt = imagen.alt;

//         carouselItem.appendChild(img);
//         carouselInner.appendChild(carouselItem);
//     }

//     carousel.appendChild(carouselInner);

//     const miniaturas = document.createElement('div');
//     miniaturas.classList.add('miniaturas');

//     for (let i = 0; i < imagenes.length; i++) {
//         const imagen = imagenes[i];
//         const miniatura = document.createElement('div');
//         miniatura.classList.add('miniatura');
//         if (i === 0) {
//             miniatura.classList.add('active');
//         }
//         miniatura.setAttribute('data-bs-target', '#carouselExampleCaptions');
//         miniatura.setAttribute('data-bs-slide-to', i);
//         miniatura.onclick = function() {
//             seleccionarImagen(this);
//         };
//         const imgMiniatura = document.createElement('img');
//         imgMiniatura.src = imagen.src;
//         imgMiniatura.alt = imagen.alt;

//         miniatura.appendChild(imgMiniatura);
//         miniaturas.appendChild(miniatura);
//     }

//     modalBody.appendChild(carousel);
//     modalBody.appendChild(miniaturas);

//     contenedor.appendChild(modalBody);
// }

// // Datos de ejemplo para las imágenes
// const imagenes = [
//     { src: 'imagen/img01.png', alt: 'Miniatura 1' },
//     { src: 'imagen/img02.png', alt: 'Miniatura 2' },
//     { src: 'imagen/img03.png', alt: 'Miniatura 3' }
// ];

// // Llama a la función y pasa el ID del contenedor como parámetro
// generarCarrusel(imagenes, 'carousel01');
