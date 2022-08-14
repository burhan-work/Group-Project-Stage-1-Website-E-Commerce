let totalHargaMakanan = 0;
let food = [
  {
    name: `Manggis`,
    stok: 20,
    harga: 20000,
    image: "./assets/images/manggis.jpg",
  },
  {
    name: `Alpukad`,
    stok: 10,
    harga: 60000,
    image: "./assets/images/alpukad.jpg",
  },
  {
    name: `Kiwi`,
    stok: 20,
    harga: 12000,
    image: "./assets/images/kiwi.webp",
  },
  {
    name: `Tomat`,
    stok: 20,
    harga: 2500,
    image: "./assets/images/1.jpeg",
  },
  {
    name: `Plum`,
    stok: 20,
    harga: 27000,
    image: "./assets/images/4.jpeg",
  },
  {
    name: `Pisang`,
    stok: 15,
    harga: 14000,
    image: "./assets/images/5.jpeg",
  },
  {
    name: `Almond`,
    stok: 50,
    harga: 60000,
    image: "./assets/images/6.jpeg",
  },
  {
    name: `Wortel Besar`,
    stok: 20,
    harga: 9000,
    image: "./assets/images/8.jpeg",
  },

  {
    name: `Melon`,
    stok: 20,
    harga: 22500,
    image: "./assets/images/10.jpeg",
  },
  {
    name: `Kedondong`,
    stok: 20,
    harga: 2000,
    image: "./assets/images/11.jpeg",
  },
  {
    name: `Oyong`,
    stok: 30,
    harga: 2000,
    image: "./assets/images/12.jpeg",
  },
  {
    name: `Pare`,
    stok: 20,
    harga: 2000,
    image: "./assets/images/13.jpeg",
  },
  {
    name: `Bawang Merah`,
    stok: 20,
    harga: 32000,
    image: "./assets/images/14.jpeg",
  },
  {
    name: `Kangkung`,
    stok: 20,
    harga: 2000,
    image: "./assets/images/15.jpeg",
  },
  {
    name: `Sawi`,
    stok: 20,
    harga: 4000,
    image: "./assets/images/16.jpeg",
  },
  {
    name: `Buncis`,
    stok: 20,
    harga: 2000,
    image: "./assets/images/17.jpeg",
  },
  {
    name: `Kacang Panjang`,
    stok: 20,
    harga: 2500,
    image: "./assets/images/18.jpeg",
  },
  {
    name: `Kelapa Muda`,
    stok: 110,
    harga: 5000,
    image: "./assets/images/19.jpeg",
  },
  {
    name: `Mangga Manalagi`,
    stok: 70,
    harga: 4000,
    image: "./assets/images/20.jpeg",
  },
  {
    name: `Strawberry`,
    stok: 70,
    harga: 12000,
    image: "./assets/images/21.jpeg",
  },
  {
    name: `Buah Naga`,
    stok: 70,
    harga: 10000,
    image: "./assets/images/22.jpeg",
  },
  {
    name: `Buah Nanas`,
    stok: 50,
    harga: 14000,
    image: "./assets/images/23.jpeg",
  },
  {
    name: `Jeruk`,
    stok: 20,
    harga: 18000,
    image: "./assets/images/2.jpeg",
  },
  {
    name: `Apel`,
    stok: 12,
    harga: 20000,
    image: "./assets/images/9.jpeg",
  },
];

let cart = [];

let pembelian = [];

function debug() {
  console.log(pembelian);
}

function checkAvailable() {
  var available = true;
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < food.length; j++) {
      if (cart[i].name === food[j].name) {
        if (food[j].stok < cart[i].jumlah) {
          available = false;
          alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
          break;
        }
      }
    }
    if (!available) {
      break;
    }
  }

  return available;
}

function orderFood() {
  for (var i = 0; i < cart.length; i++) {
    var notAvailable = false;
    for (var j = 0; j < food.length; j++) {
      if (cart[i].name === food[j].name) {
        if (food[j].stok < cart[i].jumlah) {
          notAvailable = true;
          alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
          break;
        }
        if (!notAvailable) {
          food[j].stok -= cart[i].jumlah;
        }
      }
    }
    if (notAvailable) {
      break;
    }
  }
  if (checkAvailable()) {
    for (var x = 0; x < cart.length; x++) {
      for (var y = 0; y < food.length; y++) {
        if (cart[x].name === food[y].name) {
        }
      }
    }
    var cartList = document.getElementById("cartList");

    // UNTUK MATIKAN CARTLIST
    cartList.setAttribute("style", "display:none");
    alert(`Pesanan telah diterima, Mohon menunggu, Total Harga : Rp${toRupiah(totalHargaMakanan)},00`);
    cart.push(totalHargaMakanan);
    pembelian.push(cart);
    totalHargaMakanan = 0;
    cart = [];
    generateData();
  }
  console.log(pembelian);
  console.log(food);
}

