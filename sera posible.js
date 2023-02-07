let products = {
  data: [
    {
      productName: "VOLKSWAGEN AMAROK ",
      category: "Camioneta",
      marca: "volkswagen",
      modelo: "Amarok",
      price: "11,000,000",
      Made: "2019",
      kilometraje: "117.000 km",
      tipodeCombustible: "Diesel",
      servicealDia: "si",
      sucursal: "De la Estancia 2496",
      image:
        "ttps://autotest.com.ar/wp-content/uploads/2023/01/Volkswagen-Amarok-frente.jpg",
    },
    {
      productName: "HONDA CIVIC",
      category: "Sedan",
      marca: "Honda",
      modelo: "Civic",
      price: "8,500,000",
      made: "2018",
      kilometraje: "27.000 km",
      tipodeCombustible: "Nafta",
      servicealDia: "si",
      sucursal: "Gdor. Paz 1238",
      image:
        "https://autotest.com.ar/wp-content/uploads/2020/10/HONDA-CIVIC-Si-PORTADA.jpg",
    },
    {
      productName: "FORD ECOSPORT",
      category: "Camioneta",
      marca: "Ford",
      modelo: "Ecosport",
      price: "4,500,000",
      made: "2016",
      kilometraje: "43.000 km",
      tipodeCombustible: "Nafta",
      servicealDia: "si",
      sucursal: "Heroes de Malvinas 4073",
      image: "https://www.rural-ftp.com/ofertas/images/Mt2F0bVj86WgYakL.jpeg",
    },
    {
      productName: "CHEVROLET CRUZE",
      category: "Sedan",
      marca: "Chevrolet",
      modelo: "Cruze",
      price: "6,300,000",
      made: "2019",
      kilometraje: "43.000 km",
      tipodeCombustible: "Nafta",
      servicealDia: "no",
      sucursal: "Heroes de Malvinas 4073",
      image:
        "https://autotest.com.ar/wp-content/uploads/2021/07/CHEVROLET-CRUZE-SPORT6-PORTADA.jpg",
    },
    {
      productName: "MOTOMEL SKUA",
      category: "Moto",
      marca: "Motomel",
      modelo: "Skua",
      price: "379,990",
      made: "2022",
      kilometraje: "11.000 km",
      tipodeCombustible: "Nafta",
      servicealDia: "no",
      sucursal: "Gdor. Paz 1238",
      image:
        "http://images.unomotos.com.ar/unomotos/motos_mini/motomel_skua_150_v6_mini_0.png",
    },
    {
      productName: "HERO HUNK",
      category: "Moto",
      marca: "Hero",
      modelo: "Hunk",
      price: "897,990",
      made: "2023",
      kilometraje: "0 km",
      tipodeCombustible: "Nafta",
      servicealDia: "si",
      sucursal: "De la Estancia 2496",
      image:
        "https://images.unomotos.com.ar/unomotos/motos_mini/hero_moto_hunk_190r_baul_id3054_mini_2022.png",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  //dato auxiliares
  let datosAuxi = document.createElement("h7");
  datosAuxi.innerText =
    i.made +
    " " +
    i.kilometraje +
    " " +
    i.tipodeCombustible +
    " " +
    "Serv" +
    " " +
    i.servicealDia +
    " ";
  container.appendChild(datosAuxi);
  //sucursal
  let sucursal = document.createElement("h9");
  sucursal.innerText = i.sucursal;
  container.appendChild(sucursal);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
