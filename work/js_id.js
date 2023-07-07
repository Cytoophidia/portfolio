const names = document.querySelector('#name')
names.innerHTML = names.textContent.replace(/\S/g,"<span>$&</span>")

document.querySelectorAll('span').forEach((span, index) => {
    span.style.setProperty('--delay',`${index * 0.1}s`)
})

let resume = document.querySelector("#resume")
resume.addEventListener("click", event=>{
    location.href = "ID_FanXia_0707.pdf"
})

// let home = document.querySelector("#index")
// home.addEventListener("click", event=>{
//     location.href = "../Home.html"
// })

// let project = document.querySelector("#project")
// project.addEventListener("click", event=>{
//     location.href = "../Projects_new/projects.html"
// })

let about = document.querySelector("#about")
about.addEventListener("click", event=>{
    location.href = "../me/me_id.html"
})

let mybutton = document.getElementById("top");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}