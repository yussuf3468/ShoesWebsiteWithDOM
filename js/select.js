let selectedItem1 = decodeURIComponent(window.location.search);
console.log(selectedItem1)
let selectedItemCode = selectedItem1.substring(1)
console.log(selectedItemCode)

let selectedItem = productArr.find(item => item.itemCode === selectedItemCode);

if (selectedItem) {
    document.getElementById('itemImage').src = selectedItem.image;
    document.getElementById('itemName').innerHTML = selectedItem.shoeName;
    document.getElementById('itemPrice').innerHTML = `Kes ${selectedItem.price}`;
    document.getElementById('itemCode').innerHTML = selectedItem.itemCode;

    let cost = selectedItem.price;
    calcTotal(cost);
}

function calcTotal (cost) {
    let input = document.getElementById('quantity')
    input.value = 1
    let quantity = input.value
    let total = quantity * cost
    document.getElementById('total').innerHTML = `Your Total = ${quantity} x ${cost} = ${total}`
    
    
    input.addEventListener('input', () => {
        let quantity = input.value
        
        if(quantity > 0){
            let total = quantity * cost
            document.getElementById('total').innerHTML = `Your Total = ${quantity} x ${cost} = ${total}`
            deliveryTotal(total)
        }
    })
}

function deliveryTotal(total){
    let location = document.getElementById("location")
    location.addEventListener('change', () => {
        let deliveryFee
    if(location.value === "Kenya"){
        deliveryFee = 1000
    }
    else if(location.value === "Somalia"){
        deliveryFee = 200
    }
    else if(location.value === "UK"){
        deliveryFee = 5000
    }
    else if(location.value === "USA"){
        deliveryFee = 10000 
    }
    else{
        deliveryFee = 0
    }
    
    document.getElementById('outputCountry').innerHTML = `Your chosen location is: ${document.getElementById('location').value}`
    document.getElementById('deliveryFee').innerHTML = `Delivery Fee = ${deliveryFee}`
    let finalTotal = deliveryFee + total 
    let display = document.getElementById("finalttle")
    display.innerHTML = `Your total after delivery is : Ksh ${finalTotal}`
    })
    
} 

