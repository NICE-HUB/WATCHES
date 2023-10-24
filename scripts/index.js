let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.getElementById("home").addEventListener("click", function() {
  alert("we regret youre going,theres still affordable watches! scroll down to see more products");
});
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});
var exchangeRateData = {
    "base": "USD",
    "date": "2018-02-13",
    "rates": {
        "CAD": 1.260046,
        "CHF": 0.933058,
        "EUR": 0.806942,
        "GBP": 0.719154,
    }
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount; 
    }
    if (exchangeRateData.base === fromCurrency) {
        return amount * exchangeRateData.rates[toCurrency];
    }
    if (exchangeRateData.base === toCurrency) {
        return amount / exchangeRateData.rates[fromCurrency];
    }
    var baseAmount = amount / exchangeRateData.rates[fromCurrency];
    return baseAmount * exchangeRateData.rates[toCurrency];
}
function calculateTotalCost() {
    var cartItems = [
        { name: "terazo", priceUSD: 19.0 },
    ];
    var totalCostUSD = cartItems.reduce(function (acc, item) {
        return acc + item.priceUSD;
    }, 0);
    return totalCostUSD;
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}