const buildTemplate1 = (id, elementos) => {
  var contenedor = document.getElementById(id);

  var main = document.createElement("div");
  main.className = "main";

  var img = document.createElement("div");
  img.className = "img";

  var imgcontent = document.createElement("img");
  imgcontent.className = "imgcontent";
  imgcontent.src = "./imagen/Recurso 2.png";

  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = elemento.image;

    item.className = `item`;
    img.className = "img-adjust";
    img.id = `img-${index}`;
    img.classList.add("item-img");

    img.addEventListener("click", function () {
      
      if (debuger) {
        img.classList.add("clicked");
        reproducirAudioItem(elemento.src);
        imgcontent.src=elemento.image
      } else {
        if (marcados >= index) {
          if (!img.classList.contains("clicked")) {
            img.classList.add("clicked");
            marcados += 1;
          }

          reproducirAudioItem(elemento.src);
          imgcontent.src=elemento.image
          countblock = elemento.carousel?.length
            ? elemento.carousel.length + 1
            : 1;
        } else {
          aplicarAnimacion(`#img-${marcados}`, "animacion-crecer");
        }
      }
    });

    item.appendChild(img);
    main.appendChild(item);
  });
  img.appendChild(imgcontent);
  contenedor.appendChild(img);
  contenedor.appendChild(main);
};
