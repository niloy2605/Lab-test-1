
// side manu bar 
let add = document.querySelector('.add');
let manu = document.querySelector("#manu");
let crossBtn = document.querySelector(".crossBtn");

add.addEventListener("click",()=>{
      manu.classList.add("active");
      
});

crossBtn.addEventListener("click",()=>{
      manu.classList.remove("active");
});

manu.addEventListener("click",(e)=>{
      if(e.target.classList.contains("active"))
      manu.classList.remove("active");
});

// nav scroll 
let nav = document.querySelector("nav");
let a = 0;

window.addEventListener("scroll",()=>{
      let fromTop = document.documentElement.scrollTop;
      if(fromTop < a){
          nav.classList.add("active");
      }else{
             nav.classList.remove("active");
      }

     a = fromTop;
});


// scroll to top

let btnScrollToTop = document.querySelector("#btnScrollToTop")

btnScrollToTop.addEventListener("click", ()=>{
    window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth",
    })
})

// password 

let lock = document.querySelector(".lock");
let unlock = document.querySelector(".unlock");
let input = document.querySelector(".input");

lock.addEventListener("click",()=>{
    input.type = "text";
    lock.style.display = "none";
    unlock.style.display = "block";
});

unlock.addEventListener("click",()=>{
    input.type = "password";
    unlock.style.display = "none";
    lock.style.display = "block";
});


// scroll width 

let card = document.querySelector(".card");

window.addEventListener("scroll",()=>{
   let height = document.documentElement.scrollHeight;
   let clientHeight = document.documentElement.clientHeight;
   let fromTop = document.documentElement.scrollTop;
   let sub = height - clientHeight;
   let result = fromTop * 100 / sub;

   card.style.width = `${result}%`;

})

// password generator

let passwordBox = document.getElementById("password");
let lenght = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()_+|}{[]></-=";

let allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
      let password ="";
      password += upperCase[Math.floor(Math.random() *upperCase.length)];
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      password += number[Math.floor(Math.random() * number.length)];
      password += symbol[Math.floor(Math.random() * symbol.length)];

      while( lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

      }
      passwordBox.value = password;
};

function copyPassword(){
      passwordBox.select();
      document.execCommand("copy");
}

// rbg color generator 

let colorGenerator = document.querySelector(".color-generator");
let color = document.querySelector(".color");

color.addEventListener("click",()=>{
     let red = Math.floor(Math.random() * 255);
     let green = Math.floor(Math.random() * 255);
     let blue = Math.floor(Math.random() * 255);
      console.log(colorGenerator);    
     colorGenerator.style.background = `rgb(${red} , ${green} , ${blue})`;

});


// dark mode light mode

let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let body = document.querySelector("body");


moon.addEventListener("click", ()=>{
    document.body.classList.add("mode");
    moon.style.display = "none";
    sun.style.display = "block";

});

sun.addEventListener("click", ()=>{
    document.body.classList.remove("mode");
    sun.style.display = "none";
    moon.style.display = "block";
});
