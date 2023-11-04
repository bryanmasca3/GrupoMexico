const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";
  /*IMAGE */
  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");
  let idx=0
  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    if (elemento.type) {     
      item.className = `item-img`;
      img.src=elemento.image
      img.className="item-img-img"
      item.appendChild(img)
    } else {      
      item.className = `item`;
      item.innerHTML = elemento.text.replace(/\n/g, "<br>");
    }
    item.classList.add(`ele-${index}`);
    item.id = `elemento-${index%2==0?idx++:"_"}`;

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
        } else if (elemento.carousel && !elemento.carouselimg) {
          generarComponent(
            elemento.carousel,
            "carouselExampleCaptions",
            "miniatura-content"
          );
        }
      } else {
        const xindex=(index%2)===0?index/2:index
        if (marcados >= xindex) {
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

          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);

          // $("#title-modal").text("Medidas de prevención contra caídas");
          reproducirAudioItem(elemento.src);
          countblock = elemento.carousel?.length
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
    main.appendChild(item);
  });
  contenedor.appendChild(main);
};
