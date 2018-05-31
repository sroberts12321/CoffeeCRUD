let email = document.getElementById("email")
let coffeeOrder = document.getElementById("coffeeOrder")
let submitBtn = document.getElementById("submitBtn")
let orders = document.getElementById("orders")
let deleteBtn = document.getElementById("deleteBtn")
let deleteEmail = document.getElementById("deleteEmail")
let url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"


submitBtn.addEventListener("click", ()=>{
    let coffeeVal = coffeeOrder.value
    let emailVal = email.value

    let orderSubmit = {
        "emailAddress": emailVal,
        "coffee": coffeeVal,
}

console.log(orderSubmit)

fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(orderSubmit)
}).then((response)=>{
    return response.json()
}).then((json)=>{
    console.log(json)
})

})


deleteBtn.addEventListener("click", ()=>{
    let toDelete = deleteEmail.value
    fetch(url + toDelete, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      )
})

fetch(url)
.then((response)=>{
    return response.json()
}).then((json)=>{
    for (var key in json) {
        if (json.hasOwnProperty(key)) {           
            console.log(key, json[key]);
            let local = `<li class="submittedOrders">email: ${key} || drink: ${json[key].coffee}</li>`
            orders.innerHTML += local
        }
    }
})  

//Coffee picture
//https://thisisyork.org/wp-content/uploads/2018/03/CoffeecreditShutterstockcom.jpg
