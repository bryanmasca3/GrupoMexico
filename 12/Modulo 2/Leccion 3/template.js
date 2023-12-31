/* const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main"; 
  var img = document.createElement("div");
  img.className = "img";

  var imgcontent=document.createElement("div");
  imgcontent.className = "imgcontent";

  elementos.forEach((elemento, index) => {
    const itemText = document.createElement("div");

    itemText.className = `item`;   
    itemText.innerHTML = elemento.text.replace(/\n/g, "<br>");
     
    main.appendChild(itemText);
  });
  img.appendChild(imgcontent);
  contenedor.appendChild(img);
  contenedor.appendChild(main);

};
 */
const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";
  $("#miniatura-content-modal").css("display", "none !important");
  var miElemento = document.getElementById("miniatura-content-modal");
  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    const text = document.createElement("div");
    text.textContent=elemento.text;
    text.className="text-img"
    const img = document.createElement("img");
    img.src = "imagen/recurso5.jfif";
    item.className = `item`;
    img.className = "img-adjust";   
    text.id = `img-${index}`;
    text.classList.add("item-img");
    text.addEventListener("click", function () {
      $(".container-loading-img").addClass("loading-image");

      miElemento.style.display = "block";
      miElemento.classList.add("d-flex");
      
      $("#text-modal").text(elemento.narracion);

      if (debuger) {
        text.classList.add("clicked");
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
          if (!text.classList.contains("clicked")) {
            text.classList.add("clicked");
            marcados += 1;
          }
          $("#modal-primary").modal("show");
          $("#img-modal").attr("src", elemento.image);
          $("#title-secondary-modal").text(elemento.text);
          reproducirAudioItem(elemento.src);
          countblock = elemento.carousel?.length
            ? elemento.carousel.length + 1
            : 1;
        } else {
          aplicarAnimacion(`#img-${marcados}`, "animacion-crecer");
        }
      }
      $("#img-modal").on("load", function () {
        $(".container-loading-img").removeClass("loading-image");
      });
    });
    item.appendChild(text);
    item.appendChild(img);
    main.appendChild(item);
  });
  contenedor.appendChild(main);
};
