let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input',{
    strings: ['Web Developer!','Front-End Developer!', 'MERN Developer!','React.js Developer!', 'UI Designer!' ],
    typedspeed: 150,
    backspeed: 150,
    backDelay: 1000,
    loop: true,
})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

