let sumMRP = 0; // total MRP
let data = JSON.parse(localStorage.getItem("cart-list")) || []; // Retrieve cart data from local storage or initialize as empty array if not found

let cartItem = document.querySelector("#cart"); 
let sum = 0; // total price

function displayCart(data) {
  document.querySelector("#cart").textContent = ""; // Clear the cart element before displaying items
  console.log(data, sum);
  data.map((ele, i) => {
    

    let div = document.createElement("div"); // Create a div element for each cart item
    div.id = "mainDiv";

    let divImg = document.createElement("div"); 
    divImg.id = "imgDiv";

    let img = document.createElement("img"); 
    
    img.src = ele.image;

    let divDetails = document.createElement("div"); 
    divDetails.id = "detail";

    let productdescriptionname = document.createElement("h4"); 
    productdescriptionname.textContent = ele.title;

    // let code = document.createElement("p"); 
    // code.textContent = "2456155";

    // let MRP = document.createElement("p"); 
    // MRP.textContent = "₹ " + ele.mrp;
    // MRP.id = "displayMRPCart";

    let mrp = document.createElement("p"); 
    mrp.textContent = "₹ " + ele.price;
    mrp.id = "displayMRPfynl";

    let qty = document.createElement("div");
    qty.className = "qtyDiv";

    let disc = document.createElement("button"); // Decrease quantity button
    disc.textContent = "-";

    let qnty = document.createElement("input"); 
    qnty.value = 1;

    let add = document.createElement("button"); // Increase quantity button
    add.textContent = "+";

    let divFinalmrp = document.createElement("div"); 

    let finmrp = document.createElement("p"); // Final price
    sum += parseInt(ele.price); // Update the total price
    sumMRP += parseInt(ele.mrp); // Update the total MRP
    finmrp.textContent = "₹ " + parseInt(ele.price) * qnty.value;

    
    disc.addEventListener("click", function () {
      if (qnty.value == 1) {
        alert("Minimum Quantity could be 1");
      } else {
        qnty.value--;
        sum -= parseInt(ele.price); 
        sumMRP -= parseInt(ele.mrp); 
        finmrp.textContent = "₹ " + parseInt(ele.price) * qnty.value;
        localStorage.setItem("cart_Value", sum);

        document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
        document.getElementById("finalAmt").textContent = "₹ " + sum;
      }
    });

    
    add.addEventListener("click", function () {
      qnty.value++;
      sum += parseInt(ele.price); 
      sumMRP += parseInt(ele.mrp); 
      finmrp.textContent = "₹ " + parseInt(ele.price) * qnty.value;

      document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
      document.getElementById("finalAmt").textContent = "₹ " + sum;
      localStorage.setItem("cart_Value", sum);
    });

    let delet = document.createElement("div"); 
    let del = document.createElement("button"); // Delete button
    del.id = "delcart";
    let delimg = document.createElement("img"); // Delete button icon
    delimg.src = "../Images/delet.svg";
    delimg.id = "dellogo";

    
    del.addEventListener("click", function () {
      data.splice(i, 1); // Remove the item from the cart data
      sum -= parseInt(ele.price); 
      sumMRP -= parseInt(ele.mrp); 
      localStorage.setItem("cart", JSON.stringify(data));

      document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
      document.getElementById("finalAmt").textContent = "₹ " + sum;
      displayCart(data); 
    });

    divImg.append(img);
    del.append(delimg);
    divDetails.append(productdescriptionname, mrp);
    qty.append(disc, qnty, add);
    divFinalmrp.append(finmrp);
    delet.append(del);
    div.append(divImg, divDetails, qty, divFinalmrp, delet);
    cartItem.append(div);

    localStorage.setItem("cart_Value", sum);

    document.getElementById("displayMRP").textContent = "₹ " + sumMRP;
    document.getElementById("finalAmt").textContent = "₹ " + sum;
  });
}

displayCart(data); 

function home() {
  location.href = "../index.html"; 
}