function addtoCart(index) {
  console.log(food[index].name);
  var hasExist = false;
  var hasEmpty = false;
  if (food[index].stok <= 0) {
    alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
    hasEmpty = true;
  }
  for (var i = 0; i < cart.length; i++) {
    if (food[index].name === cart[i].name) {
      if (food[index].stok - cart[i].jumlah <= 0) {
        alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
        hasEmpty = true;
        break;
      } else {
        totalHargaMakanan += cart[i].harga;
        //console.log(totalHargaMakanan);
        cart[i].jumlah++;
        hasExist = true;
        break;
      }
    }
  }
  if (!hasExist && !hasEmpty) {
    let obj = {
      name: food[index].name,
      harga: food[index].harga,
      jumlah: 1,
      image: food[index].image,
    };
    totalHargaMakanan += food[index].harga;
    cart.push(obj);
  }
  generateData();
  var cartlist = document.getElementById("cartList");
  if (cart.length !== 0) {
    cartlist.setAttribute("style", "display:inline-block");
  }
}

function addtoCheckout(index) {}

function removeFood(value) {
  //console.log(cart[value].jumlah);
  if (cart[value].jumlah > 0) {
    totalHargaMakanan -= cart[value].harga;
    cart[value].jumlah--;
  }
  if (cart[value].jumlah === 0) {
    cart.splice(value, 1);
  }
  generateData();
  var cartlist = document.getElementById("cartList");
  if (cart.length !== 0) {
    cartlist.setAttribute("style", "display:inline-block");
  } else {
    // UNTUK MATIKAN CARTLIST

    cartlist.setAttribute("style", "display:none");
  }
}

function toRupiah(harga) {
  var result = "";
  harga = String(harga);
  var arr = [];
  var count = 0;
  for (var i = harga.length - 1; i >= 0; i--) {
    if (count === 3 && harga[i] != undefined) {
      arr.push(".");
      arr.push(harga[i]);
      count = 1;
      // console.log(count,i,'MASUK');
    } else {
      arr.push(harga[i]);
      count++;
      //console.log(count,i-1);
    }
  }
  //console.log(arr);
  for (var i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

//console.log(toRupiah(1910450));

function generateData() {
  const foodList = document.getElementById("foodList");
  const cartList = document.getElementById("cartList");
  foodList.innerHTML = "";
  cartList.innerHTML = "";

  for (var i = 0; i < food.length; i++) {
    let name = food[i].name;
    let stok = food[i].stok;
    let harga = food[i].harga;
    let image = food[i].image;

    let divCard = document.createElement("div");
    divCard.classList.add("card");

    let imageData = document.createElement("img");
    imageData.setAttribute("src", image);
    divCard.appendChild(imageData);

    let title = document.createElement("p");
    title.innerHTML = name;
    divCard.appendChild(title);

    let divAction = document.createElement("div");
    divAction.classList.add("action");

    let spanData = document.createElement("span");
    spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
    divAction.appendChild(spanData);

    let buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
    buttonAdd.setAttribute("value", i);
    buttonAdd.setAttribute("onclick", "addtoCart(this.value)");
    divAction.appendChild(buttonAdd);
    divCard.appendChild(divAction);
    //console.log(divCard);
    foodList.appendChild(divCard);
  }

  let totalDiv = document.createElement("div");
  totalDiv.classList.add("total");

  let totalh1 = document.createElement("h1");
  totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargaMakanan)},00`;
  totalDiv.appendChild(totalh1);

  let totalhr = document.createElement("hr");
  totalDiv.appendChild(totalhr);
  //console.log(totalDiv);
  cartList.appendChild(totalDiv);

  //console.log('BelumMasuk');
  for (var x = 0; x < cart.length; x++) {
    let name = cart[x].name;
    let jumlah = cart[x].jumlah;
    let harga = cart[x].harga;
    let image = cart[x].image;
    //console.log('MASUK');
    let divCardx = document.createElement("div");
    divCardx.classList.add("card-order");
    //console.log(divCardx);

    let divCardDetail = document.createElement("div");
    divCardDetail.classList.add("detail");

    let imageData = document.createElement("img");
    imageData.setAttribute("src", image);
    divCardDetail.appendChild(imageData);

    let foodName = document.createElement("p");
    // foodName.setAttribute('id','nameCart')
    foodName.innerHTML = name;
    divCardDetail.appendChild(foodName);

    let foodJumlah = document.createElement("span");
    foodJumlah.innerHTML = jumlah;
    divCardDetail.appendChild(foodJumlah);

    divCardx.appendChild(divCardDetail);

    let buttonCancel = document.createElement("button");
    buttonCancel.setAttribute("value", x);
    buttonCancel.setAttribute("id", "cancelCart");
    buttonCancel.setAttribute("onclick", "removeFood(this.value)");
    buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
    divCardx.appendChild(buttonCancel);
    //console.log(divCardx);

    cartList.appendChild(divCardx);
  }

  let divbutton = document.createElement("div");
  divbutton.classList.add("card-finish");

  let buttonOrder = document.createElement("button");
  //buttonOrder.classList.add('order');
  buttonOrder.setAttribute("onclick", "orderFood()");
  buttonOrder.innerHTML = "ORDER SEKARANG";
  divbutton.appendChild(buttonOrder);
  cartList.appendChild(divbutton);
}

generateData();

var lightbox = new SimpleLightbox(".stars-gallery a");
