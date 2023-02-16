const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
cartMenuIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu () {
  const isAsideClosed = aside.classList.contains("inactive");
  
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
  const isAsideClosed = aside.classList.contains("inactive");
  
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCartAside () {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
 
   aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
  name: "Smart Tv",
  price: 1600,
  image: "https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Apple iMac",
  price: 1220,
  image: "https://images.pexels.com/photos/9393252/pexels-photo-9393252.jpeg?auto=compress&cs=tinysrgb&w=400"
});
productList.push({
  name: "Camera Fujifilm Dslr",
  price: 700,
  image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
});
productList.push({
  name: "Round Michael Kors Chronograph Watch",
  price: 330,
  image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Selective Focus Photography",
  price: 250,
  image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Black Headset on Condenser Microphone",
  price: 470,
  image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Pair of Blue Lace-up Sneakers",
  price: 90,
  image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Pair of Black Dress Shoes",
  price: 130,
  image: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Black and Green Nike Athletic Shoes",
  price: 75,
  image: "https://images.pexels.com/photos/5413290/pexels-photo-5413290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Suits",
  price: 500,
  image: "https://st2.depositphotos.com/1002114/8240/i/450/depositphotos_82401346-stock-photo-business-male-suits.jpg"
});
productList.push({
  name: "Variable Action Variations Future GPX Cyber ​​Formula Vision Asurada",
  price: 210,
  image: "https://resize.cdn.otakumode.com/full/shop/product/2df882a1a07e410c93873c4e91d9b253.jpg"
});
productList.push({
  name: "DX FIGURE Jujutsu Kaisen Yuji Itadori: VS Ver.",
  price: 340,
  image: "https://resize.cdn.otakumode.com/ex/700.700/shop/product/83a2085a84ab4b979d9472c863d99c09.jpg"
});
productList.push({
  name: "Demon Slayer: Kimetsu no Yaiba Tanjiro Kamado 1/6 Scale Action Figure",
  price: 450,
  image: "https://resize.cdn.otakumode.com/ex/700.1050/shop/product/1a2df400dfc34ec9b68b33c7e1ed62f0.jpg"
});
productList.push({
  name: "White Floral Sleeveless Wedding Gown",
  price: 670,
  image: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Yellow and Black Leather Cross body bag",
  price: 410,
  image: "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Close-up of Rayban Sunglasses",
  price: 50,
  image: "https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Black Framed Hippie Sunglasses",
  price: 45,
  image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Round Beige and Brown Wooden Table and Chair",
  price: 900,
  image: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Gray Couch with White Accent Beside White Wall",
  price: 3020,
  image: "https://images.pexels.com/photos/3965505/pexels-photo-3965505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Brown Leather Sectional Sofa",
  price: 4150,
  image: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Two Padded Chairs and a Table",
  price: 390,
  image: "https://images.pexels.com/photos/14917598/pexels-photo-14917598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Yellow Guitar Hanged",
  price: 180,
  image: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "White and Black Stratocaster Electric Guitar With Case",
  price: 520,
  image: "https://images.pexels.com/photos/1545333/pexels-photo-1545333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Black Yamaha Piano",
  price: 740,
  image: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
  name: "Brass Saxophone",
  price: 290,
  image: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.append(productPrice, productName);

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./Assets/Icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.append(productInfoDiv, productInfoFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
}
