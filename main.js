const about = document.getElementById('about')
const services = document.getElementById('services')
const xp = document.getElementById('xp')

about.addEventListener('mouseover', () =>{
    about.style.color = "blue"
    console.log('Event triggered')
})
services.addEventListener('mouseover', () =>{
    services.style.color = "blue"
    console.log('Event triggered')
})
xp.addEventListener('mouseover', () =>{
    xp.style.color = "blue"
    console.log('Event triggered')
})