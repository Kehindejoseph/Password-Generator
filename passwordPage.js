const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoparstuvwxyz@#$%^&*()_+?›<:!}l]"

let password1El =document.getElementById("password1-el")
let password2El =document.getElementById("password2-el")
let passwordsEl =document.getElementById("passwordEl")

passwordEl.addEventListener("click", function(){
   let passwordLength = 12
   let password = ""
    
    
    for (let i = 0; i < passwordLength; i++){
  let randomIndexOne = Math.floor(Math.random() * characters.length) 
  
  password += characters.substring(randomIndexOne, randomIndexOne +1)
  password1El.textContent = password
   }
})


passwordEl.addEventListener("click", function(){
   let passwordLength = 12
   let password = ""
    
    
    for (let i = 0; i <= passwordLength; i++){
  let randomIndexOne = Math.floor(Math.random() * characters.length) 
  
  password += characters.substring(randomIndexOne, randomIndexOne +1)
  password2El.textContent = password
   }
})
