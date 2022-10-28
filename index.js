const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active')
    })
}

// Sigp-up
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message){
    let parent =  input.parentElement;
    let small =  parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent =  input.parentElement;
    let small =  parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText =""
}

function checkEmptyError(arr){
    let isEmtyError = false;
    arr.forEach(input =>{
        input.value = input.value.trim()
        if(!input.value){
            isEmtyError = true;
            showError(input, 'Không được để trống')
        }else{
            showSuccess(input)
        }
    });
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
   if( regexEmail.test(input.value)){
    showSuccess(input)
   }else{
    showError(input,'Email không hợp lệ')
   }
   return isEmailError;
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, `Phải có ít nhất ${min} ký tự`)
        return true
    }
    if(input.value.length >max){
        showError(input, `Không quá ${min} ký tự`)
        return true
    }
    return false
}

function checkSamePassword(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
    showError(cfPasswordInput,'Mật khẩu không khớp')
    return true
    }
    return false
}

form.addEventListener('submit',function(e){
    e.preventDefault()

   let isEmptyError =  checkEmptyError([username,email,password,confirmPassword])
   let isEmailError =  checkEmailError(email)
   let isUsernamLengthError = checkLengthError(username,4,15)
   let isPasswordLengthError = checkLengthError(password,4,15)
   let isCheckPasswordError = checkSamePassword(password, confirmPassword)

   if(isEmptyError || isEmailError || isUsernamLengthError || isPasswordLengthError || isCheckPasswordError){

   }else{

   }
})


// img-banner
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('prev')
var nextBtn = document.querySelector('next')

listImg.forEach(a=>{
    a.addEventListener('click',e=>{
        imgFeature.src = e.target.getAttribute('src')
    })
})


// var currentIndex = 0;
// function updateImgByIndex(index){
//     document.querySelectorAll('.list-image div').forEach(item=>{
//         item.classList.remove('img-active')
//     })

//     currentIndex = index
//     imgFeature.src = listImg[index].getAttribute('src')
//     listImg[index].parentElement.classList.add('img-active')
// }

// listImg.forEach((imgElement, index) =>{

//     imgElement.addEventListener('click',e=>{
//         updateImgByIndex(index)
//     })
// })

// prevBtn.addEventListener('click',e=>{

// })


// button up top

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

//button read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn-read");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

