// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount = JSON.parse(localStorage.getItem("amount"));
console.log(amount);
document.getElementById("wallet").innerText = amount;
function confirmFun(){
   if(amount<="100")
   {
       alert("Insufficient Balance");
   }
   else{
     alert("Booking Successful");
   }
}

