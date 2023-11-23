const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";

  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");

  var content = document.createElement("div");
  content.className = "container-circle";
  var contentimg = document.createElement("div");
  contentimg.className="content-img-right";
  var img = document.createElement("img");
  img.src="imagen/Recurso 10.png"
  contentimg.appendChild(img)

  elementos.forEach((elemento, index) => {
    const circle = document.createElement("div");
    circle.className = `circle circle-${index}`;
    const triangle = document.createElement("div");
    triangle.className = `triangle-container${index + 1}`;
    const triangleouter = document.createElement("div");
    triangleouter.className = "triangle triangle-outer";
    const triangleinner = document.createElement("div");
    triangleinner.className = "triangle triangle-inner item-triangle";
    triangleinner.id = `elemento-${index}`;
    const textcont = document.createElement("div");
    textcont.className = `second-triangle${index}`;
    textcont.innerHTML = elemento.text.replace(/\n/g, "<br>");
    triangleinner.addEventListener("click", function () {
      console.log(index);
      $(".container-loading-img").addClass("loading-image");

      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        triangleinner.classList.add("clicked");
        circle.classList.add("triangle-visible");

        $("#modal-primary").modal("show");
        $("#img-modal").attr("src", elemento.image);
        $("#title-secondary-modal").text(elemento.textInner);
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

          if (!triangleinner.classList.contains("clicked")) {
            triangleinner.classList.add("clicked");
            marcados += 1;
          }
          circle.classList.add("triangle-visible");
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.textInner);

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
    });
    triangle.appendChild(triangleouter);
    triangleinner.appendChild(textcont);
    triangle.appendChild(triangleinner);

    circle.appendChild(triangle);
    content.appendChild(circle);
  });
  main.appendChild(content);
  main.appendChild(contentimg);
  contenedor.appendChild(main);
};
