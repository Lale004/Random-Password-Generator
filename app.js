let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", (e) => {
    span.textContent = e.target.value;
    let h5 = document.querySelector(".name h5")
    let name = document.querySelector(".name")
    if (span.textContent < 6) {
        h5.textContent = "VERY WEAK"
        name.classList.add("very_weak");
        name.classList.remove("strong","good","week","very_strong");
    }
    else if (span.textContent >= 6 && span.textContent < 10) {
        h5.textContent = " WEAK";
        name.classList.add("weak");
        name.classList.remove("very_weak","good","strong","very_strong");
    }
    else if (span.textContent >= 10 && span.textContent <= 13) {
        h5.textContent = "GOOD"
        name.classList.add("good");
        name.classList.remove("very_weak","week","strong","very_strong");
    }
    else if (span.textContent > 13 && span.textContent <= 16) {
        h5.textContent = "STRONG"
        name.classList.add("strong");
        name.classList.remove("good","very_weak","weak","very_strong");
    }
    else {
        h5.textContent = "VERY STRONG";
        name.classList.add("very_strong");
        name.classList.remove("very_weak","weak","good","strong");
    }
let p=document.querySelector(".password p")
p.textContent=generatePassword();
})
let options =[...document.querySelectorAll(" input")]
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
const generatePassword = () => {
    let Password = "",
    randomPassword = "",
    passLength = span.textContent;
    options.map(option => { 
        if(option.checked) { 

                 Password += characters[option.id];
        }
    });
    for (let i = 0; i < passLength; i++) {
        let randomChar =Password[Math.floor(Math.random() * Password.length)];
            randomPassword += randomChar;
    }
    return randomPassword;
}
let button=document.querySelector(".copy")
let p=document.querySelector(".password p")
const copyPassword = () => {
    navigator.clipboard.writeText(p.textContent); 
    button.innerText = "COPY"; 
    setTimeout(() => {
        button.innerText = "COPIED";
       button.style.color = "#fff";
    }, 500);
}
button.addEventListener("click", copyPassword);


let again=document.querySelector(".again i")
again.addEventListener("click", ()=>{
    let p=document.querySelector(".password p")
    p.innerHTML="";
   p.textContent= generatePassword(); 
});
