// document.getElementById("supportType").addEventListener("change", function() {
//     const supportType = this.value;
//     const paymentOptions = document.getElementById("paymentOptions");
  
//     // Show payment options based on support type
//     paymentOptions.classList.remove("hidden");
  
//     // Set payment amounts
//     let amount = 0;
//     if (supportType === "development") {
//       amount = 1500;
//     } else if (supportType === "debug") {
//       amount = 2000;
//     } else if (supportType === "designing") {
//       amount = 1000;
//     }
  
//     // Add event listeners for each payment option
//     document.getElementById("payWithUPI").onclick = function() {
//       initiatePayment(amount);
//     };
  
//     document.getElementById("payWithPaytm").onclick = function() {
//       initiatePayment(amount);
//     };
  
//     document.getElementById("payWithCard").onclick = function() {
//       initiatePayment(amount);
//     };
//   });
  
//   function initiatePayment(amount) {
//     var options = {
//       "key": "YOUR_RAZORPAY_API_KEY", // Replace with your Razorpay API Key
//       "amount": amount * 100, // Amount in paise
//       "currency": "INR",
//       "name": "Support Payment",
//       "description": "Payment for Support",
//       "image": "https://example.com/logo.png", // Optional: Your logo
//       "handler": function (response) {
//         alert("Payment Successful! Razorpay Payment ID: " + response.razorpay_payment_id);
//       },
//       "prefill": {
//         "name": "Customer Name", // You can fetch the customer's name from the form
//         "email": "customer@example.com" // You can fetch email from form
//       },
//       "notes": {
//         "supportType": document.getElementById("supportType").value
//       },
//       "theme": {
//         "color": "#F37254"
//       }
//     };
  
//     var rzp1 = new Razorpay(options);
//     rzp1.open();
//   }

//   const express = require('express');
// const Razorpay = require('razorpay');
// const app = express();

// const razorpayInstance = new Razorpay({
//   key_id: 'YOUR_RAZORPAY_API_KEY',
//   key_secret: 'YOUR_RAZORPAY_SECRET_KEY'
// });

// app.post('/create-order', (req, res) => {
//   const options = {
//     amount: req.body.amount * 100, // Convert amount to paise
//     currency: "INR",
//     receipt: "order_rcptid_11"
//   };
  
//   razorpayInstance.orders.create(options, (err, order) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.json(order);
//   });
// });


let devbtn = document.getElementById("paydev");
let debugbtn = document.getElementById("debugpay");

devbtn.addEventListener('click', ()=>{
  alert('Dear User please Contact the Owner first to initiate the payment and to block Third Party gateway.')
});

debugbtn.addEventListener('click', () => {
  alert("Dear User Please Contact the Owner first to initiate the payment and to block Third Party gateway. ")
});



