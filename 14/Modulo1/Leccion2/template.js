const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";
  /*IMAGE */
  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");
  
  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");

    item.className = `item`;   
    item.innerHTML = elemento.text.replace(/\n/g, "<br>");
    item.id = `elemento-${index}`;
    item.addEventListener("click", function () {
      $(".container-loading-img").addClass("loading-image");

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
        } /* else if (elemento.carousel && !elemento.carouselimg) {
          generarComponent(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        } */
      } else {
        if (marcados >= index) {
          if (elemento.carousel && elemento.carouselimg) {
            generarMiniaturas(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          } /* else if (elemento.carousel && !elemento.carouselimg) {
            generarComponent(
              elemento.carousel,
              "carouselExampleCaptions",
              "miniatura-content"
            );
          } */

          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          indexElement=index;
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
          countblock = elemento.carousel?.length
            ? elemento.carousel.length
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
    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = index + 1;
    item.appendChild(numero);
    main.appendChild(item);
  });
  contenedor.appendChild(main);
};
