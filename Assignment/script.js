function sumCart() {
    //initialise sum variable with zero
    let sum = 0;
    //check if there is anything within the cart
    if (document.getElementById("currentCart").length === 0) {
        //empty cart won't cost anything
        sum = 0;
    } else {
        //iterate through each item in the cart
        for (let item of document.getElementById("currentCart")) {
            //add the current items value to the sum
            sum += item.value;
        }
    //return new sum object with new total
    return sum;
    }
}

//a function to live update the price of a product
function calculate_price() {
    //get the name of the product
    var product_name = document.getElementById("product_name").innerHTML;
    //get how many of the product the user wants
    var quantity = document.getElementById("quant").value;
    //select the product on screen (only one for now but should be able to update with more)
    if (product_name === "Single Origin Tanzania Mt Killimanjaro") {
        //get the weight of coffee being ordered
        var ammount = document.getElementById("amount_select").value;
        //initialise the price to 0
        var current_price = 0;
        //use $20 per 200g
        if (ammount === "200g") {
            current_price += parseInt(quantity) * 20;
        //use $40 per 500g
        } else if (ammount === "500g") {
            current_price += parseInt(quantity) * 40;
        //use $60 per 1kg
        } else if (ammount === "1kg") {
            current_price += parseInt(quantity) * 60;
        } else {
            console.log("something is wrong");
            current_price += "Something went wrong";
        }
    }

    document.getElementById("price").innerHTML = "$" + current_price;
}

//for the dropdown menus in the coffee product
var amount_selected = document.getElementById("amount_select");
var grind_selected = document.getElementById("grind_select");

var quantity_box = document.getElementById("quant");
quantity_box.onchange = calculate_price;
amount_selected.onchange = calculate_price;


// function to add an item to the cart
function addToCart() {
    
}


function createAccount() {
    //getting input from website
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("passwordConfirm");

    if (firstName.value=="" || lastName.value=="" || email.value=="" || password.value=="" || passwordConfirm.value=="") { //check all boxes filled
        alert("You must fill all boxes to create account");
    } else if (!(email.value.includes("@"))) { //check valid email
        alert("Invalid email");
    } else if (password.value != passwordConfirm.value) { //check passwords are the same
        alert("Passwords are not the same");
    } else { //valid account created so redirect to account page and prompt user
        alert("Account has successfully been created, redirecting you to your account");
        window.location="account.html"
    }

}

function login() {
    //simpler form of above function, don't need to check confirm password and don't have first and last name input
    let userEmail = document.getElementById("userEmail");
    let userPassword = document.getElementById("userPassword");

    if (userEmail.value=="" || userPassword.value=="") {
        alert("You must fill all boxes to create account");
    } else if (!(userEmail.value.includes("@"))) {
        alert("Invalid email");
    } else {
        alert("You have successfully logged in");
        window.location="account.html"
    }
}

function editAccount() {
    
}