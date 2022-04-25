// Store the wallet amount to your local storage with key "amount"
function AddAmount(){
    var amount = document.getElementById("amount").value;
    console.log(amount);
    localStorage.setItem("amount",JSON.stringify(amount));
    document.getElementById("wallet").innerText = amount;



}