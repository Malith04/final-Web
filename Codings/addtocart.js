const product = [
    {
      id: 0,
      image: 'images/goldstandard.png',
      title: 'Gold Protein',
      price: 19500,
    },
    {
      id: 1,
      image: 'images/nitro tech.png',
      title: 'MuscleTech Nitro-Tech Whey Protein',
      price: 23500,
    },
    {
      id: 2,
      image: 'images/super-mass-ginger.png',
      title: 'Dymatize Super Mass Gainer',
      price: 26000,
    },
    {
      id: 3,
      image: 'images/c4.png',
      title: 'Cellucor C4 Pre-Workout',
      price: 16500,
    },
    {
      id: 4,
      image: 'images/BCAA.png',
      title: 'BPI Sports Best BCAA',
      price: 9000,
    },
    {
      id: 5,
      image: 'images/MusclePharm.png',
      title: 'MusclePharm Creatine Monohydrate',
      price: 27500,
    },
    {
      id: 6,
      image: 'images/nutrex-lipo.png',
      title: 'Nutrex Lipo-6 Black Fat Burner',
      price: 8500,
    },
    {
      id: 7,
      image: 'images/gnc-mega.png',
      title: 'GNC Mega Men Multivitamin',
      price: 8000,
    },
    {
      id: 8,
      image: 'images/fishoil-cap.png',
      title: 'Omega-3 Fish Oil Capsules',
      price: 2500,
    },
    {
      id: 9,
      image: 'images/neocell-super.png',
      title: 'Neocell Super Collagen + Vitamin C Biotin',
      price: 5500,
    },
];
const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>Rs ${price}.00</h2>` +
          "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
      </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a){
    cart.push({ ...categories[a]});
    displaycart();
  }
  function delElement(a){
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "Rs " + 0 + ".00";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "Rs " + total + ".00";
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>Rs ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
        );
      }).join('');
}
}