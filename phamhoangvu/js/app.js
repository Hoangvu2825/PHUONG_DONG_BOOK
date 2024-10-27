window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

document.getElementById("topButton").onclick = function() {
    document.body.scrollTop = 0; // Cho Firefox và Chrome
    document.documentElement.scrollTop = 0; // Cho Safari, Opera, IE
}

// JavaScript để tăng giảm số lượng

// Get the quantity input element
var quantityInput = document.getElementById('quantity');

// Get the increment and decrement buttons
var incrementButton = document.querySelector('.increment');
var decrementButton = document.querySelector('.decrement');

// Add event listeners for increment and decrement buttons
incrementButton.addEventListener('click', function() {
  quantityInput.stepUp();
});

decrementButton.addEventListener('click', function() {
  quantityInput.stepDown();
});


  

//Ảnh trang chi tiết
function showImage(img) {
  var fullImg = document.getElementById('fullImage');
  fullImg.src = img.src.replace('-small', '');
  fullImg.alt = img.alt;
  fullImg.classList.add('show');
}

