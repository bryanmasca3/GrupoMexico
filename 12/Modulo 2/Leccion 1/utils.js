const reproducirAudioItem = (src) => {
  miAudio.src = src;
  miAudio.play();
};

const reproducirFirst = (modalId, contentRotate) => {
  $("#" + modalId).modal("hide");
  var rotateInstruction = $("#" + contentRotate);
  rotateInstruction.show();
  setTimeout(function () {
    rotateInstruction.hide();
    reproducirAudioItem(data.src);
  }, 5);
  /* if (window.parent.tienePointerEventsNone2()) {
    debuger = true;
  } */
};


const updateTitle = () => {
  const elementoPadre = window.parent.document.getElementById("title-padre");
  if (elementoPadre) {
    elementoPadre.textContent = data.title;
  }

  const elementoPadre2 = window.parent.document.getElementById("title-mobile");
  if (elementoPadre2) {
    elementoPadre2.textContent = data.title;
  }
};

const ocultarTitulos = () => {
  const titulo = document.querySelector("#title-theme");
  titulo.setAttribute("hidden", true);
};

const mostrarTitulos = () => {
  const titulo = document.querySelector("#title-theme");
  titulo.removeAttribute("hidden");
};



const finalizar = () => {
  if (marcados == data.tarjetas.length && !fin) {
    $("#finInduccionModal").modal("show");
    fin = true;
    debuger = true;
  }
};


const generarMiniaturas = (data, carouselId, contenedorId) => {
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
  
        miniaturas.forEach(function (miniatura) {
          miniatura.classList.remove("active");
        });
  
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
  };
  const aplicarAnimacion=(selector, className) => {
    var elementoAnimacion = document.querySelector(selector);
    elementoAnimacion.classList.remove(className);
    void elementoAnimacion.offsetWidth;
    elementoAnimacion.classList.add(className);
  }
  const generarComponent = (data, carouselId, contenedorId) => {
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
  
      const title = document.createElement("div");
  
      title.innerHTML = data.text.replace(/\n/g, "<br>");
      title.classList.add("itemcomponent");
  
      $("#text-content").text(data.text);
      title.onclick = function () {
        if (!click) {
          contador += 1;
          click = true;
        }
  
        if (!isFrontVisible) {
          voltear();
        }
        var miniaturas = document.querySelectorAll(".miniatura");
  
        miniaturas.forEach(function (miniatura) {
          miniatura.classList.remove("active");
        });
  
        if (!this.classList.contains("clicked")) {
          this.classList.add("clicked");
          marcados += 1;
        }
        $("#img-modal").attr("src", data.image);
        $("#text-modal").text(data.narracion);
        reproducirAudioItem(data.src);
      };
      miniatura.appendChild(title);
      contenedor.appendChild(miniatura);
    });
  };