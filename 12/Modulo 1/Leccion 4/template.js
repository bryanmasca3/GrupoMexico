const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";

  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");

  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/200";

    item.className = `item`;
    img.className = "img-adjust";
    img.id = `img-${index}`;
    img.classList.add("item-img");

    img.addEventListener("click", function () {
      $(".container-loading-img").addClass("loading-image");

      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        img.classList.add("clicked");

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

          if (!img.classList.contains("clicked")) {
            img.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
          /* countblock = elemento.carousel.length
            ? elemento.carousel.length + 1
            : 1; */
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

    item.appendChild(img);
    main.appendChild(item);
  });
  contenedor.appendChild(main);
};
