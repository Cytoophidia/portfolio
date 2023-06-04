const names = document.querySelector('#name')
names.innerHTML = names.textContent.replace(/\S/g,"<span>$&</span>")

document.querySelectorAll('span').forEach((span, index) => {
    span.style.setProperty('--delay',`${index * 0.1}s`)
})

let resume = document.querySelector("#resume")
resume.addEventListener("click", event=>{
    location.href = "../me/cv.pdf"
})

let home = document.querySelector("#index")
home.addEventListener("click", event=>{
    location.href = "../Home.html"
})

let project = document.querySelector("#project")
project.addEventListener("click", event=>{
    location.href = "../projects/project.html"
})

let about = document.querySelector("#about")
about.addEventListener("click", event=>{
    location.href = "../me/me.html"
})
