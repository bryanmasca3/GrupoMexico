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

  elementos.forEach((elemento, index) => {
    const item = document.createElement("div");
    const img = document.createElement("img");
    img.src = elemento.image;
    item.className = `item`;
    img.className = `img-adjust ${index!=1?"img-affect":""}`;
    if (index != 1) {     
      const xindex=index<1?index:index-1
      img.id = `img-${xindex}`; 
      img.classList.add("item-img");
      img.addEventListener("click", function () {
        if (debuger) {
          img.classList.add("clicked");
          reproducirAudioItem(elemento.src);
        } else {
          if (marcados >= xindex) {
            if (!img.classList.contains("clicked")) {
              img.classList.add("clicked");
              marcados += 1;
            }

            reproducirAudioItem(elemento.src);
            countblock = elemento.carousel?.length
              ? elemento.carousel.length + 1
              : 1;
          } else {
            aplicarAnimacion(`#img-${marcados}`, "animacion-crecer");
          }
        }
      });
    }

    item.appendChild(img);
    main.appendChild(item);
  });
  contenedor.appendChild(main);
};
