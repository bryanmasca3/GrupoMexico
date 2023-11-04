var debuger = false;
var marcados = 0;
var fin = false;
var validar_modal = false;
var miAudio = document.getElementById("miAudio"); // Reemplaza "miAudio" con el ID de tu elemento de audio

//Actualizar data para nueva presentacion, solo cambiar las tarjetas, y la forma de crear su informacion
var data = {
    title: 'Lección 03: Medidas de prevención contra caídas',
    title2: 'Medidas de prevención contra caídas',
    status: false,
    src: 'audio/leccion03.mp3',
    tarjetas: [
        {
            text: 'Sistema de Ingeniería',
            src: "audio/leccion03-1.mp3",
            image: 'images/nuevas/Recurso 5.png'
        },
        {
            text: 'Programa de Prevención contra caídas',
            src: "audio/leccion03-2.mp3",
            image: 'images/nuevas/Recurso 8.png'
        },
        {
            text: 'Delimitación del área',
            src: "audio/leccion03-3.mp3",
            image: 'images/nuevas/07.png'
        },
        {
            text: 'Instalación de barandas',
            src: "audio/leccion03-4.mp3",
            image: 'images/nuevas/Recurso 6.png'
        },
        {
            text: 'Inspector de Seguridad',
            src: "audio/leccion03-5.mp3",
            image: 'images/nuevas/08.png'
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
    }, 5);
}

function updateTitle() {
    const elementoPadre = window.parent.document.getElementById('title-padre');
    if (elementoPadre) {
        elementoPadre.textContent = data.title;
    }

    const elementoPadre2 = window.parent.document.getElementById('title-mobile');
    if (elementoPadre2) {
        elementoPadre2.textContent = data.title;
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
    mostrarRotacionTemp();
}

// Función para continuar después del modal de fin de inducción
function continuarInduccion() {
    // Coloca aquí la lógica para continuar con la inducción o redirigir a la siguiente página
}

function finalizar() {
    if (marcados == data.tarjetas.length && !fin) {
        $('#finInduccionModal').modal('show');
        fin = true;
        debuger = true;
    }
}

miAudio.addEventListener("play", function () {
    if (!debuger) {
        $(".btn-close-custom").prop("disabled", true);
        document.querySelectorAll(".item").forEach(elemento => elemento.style.pointerEvents = "none");
    }
});

miAudio.addEventListener("ended", function () {
    if (!validar_modal) {
        $(".btn-close-custom").prop("disabled", false);
    }
    document.querySelectorAll(".item").forEach(elemento => elemento.style.pointerEvents = "auto");
});

function aplicarAnimacion(selector, className) {
    var elementoAnimacion = document.querySelector(selector);
    elementoAnimacion.classList.remove(className);
    void elementoAnimacion.offsetWidth;
    elementoAnimacion.classList.add(className);
}



function crearDivCentrados(id, elementos, className) {
    var contenedor = document.getElementById(id);
    elementos.forEach((elemento, index) => {
        const div = document.createElement("div");
        div.className = className;

        const item = document.createElement("div");
        item.className = "item rounded-3 text-center d-flex justify-content-center align-items-center h-100";
        item.textContent = elemento.title;
        item.id = `elemento-${index}`;

        if (index == 0) {
            grafico_radial('grafico_radial', elemento.items, "polygon(0% 0%, 100% 0%, 100% 21%, 50% 50%, 0% 21%)", 60, 120);
        } else {
            crearDivCentradosModal('grafico_secondary', elemento.items, 'col-9 col-md-6 col-lg-6 mb-3 mt-3');
        }
        item.addEventListener("click", function () {
            if (!item.classList.contains('clicked')) {
                item.classList.add('clicked');
                marcados += 1;
                validar_modal = true;
            }
            if (index == 0) {
                $('#modal-primary').modal('show');
                $('#img-modal').attr('src', elemento.imagen);
                // $('#title-secondary-modal').text(elemento.text);
                $('#title-modal').text(elemento.title);
            } else {
                $('#modal-secondary').modal('show');
                $('#img-modal-secondary').attr('src', elemento.imagen);
                $('#title-modal-secondary').text(elemento.title);
            }
            reproducirAudioItem(elemento.audio);
        });

        div.appendChild(item);

        contenedor.appendChild(div);

    });
}

function crearDivCentradosStep4(id, elementos) {
    var contenedor = document.getElementById(id);
    const div = document.createElement("div");
    div.className = "row justify-content-end"; // Justificar todos los elementos a la derecha
    var numColumnas = 12; // Inicializamos con 12 columnas
    var num_elementos = Math.ceil(elementos.length / 2);
    var pasos = -1;
    elementos.forEach((elemento, index) => {
        const item = document.createElement("div");
        item.className = `item-horizontal col-md-${numColumnas}`;
        item.textContent = elemento.text;
        item.addEventListener("click", function () {
            // const elemento = event.target;
            // const spanElement = document.querySelector("#step2-title-modal");

            // if (spanElement) {
            //     const texto = elemento.childNodes[0].nodeValue.trim();
            //     spanElement.textContent = texto; // Asigna el texto al elemento <span>
            // }


            // if (!data[step].status) {
            //     if (step_1 >= elemento.dataset.step) {
            //         $('#staticBackdrop').modal("show");
            //         $("#modal-step-2-img").attr("src", elemento.dataset.image);
            //         $('#title-modal-static').text('Medidas de prevención contra caídas');
            //         reproducirAudioItem(elemento.dataset.src);
            //         if (!elemento.classList.contains("clicked")) {
            //             elemento.classList.add("clicked");
            //             step_1 += 1;
            //         }
            //     }
            // } else {
            //     $('#staticBackdrop').modal("show");
            //     $('#title-modal-static').text('Medidas de prevención contra caídas');
            //     $("#modal-step-2-img").attr("src", elemento.dataset.image);
            //     reproducirAudioItem(elemento.dataset.src);
            // }
        });
        item.setAttribute("data-src", elemento.src);
        item.setAttribute("data-step", index);
        item.setAttribute("data-image", elemento.image);

        const numero = document.createElement("div");
        numero.className = "numero-horizontal";
        numero.textContent = index + 1;

        item.appendChild(numero);
        div.appendChild(item);

        if ((index + 1) >= num_elementos) {
            pasos = 1;
        }
        numColumnas += pasos;
    });

    contenedor.appendChild(div);
}

function main() {
    //updateTitle();
    //ocultarTitulos();
    $('#miModal').modal('show');
    $('#title-theme').text(data.title);
    crearDivCentradosStep4('content', data.tarjetas);
}

// Mostrar el modal de carga al inicio
$(window).on('load', function () {
    $('#cargaModal').modal('hide');
    if (!window.parent.isMobile) {
        $('#content').addClass('px col-10');
        $(".mobile").css("height", "320px");
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

