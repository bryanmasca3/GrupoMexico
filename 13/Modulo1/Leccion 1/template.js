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
     

      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      
      $("#text-modal").text(elemento.narracion);
      $(".container-loading-img").addClass("loading-image");
      if (debuger) {
        item.classList.add("clicked");

        $("#modal-primary").modal("show");
       
        $("#title-secondary-modal").text(elemento.text);
        // $('#title-modal').text('Medidas de prevención contra caídas');
        if(determinarTipoDeMedio(elemento.image)){
          
          $("#miVideo").hide();
          $("#img-modal").show();
          $("#img-modal").attr("src", elemento.image);          
        }else{
          $("#img-modal").hide();
          $("#miVideo").show();
          reproducirVideoItem(elemento.image);                   
        }
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

          if (!item.classList.contains("clicked")) {
            item.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          //$("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          if(determinarTipoDeMedio(elemento.image)){
          
            $("#miVideo").hide();
            $("#img-modal").show();
            $("#img-modal").attr("src", elemento.image);          
          }else{
            $("#img-modal").hide();
            $("#miVideo").show();
            reproducirVideoItem(elemento.image);                   
          }
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
      $("#miVideo").on("loadeddata", function () {
        // Cuando el video se carga, quita la clase "loading-video"
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
